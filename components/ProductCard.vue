<template>
    <div class="card max-w-xs md:max-w-sm lg:max-w-md mx-auto p-4 bg-white rounded shadow-md">
      <div class="text-center">
        <img :src="product.image" alt="product thumb" class="thumb" />
      </div>
      <p class="font-bold text-gray-500 m-4 truncate">{{ product.title }}</p>
      <p class="text-gray-500 m-4 truncate">{{ product.price }}$</p>
      <div class="button-container">
        <button
          class="bg-gray-200 text-gray-700 px-4 py-2 rounded hover:bg-gray-300 transition-colors"
          @click="openCart()"
        >
          Add to Cart
        </button>
      </div>
    </div>
  </template>
  
  <script setup>
  const { product } = defineProps({ product: Object });
  const cartStore = useCartStore();
  
  const openCart = () => {
    cartStore.addToCart(product);
  };
  </script>
  
  <style lang="scss" scoped>
  .card {
    @apply mx-auto p-4 bg-white rounded shadow-md;
  }
  
  .thumb {
    max-height: 120px;
    max-width: 100%;
    display: block;
    margin: 0 auto;
  }
  
  .button-container {
    display: flex;
    justify-content: center;
    width: 100%;
    margin-top: 1rem;
  }
  </style>
  