<template>
  <div>
    <header>
      <div class="header__top">
        <div class="container">
          <NuxtLink to="/" class="header__top-logo">
            <img src="~/assets/images/logo.svg" alt="logo" />
          </NuxtLink>

          <ul class="header__top-nav">
            <li class="header__top-nav__item">
              <a href="#">Tezkor Yetkazib berish</a>
            </li>
            <li class="header__top-nav__item">
              <a href="#">Buyurtmalarni rasmiylashtirish</a>
            </li>
          </ul>

          <a class="header__top-tel" href="tel:+998905889926">
            <phoneTelVue class="w-5 h-5" />
            <span>+998905889926</span>
          </a>

          <div class="header__lang">
            <div
              class="header__lang-top"
              @click="store.openLang = !store.openLang"
            >
              <span>Uz</span>
              <img
                src="https://www.mtdmarket.uz/_nuxt/Arrow.29b2f6a3.svg"
                alt="img"
              />
            </div>
            <div class="header__lang-list" v-if="store.openLang">
              <li><a href="#">Uz</a></li>
              <li><a href="#">Ru</a></li>
              <li><a href="#">Eng</a></li>
            </div>
          </div>
        </div>
      </div>

      <div class="header__center">
        <div class="container">
          <NuxtLink to="/" class="header__center-logo">
            <img src="~/assets/images/logo.svg" alt="logo" />
          </NuxtLink>

          <button class="header__center-burger-btn">
            <img src="~/assets/images/svg/Menu.svg" alt="" />
          </button>

          <form class="header__center-form">
            <div class="header__center-form-top">
              <input
                type="text"
                required
                class="header__center-form__input"
                placeholder="Qidirish..."
              />

              <button type="submit" class="header__center-form-btn">
                <img src="~/assets/images/svg/search.svg" alt="search" />
                <span>Qidirish</span>
              </button>
            </div>
          </form>

          <ul class="header__center-list">
            <li>
              <UserSvgVue />
              <span>Kirish</span>
            </li>
            <li>
              <div class="img">
                <span class="header__center-list__quantity">10</span>
                <likeSvgVue />
              </div>
              <span>Sevimlilar</span>
            </li>
            <li>
              <div class="img">
                <span class="header__center-list__quantity">10</span>
                <cartSvgVue />
              </div>
              <span>Savat</span>
            </li>
          </ul>
        </div>
      </div>

      <div class="header__bottom">
        <div class="container">
          <div class="header__bottom-category-btn">
            <img src="~/assets/images/svg/list.svg" alt="list" />
            <span>Kategoriyalar</span>
          </div>

          <nav class="header__bottom-nav">
            <ul class="header__bottom-nav__list">
              <li v-for="i in 5" :key="i">
                <a href="#">Aravachalar</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
    <div class="mobile-menu"></div>
    <main></main>
    <footer></footer>
  </div>
</template>

<script setup>
// import icons
import phoneTelVue from "~/components/icons/phoneTel.vue";
import UserSvgVue from "~/components/icons/UserSvg.vue";
import likeSvgVue from "~/components/icons/likeSvg.vue";
import cartSvgVue from "~/components/icons/cartSvg.vue";

// import store
import { useStore } from "~/store/store";
const store = useStore();
</script>

<style lang="scss" scoped></style>
