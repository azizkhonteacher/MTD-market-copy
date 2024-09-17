<template>
  <div class="help">
    <div class="help__main">
      <div class="container">
        <ul class="help__nav" :class="{ active: store.openPage }">
          <h4 class="help__nav-title">Ma'lumot</h4>

          <button class="help__nav-close-btn" @click="store.openPage = false">
            <closeSvgVue />
          </button>

          <li class="help__nav-item">
            <NuxtLink to="/page1">
              <div class="help__nav-item__text-wrapper">
                <h3 class="help__nav-item__title">Tezkor Yetkazib berish</h3>
              </div>
            </NuxtLink>
          </li>

          <li class="help__nav-item">
            <NuxtLink to="/page1">
              <div class="help__nav-item__text-wrapper">
                <h3 class="help__nav-item__title">
                  Buyurtmalarni rasmiylashtirish
                </h3>
              </div>
            </NuxtLink>
          </li>
        </ul>

        <button class="help-menu-btn" @click="store.openPage = true">
          <img src="~/assets/images/svg/Menu.svg" alt="menu" />
          <span>Ma'lumotlar</span>
        </button>

        <ul class="help__info">
          <li class="help__info-item">
            <h3>Yekazib berishni qanday usullari mavjud</h3>
            <p>
              Mahsulot tarqatish punktiga yetkzib berish : MTD market buyurtma
              tarqatish punktigacha yetkazib berish bepul
            </p>
          </li>
          <li class="help__info-item">
            <h3>
              Belgilangan mahsulot tarqatish punktini qanday o’zgartirish mumkun
            </h3>
            <p>
              Mahsulot tarqatish punktiga yetkzib berish : MTD market buyurtma
              tarqatish punktigacha yetkazib berish bepul
            </p>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup>
import closeSvgVue from "~/components/icons/closeSvg.vue";

import { useStore } from "~/store/store";
const store = useStore();
</script>
<style lang="scss" scoped></style>
