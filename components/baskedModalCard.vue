<template>
  <div class="basket-modal__card">
    <!-- IMG -->
    <div class="basket-modal__card-img">
      <img src="~/assets/images/def.jpg" alt="img" />
    </div>

    <!-- TEXT WRAPPER -->
    <div class="basket-modal__card-text-wrapper">
      <NuxtLink to="/" class="basket-modal__card-title">karbon tolali</NuxtLink>
      <h4 class="basket-modal__card-price">1 500 000 so'm</h4>
    </div>

    <!-- BTN WRAPPER -->
    <div class="basket-modal__card-btn-wrapper">
      <!-- top -->
      <div class="basket-modal__card-btn-wrapper__top">
        <button class="minus">-</button>
        <div class="quantity-carts">5</div>
        <button class="plus">+</button>
      </div>

      <!-- bottom -->
      <div class="basket-modal__card-btn-wrapper__bottom">
        <button class="fvrt-btn">
          <likeSvg />
        </button>
        <button class="delete-btn">
          <cartSvg />
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import likeSvg from "./icons/likeSvg.vue";
import cartSvg from "./icons/cartSvg.vue";
</script>

<style lang="scss" scoped></style>
