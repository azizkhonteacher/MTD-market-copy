<template>
  <div class="category-card">
    <NuxtLink class="category-card__img" :to="`/detail/${product?.slug}`">
      <img :src="product?.imageUrl" alt="img" />
    </NuxtLink>

    <div class="category-card__text-wrapper">
      <NuxtLink :to="`/detail/${product?.slug}`" class="category-card__title">
        {{ product?.name }}
      </NuxtLink>

      <ul class="attribute__wrapper">
        <li class="attribute__wrapper-item">
          <h4>Brend</h4>
          <h5>{{ product?.brandName }}</h5>
        </li>
        <li class="attribute__wrapper-item">
          <h4>Davlat</h4>
          <h5>{{ product?.countryName }}</h5>
        </li>
      </ul>
    </div>

    <div class="category-card__bottom">
      <div class="category-card__price-wrapper">
        <h3 class="category-card__price">{{ product?.priceFormat }}</h3>
      </div>

      <div class="category-card__footer">
        <button>
          <cartSvg />
        </button>
        <button :class="{ 'active-svg': checkLike }" @click="checkLikeBtn()">
          <likeSvg />
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import cartSvg from "./icons/cartSvg.vue";
import likeSvg from "./icons/likeSvg.vue";
import { useStore } from "~/store/store";
import login from "~/services/login";
// varible's
const { product } = defineProps(["product"]);
const store = useStore();
// fetch
async function getLikeProduct() {
  if (store.token) {
    try {
      const res = await login.getLikeProduct(store.token);
      store.like = res;
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
  const itemLike = store.like?.data?.items.find((el) => el.id == product?.id);
  if (itemLike) {
    return true;
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
</script>

<style lang="scss" scoped></style>
