<template>
  <div>
    <!--  HERO  -->
    <div class="hero">
      <div class="container">
        <div class="hero__swiper-wrapper">
          <Swiper
            :modules="[SwiperNavigation, SwiperAutoplay, SwiperPagination]"
            :loop="true"
            :slides-per-view="1"
            :pagination="{ clickable: true }"
            navigation
            :speed="2000"
            :autoplay="{
              delay: 3000,
              disableOnInteraction: true,
            }"
            :space-between="10"
          >
            <SwiperSlide v-for="item in 6" :key="item" class="hero-card">
              <a href="#" class="hero-img">
                <img src="/assets/images/def.jpg" alt="item?.name" class="desctop"/>
              </a>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>

    <!--  LATEST NEWS OUREFFERS -->
    <div class="products">
      <div class="container">
        <h3 class="products__title">Sevimlilar</h3>

        <div class="products__wrapper">
          <product-card v-for="i in 8" :key="i" />
        </div>
      </div>
    </div>

    <!-- POPULAR CATEGORY -->
    <div class="popularCategories">
      <div class="container">
        <h3 class="popularCategories__title">Mashhur Kategoriyalar</h3>

        <!--    SWIPER     -->
        <div class="popularCategories__swiper-wrapper">
          <Swiper
            style="width: 100%"
            :modules="[SwiperNavigation, SwiperAutoplay]"
            :loop="true"
            :slides-per-view="4"
            :space-between="20"
            navigation
            :speed="2500"
            :autoplay="{
              delay: 2000,
              disableOnInteraction: true,
            }"
          >
            <SwiperSlide v-for="item in 6" :key="item">
              <NuxtLink to="/" class="popularCategories__card">
                <p class="popularCategories__card-title">Aravacha</p>
                <div class="popularCategories__card-img">
                  <img src="~/assets/images/def.jpg" alt="item?.name" />
                </div>
              </NuxtLink>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>

    <!-- BODY BANNER addversting -->
    <div class="addversting">
      <div class="container">
        <!--  SWIPER -->
        <div class="addversting__swiper-wrapper">
          <Swiper
            style="width: 100%"
            :modules="[SwiperAutoplay, SwiperNavigation]"
            :loop="true"
            :slides-per-view="1"
            :space-between="10"
            navigation
            :speed="2000"
            :autoplay="{
              delay: 5000,
              disableOnInteraction: true,
            }"
          >
            <SwiperSlide v-for="item in 3" :key="item" class="addversting-card">
              <div class="addversting-card__about">
                <h3 class="product-title">Nogironlar aravachasi KKSV-2</h3>
                <p class="product-desc">
                  Qo’l uzatmali nogironlar aravachasi KKSV-2 imkoniyati
                  cheklangan insonlar uchun qisqa masofalarga, uy ichida va
                  xovlida, xarakatlanish uchun mo’ljallangan. Aravachaning
                  tirsak qo’ygich va oyoq qo’ygichlarini xarakatlantirish
                  xususiyati nogironni aravachaga joylashishi va undan boshqa
                  joyga o’rin almashtirishi uchun, yig’ilish xususiyati esa
                  avtomobilda tashish uchun qulaylik yaratadi. Ushbu aravacha
                  orqa suyanchig’i gradusi o’zgarishi umurtqada, belida muammosi
                  bor nogironlar uchun qo’shimcha qulaylik yaratadi.
                </p>
              </div>
              <div class="addversting-card__img">
                <img src="~/assets/images/def.jpg" alt="img" />
              </div>
              <div class="addversting-card__price">
                <div class="addversting-card__price-wrapper">
                  <h3 class="product-price">1 900 000 so'm</h3>
                </div>
                <a href="#" class="product-more-btn">Batafsil</a>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>

    <!--  CHEEP PRODUCTS -->
    <div class="products">
      <div class="container">
        <h3 class="products__title">Arzon Maxsulotlar</h3>

        <div class="products__wrapper">
          <product-card v-for="i in 8" :key="i" />
        </div>
      </div>
    </div>

    <!-- BRAENDS -->
    <div class="brends">
      <div class="container">
        <h2 class="brends__title">Brendlar</h2>

        <!-- SWIPER -->
        <div class="brends__wrapper">
          <Swiper
            :modules="[SwiperNavigation, SwiperAutoplay]"
            :loop="true"
            :slides-per-view="4"
            :space-between="30"
            navigation
            :speed="1500"
            :autoplay="{
              delay: 3000,
              disableOnInteraction: true,
            }"
          >
            <SwiperSlide v-for="item in 8" :key="item" class="brends__card">
              <img src="/assets/images/def.jpg" alt="item?.name" />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped></style>
