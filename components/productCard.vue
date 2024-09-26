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
        <del class="product-card__fullPrice" v-if="product?.oldPrice">{{
          product?.oldPriceFormat
        }}</del>
      </div>

      <NuxtLink :to="`/detail/${product?.slug}`" class="product-card__title">{{
        product?.name
      }}</NuxtLink>
    </div>

    <div class="product-card__footer">
      <button>
        <cartSvg />
      </button>
      <button :class="{ 'active-svg': checkLike }" @click="checkLikeBtn()">
        <likeSvg />
      </button>
    </div>
  </div>
</template>

<script setup>
import cartSvg from "./icons/cartSvg.vue";
import likeSvg from "./icons/likeSvg.vue";
import { useStore } from "~/store/store";
import login from "~/services/login";
// varibles
const { product } = defineProps(["product"]);
const store = useStore();
// fetch
async function getLikeProduct() {
  if (store.token) {
    try {
      const res = await login.getLikeProduct(store.token);
      store.like = res.data;
    } catch (error) {
      console.error("Failed to fetch user info:", error);
      // Handle error (e.g., show a notification or redirect)
    }
  }
}
async function postLike() {
  const res = await login.postLikeProduct(product?.slug, store.token);
  getLikeProduct();
}

// function
const checkLike = computed(() => {
  const productId = product?.id;
  const likeItems = store.like?.items;

  if (likeItems && Array.isArray(likeItems) && productId) {
    const itemLike = likeItems.find((el) => el.id == productId);
    return !!itemLike; // Agar 'itemLike' mavjud bo'lsa true, aks holda false qaytaradi
  } else {
    return false;
  }
});
function checkLikeBtn() {
  if (store.token) {
    postLike();
  } else {
    store.overlay = true;
    store.loginModal = true;
  }
}
// console.log(product);
// console.log(store?.items?.id);
</script>

<style lang="scss" scoped></style>
