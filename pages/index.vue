<template>
    <div>
        <div class="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            <div v-for="p in products">
                <ProductCard :product="p" />
            </div>
        </div>
        <ProductsCart/>
    </div>
</template>

<script setup>
definePageMeta({
    layout:'default'
})
const {data:products} = await useFetch('https://fakestoreapi.com/products')

</script>