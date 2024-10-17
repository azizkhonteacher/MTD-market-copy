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
          <button @click="store.openFilter = true" class="filterOpenBtn">
            <FilterSvg />
          </button>

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
        <div class="category-filter" :class="{ openFilter: store.openFilter }">
          <div class="category-filter__top">
            <h2 class="category-filter__title">Filterlash</h2>

            <button
              @click="store.openFilter = false"
              class="category-filter__close-btn"
            >
              <closeSvg />
            </button>
          </div>

          <div class="category-filter__range">
            <h3 class="category-filter__range-title">{{ $t("narxi") }}</h3>

            <ul class="category-filter__range-price-wrapper">
              <li class="category-filter__range-price">
                {{ $t("dan") }}
                <span id="slider-range-value1">
                  {{ SliderValue[0] || categoryProducts?.data?.minPrice }}
                </span>
              </li>

              <li class="category-filter__range-price">
                {{ $t("gacha") }}
                <span id="slider-range-value2">
                  {{ SliderValue[1] || categoryProducts?.data?.maxPrice }}
                </span>
              </li>
            </ul>

            <Slider
              v-model="SliderValue"
              range
              class="w-14rem"
              :min="categoryProducts?.data?.minPrice || 0"
              :max="categoryProducts?.data?.maxPrice || 1000"
            />
          </div>

          <!--            check elements         -->

          <div class="accordion">
            <div
              class="accordion-item"
              :class="{ 'active-accordion': openBrand }"
            >
              <div
                @click="openBrand = !openBrand"
                class="accordion-header category-filter__chekbox-list-title"
              >
                {{ $t("brend") }}
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
                    <input @input="selectBrands(brends?.id)" type="checkbox" :id="brends?.name" />
                  </div>

                  <div class="ms-3 flex flex-col">
                    <label :for="brends?.name">{{ brends?.name }}</label>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!--     HARAKTERLAR    -->
          <div class="accordion">
            <div
              class="accordion-item"
              v-for="character in categoryProducts?.data?.characters"
              :key="character"
              
              
            >
              <div
                @click="open(character, $event)"
                :data-i="item"
                class="accordion-header category-filter__chekbox-list-title"
              >
                {{ character?.characterName }}
                <rightArrowSvg/>
              </div>

              <div class="accordion-content" :data-index="character">
                <div
                  class="accordion-content-items"
                  v-for="check in character?.assigns"
                  :key="check"
                >
                  <input
                    @input="selectCharakters(character?.characterId, check)"
                    type="checkbox" :id="check?.value"
                  />
                  <label :for="check?.value">
                    {{ check?.value }}
                  </label>
                </div>
              </div>
            </div>
          </div>

          <button @click="FilterCategoryDetail()" class="category-filter__btn">
            {{ $t("korsatish") }}
          </button>
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
// import Slider from "primevue/slider";
import closeSvg from "~/components/icons/closeSvg.vue";
import rightArrowSvg from "~/components/icons/rightArrowSvg.vue";
import FilterSvg from "~/components/icons/filterSvg.vue";
import { useStore } from "~/store/store";
import services from "~/services/services";
// varible's
const store = useStore();
const route = useRoute();
const categoryProducts = ref({});

const minPrice = ref("");
const maxPrice = ref("");

const { locale } = useI18n();
// const SliderValue = ref([categoryProducts.value.data?.minPrice, categoryProducts.value.data?.maxPrice]);
const SliderValue = ref([minPrice.value, maxPrice.value]);
let openBrand = ref(false);

//    filter jo'natamiz
let characters = ref([]);
let brandCheck = ref([]);

function selectBrands(brandId) {
  let brendObj = {
    id: brandId,
  };
  brandCheck.value.push(brendObj);
}

function selectCharakters(charakterId, item) {
  let checkObj = {
    id: charakterId,
    value: item.value,
  };
  characters.value.push(checkObj);
}
const filter = async () => {};

function open(id, e) {
  const headers = document.querySelectorAll(".accordion-header");
  const items = document.querySelectorAll(".accordion-item");

  headers.forEach((el, i) => {
    if (e.target === el) {
      const item = items[i];

      if (item.classList.contains("active-accordion")) {
        item.classList.remove("active-accordion");
      } else {
        item.classList.add("active-accordion");
      }
    } else {
      items[i].classList.remove("active-accordion");
    }
  });
}
// fetch
async function categoryDetail() {
  store.loader = true;

  const params = new URLSearchParams();

  params.append("slugKey", route.params.slug);
  params.append("maxPrice", SliderValue.value[1]);
  params.append("minPrice", SliderValue.value[0]);
  characters.value.forEach(({ id, value }) => {
    params.append(`filter[${id}][]`, value);
  });
  brandCheck.value.forEach(({ id }) => {
    params.append(`brandIds[]`, id);
  });

  let queryString = decodeURIComponent(params.toString());

  const res = await services.getCategoryDetail(queryString, locale.value);

  store.loader = false;
  SliderValue.value = [res.data?.minPrice, res.data?.maxPrice];
  minPrice.value = res?.data?.minPrice;
  maxPrice.value = res?.data?.maxPrice;
  categoryProducts.value = res;
  console.log(res?.data);
}
async function FilterCategoryDetail() {
  await categoryDetail();
}

// function
categoryDetail();
</script>

<style lang="scss" scoped></style>
