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

          <div class="catalog">
            <div class="container">
              <!-- catalog-header blogi mediada ishlaydi -->
              <div class="catalog-header">
                <h2>Kategoriyalar</h2>
                <button>
                  <closeSvg />
                </button>
              </div>
              <!--  -->

              <ul class="catalog-menu">
                <div class="catalog-wrapper">
                  <li class="catalog-wrapper__item">
                    <span>
                      <img
                        src="https://api.mtdmarket.uz/uploads/images/parentCategory/1/65c6000c44bcb.png"
                        alt="icon"
                      />
                      " Aravachalar "

                      <rightArrowSvg />
                    </span>
                    <ul class="catalog-wrapper__sub-menu">
                      <div class="catalog-wrapper__sub-menu-wrapper">
                        <!-- media da ishlaydigan tugma -->
                        <button>
                          <rightArrowSvg />
                          " ortga qaytish "
                        </button>
                        <!--  -->

                        <a href="#" class="cotalog-wrapper__sub-menu__title"
                          >Aravachalar</a
                        >

                        <li>
                          <div class="cotalog-wrapper__sub-menu__name">
                            <a href="#">Mexanik nogironlar aravachalari</a>
                          </div>
                        </li>                
                        <li>
                          <div class="cotalog-wrapper__sub-menu__name">
                            <a href="#">Mexanik nogironlar aravachalari</a>
                          </div>
                        </li>
                        <li>
                          <div class="cotalog-wrapper__sub-menu__name">
                            <a href="#">Mexanik nogironlar aravachalari</a>
                          </div>
                        </li>
                        <li>
                          <div class="cotalog-wrapper__sub-menu__name">
                            <a href="#">Mexanik nogironlar aravachalari</a>
                          </div>
                        </li>
                      </div>
                    </ul>
                  </li>

                  <!-- 
                  <li class="catalog-wrapper__item"></li>
                  <li class="catalog-wrapper__item"></li>
                  <li class="catalog-wrapper__item"></li>
                  <li class="catalog-wrapper__item"></li> 
                  -->
                </div>
              </ul>
            </div>
          </div>
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
import closeSvg from "~/components/icons/closeSvg.vue";
import rightArrowSvg from "~/components/icons/rightArrowSvg.vue";

// import store
import { useStore } from "~/store/store";
const store = useStore();
</script>

<style lang="scss" scoped></style>
