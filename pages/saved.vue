<template>
  <div class="products">
    <div class="container">
      <h3 class="products__title">{{ $t('Sevimlilar') }}</h3>

      <div class="products__wrapper" v-if="likePro.length">
        <product-card v-for="i in likePro" :key="i" :product="i" />
      </div>

      <div class="not-available" v-if="!likePro.length">
        <h2>{{ $t('bosh') }}</h2>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useStore } from "~/store/store";

const store = useStore();
const likePro1 = ref({});
// const likePro = computed(() => store.like?.items)
const likePro = computed(() => likePro1.value = store.like?.items)
</script>

<style lang="scss" scoped></style>
