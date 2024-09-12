<template>
	<div>
		<header>
			<nav class="container mx-auto p-4 flex justify-between items-center">
        <NuxtLink class="font-bold" to="/">Voxel <strong class="text-gray-400">Store</strong></NuxtLink>
        <button class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500" @click="openCart()">
          Cart
        </button>
      </nav>
			<img src="~/assets/images/Hero.png" />
		</header>
		<ProductNav></ProductNav>
		<div class="container mx-auto p-4">
				<slot/>
		</div>
		<footer class="flex align-center justify-center mt-4">
			<NuxtLink class="font-bold" to="/">Voxel <strong class="text-gray-400">Store</strong></NuxtLink>
		</footer>
	</div>
</template>

<script setup>
const cartStore = useCartStore();

const openCart = () => {
  cartStore.openCart();
};

</script>