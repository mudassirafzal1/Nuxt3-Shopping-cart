// stores/cart.js
import { defineStore } from 'pinia';

export const useCartStore = defineStore('cart', {
  state: () => ({
    products: [],
    isVisible: false,
  }),
  actions: {
    addToCart(product) {
      this.products.push(product);
      this.isVisible = true;
    },
    closeCart() {
      this.isVisible = false;
    },
    removeProduct(productId) {
    this.products = this.products.filter(product => product.id !== productId);
    },
    openCart() {
        this.isVisible = true;
    }
  },
  persist: true,
});