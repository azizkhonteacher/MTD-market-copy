<template>
  <div class="product-card">
    <div class="product-card__discount">21%</div>

    <NuxtLink to="/" class="product-card__img">
      <img src="~/assets/images/def.jpg" alt="img" />
    </NuxtLink>

    <div class="product-card__text-wrapper">
      <div class="product-card__price-wrapper">
        <h3 class="product-card__price">1 500 000 so'm</h3>
        <del class="product-card__fullPrice">1 900 000 so'm</del>
      </div>

      <NuxtLink to="/" class="product-card__title">Tog' manzarasi</NuxtLink>
    </div>

    <div class="product-card__footer">
      <button>
        <cartSvg />
      </button>
      <button>
        <likeSvg />
      </button>
    </div>
  </div>
</template>

<script setup>
import cartSvg from "./icons/cartSvg.vue";
import likeSvg from "./icons/likeSvg.vue";
</script>

<style lang="scss" scoped></style>
