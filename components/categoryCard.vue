<template>
  <div class="category-card">
    <NuxtLink class="category-card__img" to="/">
      <img src="~/assets/images/def.jpg" alt="img" />
    </NuxtLink>

    <div class="category-card__text-wrapper">
      <NuxtLink to="/" class="category-card__title">
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </NuxtLink>

      <ul class="attribute__wrapper">
        <li class="attribute__wrapper-item">
          <h4>Brend</h4>
          <h5>Sayqal</h5>
        </li>
        <li class="attribute__wrapper-item">
          <h4>Davlat</h4>
          <h5>O'zbekiston</h5>
        </li>
      </ul>
    </div>

    <div class="category-card__bottom">
      <div class="category-card__price-wrapper">
        <h3 class="category-card__price">1 700 000 so'm</h3>
      </div>

      <div class="category-card__footer">
        <button>
          <cartSvg />
        </button>
        <button>
          <likeSvg />
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import cartSvg from "./icons/cartSvg.vue";
import likeSvg from "./icons/likeSvg.vue";
</script>

<style lang="scss" scoped></style>
