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
          <li
            class="help__info-item"
            v-for="page in pageDetail?.data"
            :key="page"
          >
            <h3>{{ page?.title }}</h3>
            <p class="leading-8" style="line-height: 30px;">{{ page?.content }}</p>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup>
import closeSvgVue from "~/components/icons/closeSvg.vue";
import { useStore } from "~/store/store";
import services from "~/services/services";
// varibles
const store = useStore();
const route = useRoute();
const pageDetail = ref({});
const { locale } = useI18n();

// fetch
async function PagesDetail() {
  const res = await services.getPageInfoCategoryDetail(route.params?.id, locale.value);
  pageDetail.value = res;
}
// function
PagesDetail();
</script>
<style lang="scss" scoped></style>
