<template>
  <div class="basket-modal__card">
    <!-- IMG -->
    <div class="basket-modal__card-img">
      <img :src="product?.image" alt="img" />
    </div>

    <!-- TEXT WRAPPER -->
    <div class="basket-modal__card-text-wrapper">
      <NuxtLink
        :to="`/detail/${product?.slug}`"
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
        <button class="fvrt-btn">
          <likeSvg />
        </button>
        <button class="delete-btn">
          <trashSvg />
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
// varible's
const store = useStore();
const { product } = defineProps(["product"]);

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

// func
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
