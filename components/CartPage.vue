<template>
  <div class="basked-modal">
    <!-- BASKED MODAL HEADER -->
    <div class="basked-modal__header">
      <div class="basked-modal__title">Savat</div>
      <button class="basked-modal__close-btn" @click="store.closeModal()">
        <closeSvg />
      </button>
    </div>

    <!-- BASKED MODAL MAIN -->
    <div class="basked-modal__main">
      <baskedModalCard
        v-for="cartItem in store.cart"
        :key="cartItem"
        :product="cartItem"
      />
    </div>

    <!-- BASKED MODAL FOOTER -->
    <div class="basked-modal__footer">
      <div class="basked-modal__footer-top">
        <span>Jami {{ totalQuantity }} Mahsulot</span>
        <h2>{{ totalPriceFormat }} so'm</h2>
      </div>

      <button>Xarid Qilish</button>
    </div>
  </div>
</template>

<script setup>
import baskedModalCard from "~/components/baskedModalCard.vue";
import closeSvg from "~/components/icons/closeSvg.vue";
import { useStore } from "~/store/store";
// varibles
const store = useStore();

// maxsulotlar umumiy soni
const totalQuantity = computed(() => {
  return store.cart.reduce((total, item) => total + item.quantity, 0);
});

// maxsulotlarni umumiy narxi

const totalPrice = computed(() => {
  return store.cart.reduce((total, item) => total + (item.price * item.quantity), 0);
});

const totalPriceFormat = computed(() => {
  const total = store.cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
  return total.toLocaleString("en-US").replace(/,/g, " ");
});

console.log(totalQuantity);
</script>

<style lang="scss" scoped></style>
