<template>
  <div>
    <!-- HEADER STAR -->
    <header>
      <!-- HEADER TOP START -->
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
      <!-- HEADER TOP END -->

      <!-- HEADER MENU START -->
      <div class="header__menu" :class="{'openBurger': store.openHeaderMenu}">
        <div class="header__menu-top">
          <NuxtLink to="/" class="header__menu-logo">
            <img src="~/assets/images/logo.svg" alt="logo" />
          </NuxtLink>
          <button class="header__menu-close-btn" @click="store.openHeaderMenu = false">
            <closeSvg />
          </button>
        </div>
        <div class="header__menu-main">
          <NuxtLink to="/" class="header__menu-registration-wrapper">
            <div class="profile-icon">
              <UserSvgVue />
            </div>
            <div class="profile-info">
              <h4
                style="
                  overflow: hidden;
                  text-overflow: ellipsis;
                  white-space: nowrap;
                "
              >
                Esonov Azizxon055
              </h4>

              <h4 v-if="false">Shaxsiy Ma'lumot</h4>
            </div>
          </NuxtLink>

          <div class="header__menu-nav">
            <ul>
              <li>
                <NuxtLink to="/"> Tezkor Yetkazib berish</NuxtLink>
              </li>
              <li>
                <NuxtLink to="/"> Buyurtmalarni rasmiylashtirish</NuxtLink>
              </li>
            </ul>
          </div>

          <div class="header__menu-lang-btns">
            <li><a href="#">Uz</a></li>
            <li><a href="#">Ru</a></li>
            <li><a href="#">Eng</a></li>
          </div>
        </div>
      </div>
      <!-- HEADER MENU END -->

      <!-- HEADER CENTER START -->
      <div class="header__center">
        <div class="container">
          <NuxtLink to="/" class="header__center-logo">
            <img src="~/assets/images/logo.svg" alt="logo" />
          </NuxtLink>

          <button class="header__center-burger-btn" @click="store.openHeaderMenu = true">
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
      <!-- HEADER CENTER END -->

      <!-- HEADER BOTTOM START -->
      <div class="header__bottom">
        <div class="container">
          <div
            class="header__bottom-category-btn"
            @click="store.openKategory = !store.openKategory"
          >
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

          <div class="catalog" :class="{'openKategory': store.openKategory}">
            <div class="container">
              <!-- catalog-header blogi mediada ishlaydi -->
              <div class="catalog-header">
                <h2>Kategoriyalar</h2>
                <button @click="store.openKategory = false">
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
      <!-- HEADER BOTTOM END -->
    </header>

    <!-- HEADER END -->

    <!-- MABILE MENU STAR -->
    <div class="mobile-menu">
      <ul class="mobile-menu__wrapper">
        <!-- home -->
        <li>
          <NuxtLink class="mobile-menu__wrapper-item home-menu" to="/">
            <homeSvg />
            <span>Bosh sahifa</span>
          </NuxtLink>
        </li>
        <!-- category -->
        <li
          class="mobile-menu__wrapper-item"
          @click="store.openKategory = true"
        >
          <svg
            width="25"
            height="25"
            viewBox="0 0 25 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M14.5186 13.799C16.5729 13.799 18.2382 12.1337 18.2382 10.0794C18.2382 8.02512 16.5729 6.3598 14.5186 6.3598C12.4643 6.3598 10.799 8.02512 10.799 10.0794C10.799 12.1337 12.4643 13.799 14.5186 13.799ZM18.866 13.5767L23.2281 17.9388C23.5901 18.3008 23.5918 18.8862 23.2261 19.2519C22.863 19.615 22.2745 19.6153 21.913 19.2538L17.4726 14.8135C16.616 15.3492 15.6034 15.6588 14.5186 15.6588C11.4372 15.6588 8.93919 13.1608 8.93919 10.0794C8.93919 6.99798 11.4372 4.5 14.5186 4.5C17.6 4.5 20.098 6.99798 20.098 10.0794C20.098 11.4036 19.6367 12.62 18.866 13.5767ZM1.5 7.75465C1.5 7.24108 1.81596 6.82475 2.19535 6.82475H6.38404C6.76807 6.82475 7.07939 7.2375 7.07939 7.75465C7.07939 8.26821 6.76343 8.68454 6.38404 8.68454H2.19535C1.81132 8.68454 1.5 8.2718 1.5 7.75465ZM1.5 13.334C1.5 12.8205 1.81596 12.4041 2.19535 12.4041H6.38404C6.76807 12.4041 7.07939 12.8169 7.07939 13.334C7.07939 13.8476 6.76343 14.2639 6.38404 14.2639H2.19535C1.81132 14.2639 1.5 13.8512 1.5 13.334ZM1.5 18.9134C1.5 18.3999 1.8059 17.9835 2.19655 17.9835H15.4494C15.834 17.9835 16.1459 18.3963 16.1459 18.9134C16.1459 19.427 15.84 19.8433 15.4494 19.8433H2.19655C1.81186 19.8433 1.5 19.4306 1.5 18.9134Z"
              fill="#AAAAAA"
              stroke="none"
            />
          </svg>

          <span>Kategoriyalar</span>
        </li>
        <!-- cart -->
        <li class="mobile-menu__wrapper-item">
          <div class="img">
            <cartSvgVue />
            <span class="header__center-list__quantity">12</span>
          </div>
          <span>Savat</span>
        </li>
        <!-- like  -->
        <li class="mobile-menu__wrapper-item">
          <div class="img">
            <likeSvgVue />
            <span class="header__center-list__quantity">12</span>
          </div>
          <span>Sevimlilar</span>
        </li>
        <!-- user -->
        <li class="mobile-menu__wrapper-item">
          <UserSvgVue />
          <span>Kirish</span>
        </li>
      </ul>
    </div>

    <!-- MOBILE MENU END -->

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
import homeSvg from "~/components/icons/homeSvg.vue";
// import store
import { useStore } from "~/store/store";
const store = useStore();
</script>

<style lang="scss" scoped></style>

<!-- 

mobile menu ni iconlarini to'g'irla

-->
