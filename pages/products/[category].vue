<template>
  <div class="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
    <div v-for="p in categories">
      <ProductCard :product="p" />
    </div>
    <ProductsCart/>
  </div>
</template>

<script setup>
definePageMeta({
  layout: "default",
});
const { category } = useRoute().params;
const { data: categories } = await useFetch(
  `https://fakestoreapi.com/products/category/${category}`,
  { key: category }
);
</script>
