<template>
  <div class="basked-modal">
    <!-- BASKED MODAL HEADER -->
    <div class="basked-modal__header">
      <div class="basked-modal__title">Savat</div>
      <button class="basked-modal__close-btn">
        <closeSvg />
      </button>
    </div>

    <!-- BASKED MODAL MAIN -->
    <div class="basked-modal__main">
      <baskedModalCard />
    </div>

    <!-- BASKED MODAL FOOTER -->
    <div class="basked-modal__footer">
      <div class="basked-modal__footer-top">
        <span>Jami 2 Mahsulot</span>
        <h2>3 500 000 so'm</h2>
      </div>

      <button>Xarid Qilish</button>
    </div>
  </div>
</template>

<script setup>
import baskedModalCard from "~/components/baskedModalCard.vue";
import closeSvg from "~/components/icons/closeSvg.vue";
</script>

<style lang="scss" scoped></style>
