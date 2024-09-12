<template>
  <div :class="['side-drawer', { visible: cartStore.isVisible }]">
    <div class="drawer-content">
      <!-- Title and Close Button -->
      <div class="drawer-header">
        <h2 class="drawer-title">
          Your Cart ({{ cartStore.products.length }})
        </h2>
        <button @click="closeDrawer" class="close-btn">X</button>
      </div>

      <hr class="divider" />

      <!-- Drawer Items -->
      <div class="drawer-items">
        <div
          v-for="item in cartStore.products"
          :key="item.id"
          class="drawer-item"
        >
          <div class="item-image-box">
            <img :src="item.image" alt="item image" class="item-image" />
          </div>
          <div class="item-details">
            <p class="item-title">{{ item.title }}</p>
            <div class="item-price-section">
              <p class="item-price">${{ item.price }}</p>
              <button @click="removeItem(item.id)" class="remove-btn">
                Remove
              </button>
            </div>
          </div>
          <hr class="divider" />
        </div>
      </div>

      <div class="total-section">
        <p>Total</p>
        <span class="total-price">${{ totalPrice.toFixed() }}</span>
      </div>

      <!-- Continue to Checkout Button -->
      <button @click="proceedToCheckout" class="checkout-btn">
        Continue to Checkout
      </button>
    </div>
  </div>
</template>

<script setup>
const cartStore = useCartStore();
const removeItem = (itemId) => {
  cartStore.removeProduct(itemId); // Assuming `removeItem` is defined in the store
};
const closeDrawer = ()=>{
    cartStore.closeCart();
}
const totalPrice = computed(() => {
  return cartStore.products.reduce(
    (total, product) => total + product.price,
    0
  );
});
</script>

<style lang="scss" scoped>
.side-drawer {
  position: fixed;
  top: 0;
  right: 0;
  height: 100%;
  width: 400px;
  background: white;
  box-shadow: -2px 0 5px rgba(0, 0, 0, 0.5);
  transform: translateX(100%);
  transition: transform 0.3s ease;

  &.visible {
    transform: translateX(0);
  }

  .drawer-content {
    padding: 16px;
    height: 100%;
    overflow-y: auto;
  }

  .drawer-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 16px;

    .drawer-title {
      font-size: 20px;
      font-weight: bold;
    }

    .close-btn {
      background: transparent;
      border: none;
      font-size: 24px;
      cursor: pointer;
    }
  }

  .divider {
    border: none;
    height: 1px;
    background-color: #ddd;
    margin: 16px 0;
  }

  .drawer-items {
    .drawer-item {
      display: flex;
      align-items: flex-start;
      margin-bottom: 16px;

      .item-image-box {
        width: 100px;
        height: 100px;
        margin-right: 16px;
        overflow: hidden;
        display: flex;
        align-items: center;
        justify-content: center;
        border: 1px solid #eee;

        .item-image {
          max-width: 100%;
          max-height: 100%;
          object-fit: cover;
        }
      }

      .item-details {
        flex: 1;

        .item-title {
          font-weight: bold;
          margin-bottom: 8px;
        }

        .item-price-section {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-top: 8px;

          .item-price {
            color: gray;
          }

          .remove-btn {
            background: none;
            border: none;
            color: lightgray;
            font-size: 14px;
            cursor: pointer;
          }
        }
      }
    }
  }

  .total-section {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 24px 0;
    font-size: 18px;
    font-weight: bold;

    .total-price {
      margin-left: auto; /* Moves the total price to the right */
      color: #000;
    }
  }
  .checkout-btn {
    width: 100%;
    padding: 12px;
    background-color: #462ddf; /* Primary color */
    color: white;
    font-size: 16px;
    font-weight: bold;
    border: none;
    cursor: pointer;
    text-align: center;
    border-radius: 4px;
    transition: background-color 0.3s ease;

    &:hover {
      background-color: #0056b3;
    }
  }
}
</style>
