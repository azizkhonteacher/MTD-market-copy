<template>
  <div class="basket-modal__card">
    <!-- IMG -->
    <div class="basket-modal__card-img">
      <img :src="product?.image" alt="img" />
    </div>

    <!-- TEXT WRAPPER -->
    <div class="basket-modal__card-text-wrapper">
      <NuxtLink
        :to="localePath(`/detail/${product?.slug}`)"
        class="basket-modal__card-title"
        >{{ product?.title }}</NuxtLink
      >
      <h4 class="basket-modal__card-price">{{ product?.priceFormat }}</h4>
    </div>

    <!-- BTN WRAPPER -->
    <div class="basket-modal__card-btn-wrapper">
      <!-- top -->
      <div class="basket-modal__card-btn-wrapper__top">
        <button class="minus" @click="remove(cartItem)">-</button>
        <div class="quantity-carts">{{ productCart?.quantity }}</div>
        <button class="plus" @click="add(cartItem)">+</button>
      </div>

      <!-- bottom -->
      <div class="basket-modal__card-btn-wrapper__bottom">
        <!-- like -->
        <button
          class="fvrt-btn"
          :class="{ 'active-svg': checkLike }"
          @click="checkLikeBtn()"
        >
          <likeSvg />
        </button>
        <!-- trash -->
        <button class="delete-btn">
          <trashSvg @click="trash(cartItem)" />
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
// import's
import likeSvg from "./icons/likeSvg.vue";
import trashSvg from "./icons/trashSvg.vue";
import { add } from "~/composables/addCartProduct";
import { remove } from "~/composables/remCartProduct";
import { useStore } from "~/store/store";
import login from "~/services/login";
// varible's
const store = useStore();
const { product } = defineProps(["product"]);
const localePath = useLocalePath();
//    LOCALSTORE GA SAQLASH
const cartItem = computed(() => {
  const item = {
    id: product?.id,
    title: product?.name,
    image: product?.imageUrl,
    price: product?.price,
    priceFormat: product?.priceFormat,
    slug: product?.slug,
    quantity: 1,
  };
  return item;
});
//    LIKE
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
//    TRASH
const trash = (product) => {
  // Savatdan mahsulotni qidiramiz
  const item = toRaw(store.cart).find((el) => el.id == product.id);
  // Agar mahsulot savatda bo'lsa, uni olib tashlaymiz
  if (item) {
    let index = store.cart.indexOf(item);
    store.cart.splice(index, 1); // Mahsulotni savatdan olib tashlash
  }
  // Yangilangan savatni localStorage'ga saqlash
  localStorage.setItem("cart", JSON.stringify(store.cart));
};

// function
// cart product quantity count
const productCart = computed(() => {
  const item = store.cart.find((el) => el.id == product?.id);
  if (item) {
    return item;
  } else {
    return false;
  }
});
</script>

<style lang="scss" scoped></style>
