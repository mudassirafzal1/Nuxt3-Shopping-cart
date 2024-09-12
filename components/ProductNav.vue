<template>
    <div>
      <nav class="container mx-auto p-4 relative">
        <!-- Desktop menu -->
        <ul class="hidden md:flex md:gap-4">
          <li>
            <NuxtLink
              to="/"
              :class="getLinkClass(`/`)"
              active-class="text-black border-b-2 border-black"
              exact-active-class="text-black border-b-2 border-black"
            >All</NuxtLink>
          </li>
          <li v-for="c in categories" :key="c">
            <NuxtLink
              :to="`/products/${c}`"
              :class="getLinkClass(`/products/${c}`)"
              active-class="text-black border-b-2 border-black"
              exact-active-class="text-black border-b-2 border-black"
            >{{ c }}</NuxtLink>
          </li>
        </ul>
  
        <!-- Mobile dropdown menu -->
        <div v-if="isDropdownOpen && isMobile" class="md:hidden fixed inset-x-0 top-16 flex justify-center">
          <ul class="bg-white border border-gray-300 text-sm rounded-lg shadow-lg w-64">
            <li v-for="c in categories" :key="c">
              <NuxtLink
                :to="`/products/${c}`"
                :class="getLinkClass(`/products/${c}`)"
                active-class="text-black border-b-2 border-black"
                exact-active-class="text-black border-b-2 border-black"
                @click="handleLinkClick"
                class="block px-4 py-2"
              >{{ c }}</NuxtLink>
            </li>
            <li>
              <NuxtLink
                to="/"
                :class="getLinkClass(`/`)"
                active-class="text-black border-b-2 border-black"
                exact-active-class="text-black border-b-2 border-black"
                @click="handleLinkClick"
                class="block px-4 py-2"
              >All</NuxtLink>
            </li>
          </ul>
        </div>
  
        <!-- Button to toggle dropdown (only visible on mobile) -->
        <button 
          v-if="isMobile"
          @click="toggleDropdown"
          class="md:hidden p-2 absolute top-4 right-4"
        >
          <!-- Icon for dropdown toggle -->
          &#9776;
        </button>
      </nav>
    </div>
  </template>
  
  
  
  <script setup>
  import { ref, onMounted } from 'vue';
  
  definePageMeta({
    layout: "detail",
  });
  
  const { data: categories } = await useFetch(
    "https://fakestoreapi.com/products/categories"
  );
  
  const route = useRoute();
  const isDropdownOpen = ref(false);
  const isMobile = ref(false);
  
  const toggleDropdown = () => {
    isDropdownOpen.value = !isDropdownOpen.value;
  };
  
  const handleLinkClick = () => {
    if (isMobile.value) {
      isDropdownOpen.value = false;
    }
  };
  
  const getLinkClass = (path) => {
    return route.path === path
      ? "text-black border-b-2 border-black"
      : "text-gray-400 hover:text-black";
  };
  
  onMounted(() => {
    const updateMobileStatus = () => {
      isMobile.value = window.innerWidth < 768;
      if (!isMobile.value) {
        isDropdownOpen.value = false; // Close dropdown if not mobile
      }
    };
    updateMobileStatus();
    window.addEventListener('resize', updateMobileStatus);
  });
  </script>
  
  
