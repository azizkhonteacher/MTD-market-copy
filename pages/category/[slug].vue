<template>
  <div class="category">
    <!--        CATEGORY HEADER START       -->
    <div class="category__header">
      <div class="category__header-bottom">
        <div class="container">
          <!-- title -->
          <h3 class="category__title">
            {{ categoryProducts?.data?.category?.name }}
          </h3>

          <!-- btn's -->
          <div class="category__header-bottom__btns">
            <button
              class="grid-view-btn"
              @click="store.viewCategory = false"
              :class="{
                'view-active-btn': !store.viewCategory,
              }"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10 3H3V10H10V3Z"
                  stroke="#909090"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
                <path
                  d="M21 3H14V10H21V3Z"
                  stroke="#909090"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
                <path
                  d="M21 14H14V21H21V14Z"
                  stroke="#909090"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
                <path
                  d="M10 14H3V21H10V14Z"
                  stroke="#909090"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
              </svg>
            </button>
            <button
              class="temlate-view-btn"
              @click="store.viewCategory = true"
              :class="{
                'view-active-btn': store.viewCategory,
              }"
            >
              <svg
                width="21"
                height="21"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M19 7V1L1 1L1 7L19 7Z"
                  stroke="#909090"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
                <path
                  d="M19 19V13L1 13L1 19L19 19Z"
                  stroke="#909090"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
    <!--        CATEGORY HEADER END         -->

    <!--        CATEGORY MAIN  START        -->
    <div class="category__main">
      <div class="container">
        <!--                FILTER           -->
        <div class="category-filter">
          <div class="category-filter__top">
            <h2 class="category-filter__title">Filterlash</h2>

            <button class="category-filter__close-btn">
              <closeSvg />
            </button>
          </div>

          <div class="category-filter__range">
            <h3 class="category-filter__range-title">Narxi (so'm)</h3>

            <ul class="category-filter__range-price-wrapper">
              <li class="category-filter__range-price">
                Dan
                <span id="slider-range-value1">
                  {{ categoryProducts?.data?.minPrice }}
                </span>
              </li>

              <li class="category-filter__range-price">
                Gacha
                <span id="slider-range-value2">
                  {{ categoryProducts?.data?.maxPrice }}
                </span>
              </li>
            </ul>

            <div class="mb-6 px-2"></div>
          </div>

          <div class="accordion">
            <div
              class="accordion-item"
              @click="store.viewAccardion = !store.viewAccardion"
              :class="{ 'active-accordion': store.viewAccardion }"
            >
              <div class="accordion-header category-filter__chekbox-list-title">
                Brendlar
                <rightArrowSvg />
              </div>

              <div class="accordion-content">
                <!--    BRENDLAR   -->
                <div
                  class="relative flex items-center"
                  v-for="brends in categoryProducts?.data?.brands"
                  :key="brends"
                >
                  <div class="flex items-center h-5">
                    <input type="checkbox" />
                  </div>

                  <div class="ms-3 flex flex-col">
                    <label>{{ brends?.name }}</label>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="accordion">
            <!-- active-accordion class qo'shiladi -->
            <!--     HARAKTERLAR    -->
            <div
              class="accordion-item"
              v-for="character in categoryProducts?.data?.characters"
              :key="character"
              @click="store.viewAccardion = !store.viewAccardion"
              :class="{ 'active-accordion': store.viewAccardion }"
            >
              <div class="accordion-header category-filter__chekbox-list-title">
                {{ character?.characterName }}
                <rightArrowSvg />
              </div>

              <div class="accordion-content">
                <div
                  class="relative flex items-center"
                  v-for="i in character?.assigns"
                  :key="i"
                >
                  <div class="flex items-center h-5">
                    <input type="checkbox" />
                  </div>
                  <div class="ms-3 flex flex-col">
                    <label>
                      {{ i?.value }}
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <button class="category-filter__btn">Ko'rsatish</button>
        </div>

        <!--                CARD'S           -->
        <div class="category__main-right">
          <!-- KO'RINISH view-list CLASS QO'SHILADI -->
          <div
            class="category__main-right__card-wrapper"
            :class="{ 'view-list': store.viewCategory }"
          >
            <category-card
              v-for="i in categoryProducts?.data?.products?.items"
              :key="i"
              :product="i"
            />
          </div>
        </div>
      </div>
    </div>
    <!--        CATEGORY MAIN  END          -->
  </div>
</template>

<script setup>
import closeSvg from "~/components/icons/closeSvg.vue";
import rightArrowSvg from "~/components/icons/rightArrowSvg.vue";
import { useStore } from "~/store/store";
import services from "~/services/services";
// varible's
const store = useStore();
const route = useRoute();
const categoryProducts = ref({});
// fetch
async function categoryDetail() {
  const res = await services.getCategoryDetail(route.params.slug);
  categoryProducts.value = res;
}
// function
categoryDetail();
</script>

<style lang="scss" scoped></style>
