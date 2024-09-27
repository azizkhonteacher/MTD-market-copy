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
      <!-- cart -->
      <button
        @click="addOrRemoveFromCart(cartItem)"
        :class="{ 'active-svg': isProductInCart}"
      >
        <cartSvg />
      </button>
      <!-- like -->
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
//          like
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

//                          cart
const cartItem = computed(() => {
  const item = {
    id: product?.id,
    title: product?.name,
    image: product?.imageUrl,
    price: product?.price,
    priceFormat: product?.priceFormat,
    slug: product?.slug,
    productCount: product?.residue_store,
    quantity: 1,
  };
  return item;
});

// localga saqlash
const addOrRemoveFromCart = (product) => {
  const item = toRaw(store.cart).find((el) => el.id == product.id);

  // Agar mahsulot savatda bo'lsa, uni olib tashlaymiz
  if (item) {
    let index = store.cart.indexOf(item);
    store.cart.splice(index, 1); // Mahsulotni savatdan olib tashlash
  } else {
    // Agar mahsulot savatda bo'lmasa, uni savatga qo'shamiz
    store.cart.push(product);
  }

  // Savatdagi ma'lumotlarni localStorage'ga yozish
  localStorage.setItem("cart", JSON.stringify(store.cart));
};
// Mahsulot savatda bormi yoki yo'qligini tekshirish
const isProductInCart = computed(() => {
  let item = store.cart.find((el) => el.id === product?.id);
  if (item) {
    return true;
  } else {
    return false;
  }
});

</script>

<style lang="scss" scoped></style>
