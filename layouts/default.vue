<template>
  <div>
    <!-- message's -->
    <Message v-if="store.success" severity="success">Success Message</Message>
    <Message v-if="store.warn" severity="warn">Warn Message</Message>
    <Message v-if="store.error" severity="error">Error Message</Message>

    <!-- HEADER STAR -->
    <header>
      <!-- HEADER TOP START -->
      <div class="header__top">
        <div class="container">
          <!-- logo -->
          <NuxtLink :to="localePath('/')" class="header__top-logo">
            <img src="~/assets/images/logo.svg" alt="logo" />
          </NuxtLink>

          <ul class="header__top-nav">
            <li
              class="header__top-nav__item"
              v-for="category in pageCategory?.data"
              :key="category"
            >
              <NuxtLink :to="localePath(`/page/${category?.id}`)">
                {{ category?.name }}
              </NuxtLink>
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
              <span>{{ locale }}</span>
              <img
                src="https://www.mtdmarket.uz/_nuxt/Arrow.29b2f6a3.svg"
                alt="img"
              />
            </div>
            <div class="header__lang-list" v-if="store.openLang">
              <li>
                <NuxtLink
                  class="header__lang-list-link"
                  v-for="{ code, name } in locales"
                  @click="closeLang()"
                  :key="code"
                  :to="switchLocalePath(code)"
                  :class="{ activeLink: code === locale }"
                >
                  {{ name }}
                </NuxtLink>
              </li>
            </div>
          </div>
        </div>
      </div>
      <!-- HEADER TOP END -->

      <!-- HEADER MENU START -->
      <div class="header__menu" :class="{ openBurger: store.openHeaderMenu }">
        <div class="header__menu-top">
          <NuxtLink :to="localePath('/')" class="header__menu-logo">
            <img
              @click="store.closeModal()"
              src="~/assets/images/logo.svg"
              alt="logo"
            />
          </NuxtLink>
          <button
            class="header__menu-close-btn"
            @click="(store.openHeaderMenu = false), (store.overlay = false)"
          >
            <closeSvg />
          </button>
        </div>
        <div class="header__menu-main">
          <NuxtLink
            @click="store.openHeaderMenu = false"
            :to="localePath('/profile')"
            v-if="store.userInfo"
            class="header__menu-registration-wrapper"
          >
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
                {{
                  store.userInfo
                    ? store.userInfo?.lastname + " " + store.userInfo?.firstname
                    : "Name"
                }}
              </h4>

              <h4 v-if="false">Shaxsiy Ma'lumot</h4>
            </div>
          </NuxtLink>

          <button
            v-else
            @click="store.loginModal = true"
            class="header__menu-registration-wrapper"
          >
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
                Personal Information
              </h4>

              <h4 v-if="false">Shaxsiy Ma'lumot</h4>
            </div>
          </button>

          <div class="header__menu-nav">
            <ul>
              <li
                class="header__top-nav__item"
                v-for="category in pageCategory?.data"
                :key="category"
              >
                <NuxtLink
                  @click="store.closeModal()"
                  :to="localePath(`/page/${category?.id}`)"
                >
                  {{ category?.name }}
                </NuxtLink>
              </li>
            </ul>
          </div>

          <div class="header__menu-lang-btns">
            <NuxtLink
              v-for="{ code, name } in locales"
              :key="code"
              :to="switchLocalePath(code)"
              :class="{ activeLink: code === locale }"
              @click="store.closeModal(), reload()"
            >
              {{ name }}
            </NuxtLink>
          </div>
        </div>
      </div>
      <!-- HEADER MENU END -->

      <!-- HEADER CENTER START -->
      <div class="header__center">
        <div class="container">
          <NuxtLink :to="localePath('/')" class="header__center-logo">
            <img src="~/assets/images/logo.svg" alt="logo" />
          </NuxtLink>

          <button
            class="header__center-burger-btn"
            @click="(store.openHeaderMenu = true), (store.overlay = true)"
          >
            <img src="~/assets/images/svg/Menu.svg" alt="" />
          </button>

          <form class="header__center-form">
            <!--      SEARCH INPUT     -->
            <div class="header__center-form-top">
              <input
                type="text"
                required
                class="header__center-form__input"
                :placeholder="$t('qidirish')"
                v-model="searchKey"
                @input="searchProduct()"
              />

              <button type="submit" class="header__center-form-btn">
                <img src="~/assets/images/svg/search.svg" alt="search" />
                <span>{{ $t("qidirish") }}</span>
              </button>
            </div>

            <!--      SEARCH ITEM LIST     -->
            <div class="search-items-wrapper" v-if="searchItem?.items">
              <NuxtLink
                :to="localePath(`/detail/${item?.slug}`)"
                class="search-item"
                v-for="item in searchItem?.items"
                :key="item"
                @click="searchProductClear()"
              >
                <img :src="item?.imageUrl" alt="img" />
                <span>{{ item?.name }}</span>
              </NuxtLink>
            </div>
          </form>

          <ul class="header__center-list">
            <!--  USER BTN -->
            <li v-if="store.userInfo">
              <NuxtLink
                :to="localePath('/profile')"
                class="flex flex-col items-center"
              >
                <UserSvgVue />
                <span
                  style="
                    width: 80px;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    white-space: nowrap;
                  "
                >
                  {{
                    store.userInfo
                      ? store.userInfo?.firstname +
                        " " +
                        store.userInfo?.lastname
                      : "Войти"
                  }}
                </span>
              </NuxtLink>
            </li>
            <li
              v-if="!store.userInfo"
              @click="(store.loginModal = true)((store.overlay = true))"
            >
              <UserSvgVue />
              <span>{{ $t("kirish") }}</span>
            </li>

            <!-- LIKE BTN -->
            <li v-if="store.userInfo">
              <NuxtLink :to="localePath('/saved')">
                <div class="img">
                  <span class="header__center-list__quantity">
                    {{ itemCount }}
                  </span>
                  <likeSvgVue />
                </div>
                <span>{{ $t("Sevimlilar") }}</span>
              </NuxtLink>
            </li>
            <li
              v-if="!store.userInfo"
              @click="(store.loginModal = true)((store.overlay = true))"
            >
              <div class="img">
                <span class="header__center-list__quantity">
                  {{ itemCount }}
                </span>
                <likeSvgVue />
              </div>
              <span>{{ $t("Sevimlilar") }}</span>
            </li>

            <!-- CART BTN -->
            <li @click="(store.cartPage = true), (store.overlay = true)">
              <div class="img">
                <span class="header__center-list__quantity">{{
                  cartTotalQuantity
                }}</span>
                <cartSvgVue />
              </div>
              <span>{{ $t("savat") }}</span>
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
            <span>{{ $t("kategoriyalar") }}</span>
          </div>

          <nav class="header__bottom-nav">
            <ul class="header__bottom-nav__list">
              <li v-for="item in headerBottomNav" :key="item">
                <NuxtLink :to="localePath(`/category/${item?.slug}`)">
                  {{ item?.name }}
                </NuxtLink>
              </li>
            </ul>
          </nav>

          <div class="catalog" :class="{ openKategory: store.openKategory }">
            <div class="container">
              <!-- catalog-header blogi mediada ishlaydi -->
              <div class="catalog-header">
                <h2>{{ $t("kategoriyalar") }}</h2>
                <button
                  @click="(store.openKategory = false), (store.overlay = false)"
                >
                  <closeSvg />
                </button>
              </div>
              <!--  -->

              <!-- katalog category's -->
              <ul class="catalog-menu">
                <div class="catalog-wrapper">
                  <li
                    class="catalog-wrapper__item"
                    v-for="catalog in katalog"
                    :key="catalog"
                    @click="open(catalog, $event)"
                    :data-i="item"
                  >
                    <span>
                      <img :src="catalog?.iconUrl" alt="icon" />
                      {{ catalog?.name }}

                      <rightArrowSvg />
                    </span>
                    <ul
                      class="catalog-wrapper__sub-menu"
                      id="catalog-wrapper__sub-menu-child"
                      :data-index="catalog"
                    >
                      <div class="catalog-wrapper__sub-menu-wrapper">
                        <!-- media da ishlaydigan tugma -->
                        <button>
                          <rightArrowSvg />
                          {{ $t("back") }}
                        </button>
                        <!--  -->

                        <NuxtLink
                          @click="closeCategory()"
                          :to="localePath(`/category/${catalog?.slug}`)"
                          class="cotalog-wrapper__sub-menu__title"
                        >
                          {{ catalog?.name }}
                        </NuxtLink>

                        <li
                          v-for="categories in catalog?.categories"
                          :key="categories"
                        >
                          <div class="cotalog-wrapper__sub-menu__name">
                            <NuxtLink
                              :to="localePath(`/katalog/${categories?.slug}`)"
                              @click="closeCategory(), store.overlay"
                            >
                              {{ categories?.name }}
                            </NuxtLink>
                          </div>
                        </li>
                      </div>
                    </ul>
                  </li>
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
          <NuxtLink
            class="mobile-menu__wrapper-item home-menu"
            :to="localePath('/')"
          >
            <homeSvg />
            <span>{{ $t("boshSahifa") }}</span>
          </NuxtLink>
        </li>
        <!-- category -->
        <li
          class="mobile-menu__wrapper-item"
          @click="(store.openKategory = true), (store.overlay = true)"
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

          <span>{{ $t("kategoriyalar") }}</span>
        </li>
        <!-- cart -->
        <li
          class="mobile-menu__wrapper-item"
          @click="(store.cartPage = true), (store.overlay = true)"
        >
          <div class="img">
            <cartSvgVue />
            <span class="header__center-list__quantity">{{
              cartTotalQuantity
            }}</span>
          </div>
          <span>{{ $t("savat") }}</span>
        </li>
        <!-- like  -->
        <li class="mobile-menu__wrapper-item" v-if="store.userInfo">
          <NuxtLink
            :to="localePath('/saved')"
            class="mobile-menu__wrapper-item"
          >
            <div class="img">
              <span class="header__center-list__quantity">
                {{ itemCount }}
              </span>
              <likeSvgVue />
            </div>
            <span>{{ $t("Sevimlilar") }}</span>
          </NuxtLink>
        </li>
        <li
          class="mobile-menu__wrapper-item"
          v-if="!store.userInfo"
          @click="(store.loginModal = true)((store.overlay = true))"
        >
          <div class="img">
            <likeSvgVue />
            <span class="header__center-list__quantity"> {{ itemCount }}</span>
          </div>
          <span>{{ $t("Sevimlilar") }}</span>
        </li>
        <!-- user -->
        <li v-if="store.userInfo" class="mobile-menu__wrapper-item">
          <NuxtLink
            :to="localePath('/profile')"
            class="flex flex-col items-center"
          >
            <UserSvgVue />
            <span
              style="
                width: 80px;
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
              "
            >
              {{
                store.userInfo
                  ? store.userInfo?.firstname + " " + store.userInfo?.lastname
                  : "Войти"
              }}
            </span>
          </NuxtLink>
        </li>

        <li
          v-else
          @click="(store.loginModal = true)((store.overlay = true))"
          class="mobile-menu__wrapper-item"
        >
          <UserSvgVue />
          <span>{{ $t("kirish") }}</span>
        </li>
      </ul>
    </div>

    <!-- USER LOGIN AND REGISTER -->
    <login v-if="store.loginModal" />
    <register
      v-if="store.enterPhone || store.enterPhoneReset || store.updateUserPhone"
    />
    <verify-code
      v-if="
        store.verifyCode || store.verifyCodeReset || store.updateUserPhoneCode
      "
    />
    <sign-up v-if="store.signUp" />
    <new-reset-password v-if="store.CodeReset" />
    <update-user-info v-if="store.updateUserInfo" />
    <cart-page v-if="store.cartPage" />
    <loader v-if="store.loader" />

    <!-- MOBILE MENU END -->

    <main>
      <NuxtPage />
    </main>

    <!-- FOOTER START -->
    <footer>
      <div class="container">
        <div class="footer-info">
          <NuxtLink :to="localePath('/')" class="footer-logo">
            <img src="~/assets/images/logo.svg" alt="logo" />
          </NuxtLink>

          <p class="footer-desc">{{ $t("jadval") }}</p>
          <p class="footer-desc">{{ $t("qongiroq") }}</p>

          <ul class="footer-social">
            <!-- telegram -->
            <li>
              <a href="#" target="_blank">
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_14599_191)">
                    <path
                      d="M5.27748 8.4226L5.05948 11.4943C5.37138 11.4943 5.50646 11.3601 5.66844 11.1989L7.13071 9.79892L10.1607 12.0218C10.7164 12.3321 11.1079 12.1687 11.2578 11.5097L13.2467 2.17357L13.2472 2.17302C13.4235 1.35008 12.9501 1.02828 12.4087 1.23016L0.718248 5.71395C-0.0796041 6.0242 -0.0675238 6.46978 0.582618 6.67166L3.5714 7.60296L10.5138 3.2512C10.8405 3.03446 11.1375 3.15438 10.8932 3.37112L5.27748 8.4226Z"
                      fill="#8F8E94"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_14599_191">
                      <rect
                        width="13.1786"
                        height="13.2022"
                        fill="#8F8E94"
                        transform="translate(0.106445 0.0717773)"
                      />
                    </clipPath>
                  </defs>
                </svg>
              </a>
            </li>
            <!-- instagram -->
            <li>
              <a href="#" target="_blank">
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_14599_195)">
                    <path
                      d="M9.54658 0.0717773H4.60463C2.3305 0.0717773 0.486328 1.88396 0.486328 4.11864V8.97486C0.486328 11.2095 2.3305 13.0217 4.60463 13.0217H9.54658C11.8207 13.0217 13.6649 11.2095 13.6649 8.97486V4.11864C13.6649 1.88396 11.8207 0.0717773 9.54658 0.0717773ZM12.4294 8.97486C12.4294 10.537 11.1362 11.8077 9.54658 11.8077H4.60463C3.01496 11.8077 1.72182 10.537 1.72182 8.97486V4.11864C1.72182 2.55655 3.01496 1.28583 4.60463 1.28583H9.54658C11.1362 1.28583 12.4294 2.55655 12.4294 4.11864V8.97486Z"
                      fill="#8F8E94"
                    />
                    <path
                      d="M7.07589 3.30933C5.25642 3.30933 3.78125 4.75891 3.78125 6.54681C3.78125 8.33472 5.25642 9.7843 7.07589 9.7843C8.89535 9.7843 10.3705 8.33472 10.3705 6.54681C10.3705 4.75891 8.89535 3.30933 7.07589 3.30933ZM7.07589 8.57024C5.94089 8.57024 5.01674 7.66213 5.01674 6.54681C5.01674 5.43069 5.94089 4.52338 7.07589 4.52338C8.21089 4.52338 9.13504 5.43069 9.13504 6.54681C9.13504 7.66213 8.21089 8.57024 7.07589 8.57024Z"
                      fill="#8F8E94"
                    />
                    <path
                      d="M10.6177 3.4978C10.8602 3.4978 11.0567 3.30466 11.0567 3.0664C11.0567 2.82815 10.8602 2.63501 10.6177 2.63501C10.3753 2.63501 10.1787 2.82815 10.1787 3.0664C10.1787 3.30466 10.3753 3.4978 10.6177 3.4978Z"
                      fill="#8F8E94"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_14599_195">
                      <rect
                        width="13.1786"
                        height="12.9499"
                        fill="white"
                        transform="translate(0.486328 0.0717773)"
                      />
                    </clipPath>
                  </defs>
                </svg>
              </a>
            </li>
            <!-- facebook -->
            <li>
              <a href="#" target="_blank">
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_14599_210)">
                    <path
                      d="M10.3137 0.0745243L8.60471 0.0717773C6.68477 0.0717773 5.44401 1.34704 5.44401 3.32085V4.81889H3.72575C3.57727 4.81889 3.45703 4.93948 3.45703 5.08823V7.25872C3.45703 7.40746 3.5774 7.52791 3.72575 7.52791H5.44401V13.0047C5.44401 13.1535 5.56425 13.2739 5.71273 13.2739H7.95458C8.10306 13.2739 8.2233 13.1534 8.2233 13.0047V7.52791H10.2324C10.3808 7.52791 10.5011 7.40746 10.5011 7.25872L10.5019 5.08823C10.5019 5.01681 10.4735 4.94841 10.4232 4.89786C10.3729 4.84732 10.3043 4.81889 10.233 4.81889H8.2233V3.54898C8.2233 2.93861 8.36848 2.62876 9.16215 2.62876L10.3134 2.62835C10.4617 2.62835 10.582 2.50776 10.582 2.35915V0.343724C10.582 0.195252 10.4619 0.074799 10.3137 0.0745243Z"
                      fill="#8F8E94"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_14599_210">
                      <rect
                        width="13.1786"
                        height="13.2022"
                        fill="white"
                        transform="translate(0.429688 0.0717773)"
                      />
                    </clipPath>
                  </defs>
                </svg>
              </a>
            </li>
            <!-- youtobe -->
            <li>
              <a href="#" target="_blank">
                <svg
                  width="14"
                  height="13"
                  viewBox="0 0 14 13"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_14599_207)">
                    <path
                      d="M13.1357 3.48707C12.9943 2.97069 12.58 2.56363 12.0546 2.42458C11.0947 2.1665 7.2551 2.1665 7.2551 2.1665C7.2551 2.1665 3.41565 2.1665 2.45577 2.4148C1.94045 2.5537 1.51603 2.97076 1.37467 3.48707C1.12207 4.43023 1.12207 6.38621 1.12207 6.38621C1.12207 6.38621 1.12207 8.35205 1.37467 9.28535C1.51617 9.80166 1.93034 10.2087 2.45584 10.3478C3.42576 10.6059 7.25525 10.6059 7.25525 10.6059C7.25525 10.6059 11.0947 10.6059 12.0546 10.3576C12.5801 10.2186 12.9943 9.81159 13.1358 9.29528C13.3883 8.35205 13.3883 6.39614 13.3883 6.39614C13.3883 6.39614 13.3985 4.43023 13.1357 3.48707ZM6.03265 8.19321V4.5792L9.22547 6.38621L6.03265 8.19321Z"
                      fill="#8F8E94"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_14599_207">
                      <rect
                        width="13.0841"
                        height="12.8571"
                        fill="white"
                        transform="translate(0.719727 0.0712891)"
                      />
                    </clipPath>
                  </defs>
                </svg>
              </a>
            </li>
          </ul>
        </div>

        <div class="footer-list">
          <h4 class="footer-list-title">{{ $t("kategoriyalar") }}</h4>
          <li v-for="item in headerBottomNav" :key="item">
            <NuxtLink :to="localePath(`/category/${item?.slug}`)">
              {{ item?.name }}
            </NuxtLink>
          </li>
        </div>
        <div class="footer-list">
          <h4 class="footer-list-title">{{ $t("umumiyMalumot") }}</h4>
          <li v-for="category in pageCategory?.data" :key="category">
            <NuxtLink :to="localePath(`/page/${category?.id}`)">
              {{ category?.name }}
            </NuxtLink>
          </li>
        </div>
      </div>
    </footer>

    <div
      class="overlay"
      v-show="store.overlay"
      @click="store.closeModal()"
    ></div>

    <!-- FOOTER END -->
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
import Register from "~/components/register.vue";
import services from "~/services/services";
// varible's
const store = useStore();
const pageCategory = ref({});
const headerBottomNav = ref({});
const katalog = ref({});
const searchKey = ref("");
const searchItem = ref({});
const { locales } = useI18n();
const { locale } = useI18n();
const switchLocalePath = useSwitchLocalePath();
const localePath = useLocalePath(); // to="/" -> :to="localePath('/')"

// function reload() {
//   window.location.reload(true)
// }
// like count
const itemCount = computed(() => {
  return store.like?.items?.length || 0;
});

// fetch
async function getPageCategory() {
  store.loader = true;
  const res = await services.getPageInfoCategory(locale.value);
  store.loader = false;
  pageCategory.value = res;
}
async function getHeaderBottomCategorys() {
  store.loader = true;
  const res = await services.getHeaderBottomCategories(locale.value);
  store.loader = false;
  headerBottomNav.value = res?.data;
}
async function getCatalogCategorys() {
  const res = await services.getCatalogCategories(locale.value);
  katalog.value = res?.data;
}
async function searchProduct() {
  const res = await services.getSearch(searchKey.value.trim(), locale.value);
  searchItem.value = res?.data;
}
async function searchProductClear() {
  const res = await services.getSearch("");
  searchItem.value = res?.data;
}

// function
getPageCategory();
getHeaderBottomCategorys();
getCatalogCategorys();
watch(
  () => locale.value,
  () => {
    getPageCategory();
    getHeaderBottomCategorys();
    getCatalogCategorys();
  }
);

function closeCategory() {
  store.openKategory = false;
}
//    CART COUNT
const cartTotalQuantity = computed(() => {
  return store.cart.reduce((total, item) => total + item.quantity, 0);
});
function closeLang() {
  store.openLang = false;
}

function open(id, e) {
  document.querySelectorAll(".catalog-wrapper__item").forEach((el, i) => {
    if (e.target == el) {
      document.querySelectorAll(".catalog-wrapper__sub-menu")[i].style.display =
        "block";
    } else {
      document.querySelectorAll(".catalog-wrapper__sub-menu")[i].style.display =
        "none";
    }
  });
}
</script>

<style lang="scss" scoped>
.overlay {
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  position: fixed;
  z-index: 15;
  background: rgba(32, 32, 32, 0.3);
}
</style>

<!-- 

search qismi, like, cart, til ni biritirish

-->
