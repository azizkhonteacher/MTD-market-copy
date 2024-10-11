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
            <SwiperSlide
              v-for="item in heroBanner?.data"
              :key="item"
              class="hero-card"
            >
              <a href="#" class="hero-img">
                <img :src="item?.imageUrl" :alt="item?.name" class="desctop" />
              </a>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>

    <!--  LATEST NEWS OUREFFERS -->
    <div class="products">
      <div class="container">
        <h3 class="products__title">{{ $t('qiziqarliTaklif') }}</h3>

        <div class="products__wrapper">
          <product-card
            v-for="item in ourEffers?.data"
            :key="item"
            :product="item"
          />
        </div>
      </div>
    </div>

    <!-- POPULAR CATEGORY -->
    <div class="popularCategories">
      <div class="container">
        <h3 class="popularCategories__title">{{ $t('mashxurKategoriyalar') }}</h3>

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
            <SwiperSlide v-for="item in popularCategory?.data" :key="item">
              <NuxtLink
                :to="`/category/${item?.slug}`"
                class="popularCategories__card"
              >
                <p class="popularCategories__card-title">{{ item?.name }}</p>
                <div class="popularCategories__card-img">
                  <img :src="item?.iconUrl" alt="item?.name" />
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
            <SwiperSlide
              v-for="item in bodyBanner?.data"
              :key="item"
              class="addversting-card"
            >
              <div class="addversting-card__about">
                <h3 class="product-title">
                  {{ item?.title }}
                </h3>
                <p class="product-desc">
                  {{ item?.description }}
                </p>
              </div>

              <div class="addversting-card__img">
                <img :src="item?.imageUrl" alt="img" />
              </div>

              <div class="addversting-card__price">
                <div class="addversting-card__price-wrapper">
                  <h3 class="product-price">
                    {{ item?.price }}
                  </h3>
                </div>

                <NuxtLink :to="item?.url" class="product-more-btn">
                  {{ item?.button_label }}
                </NuxtLink>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>

    <!--  CHEEP PRODUCTS -->
    <div class="products">
      <div class="container">
        <h3 class="products__title">{{ $t('arzonMaxsulot') }}</h3>

        <div class="products__wrapper">
          <product-card v-for="i in cheapProducts" :key="i" :product="i" />
        </div>
      </div>
    </div>

    <!-- BRAENDS -->
    <div class="brends">
      <div class="container">
        <h2 class="brends__title mb-8">{{ $t('brend') }}</h2>

        <!-- SWIPER -->
        <div class="brends__wrapper">
          <Swiper
            :modules="[SwiperNavigation, SwiperAutoplay]"
            :loop="true"
            :slides-per-view="3"
            :space-between="30"
            navigation
            :speed="1500"
            :autoplay="{
              delay: 3000,
              disableOnInteraction: true,
            }"
          >
            <SwiperSlide
              v-for="item in brands?.data"
              :key="item"
              class="brends__card"
            >
              <img :src="item?.imageUrl" :alt="item?.name" />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
// import's
import { useStore } from "~/store/store";
import services from "~/services/services";
// varible's
const store = useStore();
const heroBanner = ref({});
const ourEffers = ref({});
const popularCategory = ref({});
const bodyBanner = ref({});
const cheapProducts = ref({});
const brands = ref({});
const {locale} = useI18n();

// fetch
async function HeroBanner() {
  store.loader = true;
  const res = await services.getHeroBanner(locale.value);
  store.loader = false;
  heroBanner.value = res;
}
async function OurEffers() {
  const res = await services.getOurEffers(locale.value);
  ourEffers.value = res;
}
async function PopulalCategory() {
  const res = await services.getPopularCategory(locale.value);
  popularCategory.value = res;
}

async function Addversting() {
  const res = await services.getBodyBanner();
  bodyBanner.value = res;
}
async function CheapProducts() {
  const res = await services.getCheapProducts(locale.value);
  cheapProducts.value = res?.data;
}
async function Brands() {
  const res = await services.getBrands(locale.value);
  brands.value = res;
}
// function
HeroBanner();
OurEffers();
PopulalCategory();
Addversting();
CheapProducts();
Brands();
</script>

<style lang="scss" scoped></style>

<!-- 
pages dagi detailPage, categoryPage, Page1, cartPage olindi
-->
