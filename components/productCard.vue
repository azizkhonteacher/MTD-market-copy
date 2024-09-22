<template>
  <div class="product-card">
    <div v-if="product?.discount" class="product-card__discount">
      {{ product?.discount?.toFixed() }}%
    </div>

    <NuxtLink :to="`/detail/${product?.slug}`" class="product-card__img">
      <img :src="product?.imageUrl" alt="img" />
    </NuxtLink>

    <div class="product-card__text-wrapper">
      <div class="product-card__price-wrapper">
        <h3 class="product-card__price">{{ product?.priceFormat }}</h3>
        <del class="product-card__fullPrice" v-if="product?.oldPrice">{{ product?.oldPriceFormat }}</del>
      </div>

      <NuxtLink to="/" class="product-card__title">{{ product?.name }}</NuxtLink>
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
const { product } = defineProps(["product"]);
</script>

<style lang="scss" scoped></style>
