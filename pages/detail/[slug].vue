<template>
  <div class="product__about">
    <div class="container">
      <!-- product detail -->
      <!-- PRODUCT LEFT -->
      <div class="product__about-left">
        <!--            img swiper -->
        <div class="product__about-left__swiper">
          <!--    BIG SWIPER   -->
          <div>
            <Swiper :slides-per-view="1">
              <SwiperSlide
                class="big"
                v-for="images in detail?.product?.images"
                :key="images"
              >
                <img
                  class="big-swiper"
                  :src="detail?.product?.images[index]"
                  alt="img"
                />
              </SwiperSlide>
            </Swiper>
          </div>

          <!-- LITTLE SWIPER -->
          <Swiper
            :modules="[SwiperNavigation]"
            :slides-per-view="4"
            :space-between="5"
            :loop="false"
            class="product__thumbs"
          >
            <SwiperSlide
              v-for="(images, i) in detail?.product?.images"
              :key="images"
            >
              <img
                class="opacity-70"
                :src="images"
                alt=""
                @click="index = i"
                :class="{ 'active-img': i === index }"
              />
            </SwiperSlide>
          </Swiper>
        </div>

        <!-- product information -->
        <div class="product__about-center">
          <h3 class="product__about-center-title text-3xl">
            {{ detail?.product?.name }}
          </h3>
          <div class="product__about-center__price-wr">
            <!--        PRICE        -->
            <div class="product__about-center_price-wr-left">
              <h4
                class="product__about-center__price-wr__price text-xl"
                style="font-weight: 700"
              >
                {{ detail?.product?.priceFormat }}
              </h4>
              <p class="product__about-count">
                {{ $t('sotuvda') }}
                <span style="font-weight: 700">
                  {{ detail?.product?.residue_store }} {{ $t('ta') }}
                </span>
              </p>
            </div>

            <!--        active buttons       -->
            <div class="product__about-center__price-wr-btns">
              <!-- cart -->
              <button
                class="cart"
                @click="addOrRemoveFromCart(cartItem)"
                :class="{ 'active-svg': isProductInCart }"
              >
                <cartSvg />
              </button>

              <!-- like -->
              <button
                class="like"
                @click="checkLikeBtn()"
                :class="{ 'active-svg': checkLike }"
              >
                <likeSvg />
              </button>
            </div>
          </div>
          <button class="buy-now-btn" @click="addOrRemoveFromCart(cartItem)">
            {{ $t('hozir') }}
          </button>

          <div class="product__about-center__info">
            <div class="product__about-center__info-items">
              <ul class="product__about-center__info-items-wrapper information">
                <li>
                  <h4>{{ $t('umumiyMalumot') }}</h4>
                  <h5
                    v-if="detail?.product?.description"
                    style="text-align: justify"
                  >
                    {{ detail?.product?.description }}
                  </h5>
                </li>
              </ul>
            </div>

            <div
              class="product__about-center__info-items"
              v-show="detail?.characterInfo"
              v-for="item in detail?.characterInfo"
              :key="item"
            >
              <h3 class="product__about-center__info-items-title">
                {{ item?.groupName }}
              </h3>
              <ul class="product__about-center__info-items-wrapper">
                <li v-for="characters in item?.characters" :key="characters">
                  <h4>{{ characters?.name }}i</h4>
                  <h5>{{ characters?.value }}</h5>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <!-- servise payment -->
      <!-- PRODUCT RIGHT -->
      <div class="product__about-right">
        <div class="product__about-right-item">
          <div class="product__about-right-item-top">
            <svg
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M16.8686 9.46971C16.8514 9.52885 16.8309 9.58457 16.8077 9.642C16.7683 9.73714 16.7186 9.82885 16.6629 9.91885C16.6346 9.96342 16.614 10.0106 16.5823 10.0517C16.1897 10.5874 15.51 11.0023 14.6863 11.1943V11.2586C14.6863 11.592 14.4163 11.862 14.0829 11.862C13.752 11.862 13.4811 11.5929 13.4811 11.2586V6.74057C13.4811 6.408 13.7503 6.138 14.0829 6.138C14.4154 6.138 14.6863 6.40628 14.6863 6.74057V6.80571C15.51 6.99685 16.1897 7.41171 16.5823 7.94742C16.614 7.98857 16.6346 8.03657 16.6629 8.08028C16.7186 8.17028 16.7683 8.262 16.8077 8.358C16.8309 8.41457 16.8514 8.46943 16.8686 8.52942C16.914 8.682 16.9449 8.838 16.9449 9C16.9449 9.162 16.914 9.31714 16.8686 9.46971ZM3.91629 6.138C3.91801 6.138 3.91972 6.13885 3.92058 6.13885C3.92229 6.13885 3.92401 6.138 3.92572 6.138C4.25915 6.138 4.52829 6.408 4.52829 6.74057V11.2586C4.52829 11.5929 4.25743 11.862 3.92572 11.862C3.92401 11.862 3.92229 11.8603 3.92143 11.8603C3.91972 11.8603 3.91801 11.862 3.91629 11.862C3.58458 11.862 3.31372 11.5929 3.31372 11.2586V11.1909C2.52 11.0049 1.86258 10.6106 1.46743 10.1006C1.39115 10.0097 1.33286 9.90942 1.27715 9.804C1.25829 9.768 1.23686 9.73285 1.22058 9.696C1.18029 9.60685 1.14772 9.51685 1.12286 9.42085C1.10401 9.34628 1.09543 9.27085 1.08601 9.19457C1.07915 9.12857 1.05429 9.06771 1.05429 9C1.05429 8.93228 1.07915 8.87142 1.08601 8.80542C1.09543 8.72914 1.10401 8.65285 1.12286 8.57828C1.14772 8.48228 1.18029 8.39228 1.22058 8.30314C1.23686 8.26628 1.25743 8.23114 1.27715 8.19514C1.33286 8.09057 1.39115 7.98943 1.46743 7.89857C1.86258 7.38943 2.52 6.99428 3.31372 6.80828V6.74057C3.31372 6.408 3.58286 6.138 3.91629 6.138ZM6.17572 15.7406C6.50829 15.7406 6.77829 16.0106 6.77829 16.3431C6.77829 16.6749 6.50829 16.9449 6.17572 16.9449C5.84315 16.9449 5.57315 16.6749 5.57315 16.3431C5.57315 16.0106 5.84315 15.7406 6.17572 15.7406ZM15.7234 6.26057C15.4757 2.76686 12.5554 0 9 0C5.44457 0 2.52343 2.76686 2.27657 6.26057C0.982286 6.50143 0 7.63714 0 9V11.8243C0 14.4557 2.02457 16.6226 4.59857 16.8497C4.81286 17.5166 5.43943 18 6.17571 18C7.08943 18 7.83257 17.256 7.83257 16.3431C7.83257 15.4294 7.08943 14.6854 6.17571 14.6854C5.45486 14.6854 4.84029 15.1483 4.61314 15.7911C2.61514 15.5751 1.05429 13.8789 1.05429 11.8243V11.1806C1.41771 11.4694 1.85486 11.67 2.33314 11.7489C2.448 12.1251 2.90571 12.9163 3.91629 12.9163C4.824 12.9163 5.57314 12.1826 5.57314 11.2586V6.74057C5.57314 5.83114 4.83857 5.08286 3.91629 5.08286C3.79114 5.08286 3.66771 5.09743 3.54771 5.12486C4.24629 2.77371 6.426 1.05429 9 1.05429C11.574 1.05429 13.7537 2.77371 14.4514 5.12486C14.3323 5.09743 14.2089 5.08286 14.0829 5.08286C13.1751 5.08286 12.426 5.81743 12.426 6.74057V11.2586C12.426 12.168 13.1614 12.9163 14.0829 12.9163C15.0977 12.9163 15.5511 12.1243 15.6669 11.7489C16.9886 11.5311 18 10.3817 18 9C18 7.63714 17.0169 6.50143 15.7234 6.26057Z"
                fill="#909090"
              />
            </svg>
            <h2>{{ $t('savollar') }}</h2>
          </div>
          <div class="product__about-right-item-text-wrapper">
            <ul>
              <li>
                {{ $t('telefon') }}
                <a class="product__about-link" href="tel:+998905874758"
                  >+998905874758</a
                >
              </li>
              <li>
                {{ $t('telegram') }}
                <a
                  class="product__about-link"
                  href="https://t.me/mtdmarketplace"
                  >@mtdmarketplace</a
                >
              </li>
            </ul>
          </div>
        </div>
        <div class="product__about-right-item">
          <div class="product__about-right-item-top">
            <svg
              width="30"
              height="30"
              viewBox="0 0 22 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M18.2665 7.69551L19.321 5.1628C19.4572 4.8356 19.4577 4.47497 19.3227 4.14726C19.1878 3.81955 18.9332 3.56396 18.6057 3.42775L12.8218 1.01945C12.4951 0.883235 12.1345 0.88223 11.8063 1.01744C11.4786 1.15264 11.223 1.40722 11.0868 1.73442L8.62921 7.63645C8.62519 7.64575 8.62393 7.65555 8.62067 7.66485H7.67549L9.35952 2.41874C9.38565 2.33682 9.4422 2.27022 9.51885 2.23076C9.59525 2.19131 9.6822 2.18402 9.76438 2.21066C10.0288 2.29585 10.3117 2.14984 10.3967 1.88571C10.4816 1.62133 10.3361 1.33836 10.0717 1.25342C9.73497 1.14535 9.3751 1.17501 9.0597 1.3366C8.74431 1.49869 8.51084 1.77388 8.40278 2.11139L6.62777 7.64148C6.62526 7.64902 6.62501 7.65681 6.62275 7.6646H5.86102L6.67653 3.36593C6.70945 3.19152 6.87959 3.07692 7.05274 3.10959C7.32642 3.16136 7.58878 2.98193 7.6403 2.70951C7.69207 2.43684 7.51289 2.17371 7.24022 2.12194C6.52323 1.98498 5.82509 2.4592 5.68888 3.17845L5.47576 4.30206H3.07399C1.90188 4.30206 0.954689 5.2191 0.917998 6.3902C0.917998 6.39096 0.918249 6.39171 0.918249 6.39246C0.918249 6.39699 0.916992 6.40151 0.916992 6.40603V18.8193C0.916992 20.0675 1.93254 21.0833 3.18105 21.0833H17.9139C19.1624 21.0833 20.1779 20.0675 20.1779 18.8193V9.92916C20.1769 8.80127 19.3471 7.86615 18.2665 7.69551ZM18.3931 4.53025C18.426 4.60967 18.4258 4.69712 18.3926 4.77654L17.8608 6.0537C17.024 5.60963 16.5867 4.66521 16.7687 3.75194L18.2192 4.3561C18.2986 4.38902 18.3605 4.45084 18.3931 4.53025ZM12.0149 2.12094C12.0478 2.04153 12.1099 1.9797 12.1893 1.94728C12.2684 1.91436 12.3556 1.91486 12.4353 1.94754L13.8859 2.55143C13.3664 3.32371 12.3883 3.67881 11.4828 3.39785L12.0149 2.12094ZM11.0968 4.32619C11.4313 4.44104 11.7731 4.49984 12.1111 4.49984C13.2073 4.49984 14.2548 3.92108 14.8255 2.94272L15.8313 3.36166C15.4495 4.79287 16.1288 6.31808 17.4748 6.98179L17.1904 7.66535H15.7142C15.4058 6.98304 14.8637 6.45102 14.1661 6.16076C13.439 5.85768 12.6376 5.85642 11.9096 6.15648C11.2102 6.44449 10.6613 6.97953 10.3507 7.66535H9.70658L11.0968 4.32619ZM14.5483 7.6651H11.518C11.7206 7.41228 11.9842 7.21249 12.2921 7.08558C12.7721 6.8878 13.3003 6.88905 13.7793 7.08834C14.0859 7.21601 14.3475 7.41404 14.5483 7.6651ZM3.07324 5.30781H5.28427L4.83718 7.6651H3.18004C2.4902 7.6651 1.92927 7.10694 1.92249 6.4186C1.9441 5.79535 2.44873 5.30781 3.07324 5.30781ZM19.1717 18.8195C19.1717 19.5136 18.607 20.0783 17.9129 20.0783H3.18004C2.48592 20.0783 1.92123 19.5136 1.92123 18.8195V8.28735C2.28161 8.52911 2.71436 8.67034 3.18004 8.67034H17.9129C18.607 8.67034 19.1717 9.23504 19.1717 9.92916V18.8195Z"
                fill="#909090"
              />
              <path
                d="M16.0431 12.2173C15.0122 12.2173 14.1738 13.056 14.1738 14.0866C14.1738 15.1172 15.0125 15.9558 16.0431 15.9558C17.0737 15.9558 17.9123 15.1175 17.9123 14.0866C17.9123 13.0557 17.0734 12.2173 16.0431 12.2173ZM16.0431 14.9506C15.5666 14.9506 15.1791 14.5631 15.1791 14.0866C15.1791 13.6101 15.5668 13.2226 16.0431 13.2226C16.5193 13.2226 16.9071 13.6101 16.9071 14.0866C16.9071 14.5631 16.5193 14.9506 16.0431 14.9506Z"
                fill="#909090"
              />
            </svg>

            <h2>{{ $t('tolov') }}</h2>
          </div>
          <div class="product__about-right-item-text-wrapper">
            <ul class="product__about-payment-types">
             <li>{{ $t('tolov1') }}</li>
             <li>{{ $t('tolov2') }}</li>
             <li>{{ $t('tolov3') }}</li>
             <li>{{ $t('tolov4') }}</li>
             <li>{{ $t('tolov5') }}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
// import's
import cartSvg from "~/components/icons/cartSvg.vue";
import closeSvgVue from "~/components/icons/closeSvg.vue";
import likeSvg from "~/components/icons/likeSvg.vue";
import services from "~/services/services";
import login from "~/services/login";
import { useStore } from "~/store/store";
// varible's
const store = useStore();
const route = useRoute();
const detail = ref({});
const index = ref(0);
const product = ref(detail.value);
const { locale } = useI18n();
// fetch
async function getdetail() {
  store.loader = true;
  const res = await services.getProductDetail(route.params.slug, locale.value);
  store.loader = false;
  detail.value = res?.data;
}
async function getLikeProduct() {
  if (store.token) {
    const res = await login.getLikeProduct(store.token, locale.value);
    store.like = res?.data;
  } else {
    console.log("NO PRODUCT");
  }
}
async function postLike() {
  const res = await login.postLikeProduct(route.params.slug, store.token, locale.value);
  getLikeProduct();
}
// function
getdetail();

const checkLike = computed(() => {
  // store, store.like yoki store.like.items mavjudligini tekshirish
  if (!store || !store.like || !store.like.items) {
    return false; // Agar yo'q bo'lsa, false qaytaramiz
  }

  // like items orasida mahsulot ID ni qidiramiz
  return store.like.items.some((el) => el.id === detail.value.product?.id);
});

function checkLikeBtn() {
  if (store.token) {
    postLike();
  } else {
    store.overlay = true;
    store.loginModal = true;
  }
}
//                          cart
const cartItem = computed(() => {
  const item = {
    id: product?.id,
    title: product?.name,
    image: product?.imageUrl,
    price: product?.price,
    priceFormat: product?.priceFormat,
    slug: product?.slug,
    productCount: product?.residue_store,
    quantity: 1,
  };
  return item;
});

// localga saqlash
const addOrRemoveFromCart = (product) => {
  const item = toRaw(store.cart).find((el) => el.id == product.id);

  // Agar mahsulot savatda bo'lsa, uni olib tashlaymiz
  if (item) {
    let index = store.cart.indexOf(item);
    store.cart.splice(index, 1); // Mahsulotni savatdan olib tashlash
  } else {
    // Agar mahsulot savatda bo'lmasa, uni savatga qo'shamiz
    store.cart.push(product);
  }

  // Savatdagi ma'lumotlarni localStorage'ga yozish
  localStorage.setItem("cart", JSON.stringify(store.cart));
};
// Mahsulot savatda bormi yoki yo'qligini tekshirish
const isProductInCart = computed(() => {
  let item = store.cart.find((el) => el.id === product?.id);
  if (item) {
    return true;
  } else {
    return false;
  }
});
</script>

<style lang="scss" scoped></style>

<!-- swiperlarni to'g'irlash kerak -->
