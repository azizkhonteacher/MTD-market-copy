<template>
  <div class="category-card">
    <NuxtLink
      class="category-card__img"
      :to="localePath(`/detail/${product?.slug}`)"
    >
      <img :src="product?.imageUrl" alt="img" />
    </NuxtLink>

    <div class="category-card__text-wrapper">
      <NuxtLink
        :to="localePath(`/detail/${product?.slug}`)"
        class="category-card__title"
      >
        {{ product?.name }}
      </NuxtLink>

      <ul class="attribute__wrapper">
        <li class="attribute__wrapper-item">
          <h4>Brend</h4>
          <h5>{{ product?.brandName }}</h5>
        </li>
        <li class="attribute__wrapper-item">
          <h4>Davlat</h4>
          <h5>{{ product?.countryName }}</h5>
        </li>
      </ul>
    </div>

    <div class="category-card__bottom">
      <div class="category-card__price-wrapper">
        <h3 class="category-card__price">{{ product?.priceFormat }}</h3>
      </div>

      <div class="category-card__footer">
        <!-- cart -->
        <button
          @click="addOrRemoveFromCart(cartItem, $event)"
          :class="{ 'active-svg': isProductInCart }"
        >
          <cartSvg />
        </button>
        <!-- like -->
        <button :class="{ 'active-svg': checkLike }" @click="checkLikeBtn()">
          <likeSvg />
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import cartSvg from "./icons/cartSvg.vue";
import likeSvg from "./icons/likeSvg.vue";
import { useStore } from "~/store/store";
import login from "~/services/login";
// varible's
const { product } = defineProps(["product"]);
const store = useStore();
const localePath = useLocalePath(); // to="/" -> :to="localePath('/')"

// fetch
async function getLikeProduct() {
  if (store.token) {
    try {
      const res = await login.getLikeProduct(store.token);
      store.like = res?.data;
    } catch (error) {
      console.error("Failed to fetch user info:", error);
      // Handle error (e.g., show a notification or redirect)
    }
  }
}
async function postLike() {
  const res = await login.postLikeProduct(product?.slug, store.token);
  getLikeProduct();
}
// function
const checkLike = computed(() => {
  const productId = product?.id;
  const likeItems = store.like?.items;

  if (likeItems && Array.isArray(likeItems) && productId) {
    const itemLike = likeItems.find((el) => el.id == productId);
    return !!itemLike; // Agar 'itemLike' mavjud bo'lsa true, aks holda false qaytaradi
  } else {
    return false;
  }
});

function checkLikeBtn() {
  if (store.token) {
    postLike();
  } else {
    store.overlay = true;
    store.loginModal = true;
  }
}
//      CART
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
const addOrRemoveFromCart = (product, e) => {
  const item = toRaw(store.cart).find((el) => el.id == product.id);

  // Agar mahsulot savatda bo'lsa, uni olib tashlaymiz
  if (item) {
    let index = store.cart.indexOf(item);
    store.cart.splice(index, 1); // Mahsulotni savatdan olib tashlash
  } else {
    // Agar mahsulot savatda bo'lmasa, uni savatga qo'shamiz
    store.cart.push(product);
    let target_parent = e.target.closest(".category-card");
    let shop =
      target_parent.parentNode.parentNode.parentNode.parentNode.parentNode
        .parentNode.parentNode; // app.vue ni ushlash
    const shopping_card = shop
      .querySelector(".shopping-cart")
      .getBoundingClientRect(); // 1230px dan katta, position ni olamiz
    const shopping_card2 = shop
      .querySelector(".shopping-cart-2")
      .getBoundingClientRect(); //1230px dan kichik, position ni olamiz
    let img = target_parent.querySelector("img"); //card ni img ni ushlash
    let flying_img = img.cloneNode(); // card ni img ni clone qilish
    flying_img.classList.add("flying-img"); //clone img ga class qo'shish
    target_parent.appendChild(flying_img); // clone ni card ga qo'shish
    target_parent.style.zIndex = "100"; // z-index berish

    // position nuqtasini aniqlaymiz
    const flying_img_pos = flying_img.getBoundingClientRect();
    const shopping_card_pos = shopping_card; // korzina 1230px dan kattasida
    const shopping_card_pos2 = shopping_card2; // mediada ishlovchi korzina
    if (window.innerWidth > 1230) {
      const shopping_Card = shop.querySelector(".shopping-cart");
      shopping_Card.classList.add("shopping-cart-active");

      let data = {
        left:
          shopping_card_pos.left -
          (shopping_card_pos.width / 2 +
            flying_img_pos.left +
            flying_img_pos.width / 2),
        top: shopping_card_pos.bottom - flying_img_pos.bottom + 65,
      };

      flying_img.style.cssText = `
                              --left: ${data.left.toFixed(2)}px;
                              --top: ${data.top.toFixed(2)}px;
      `;

      setTimeout(() => {
        shopping_Card.classList.remove("shopping-cart-active");
        target_parent.style.zIndex = "";
        target_parent.removeChild(flying_img);
      }, 900);
    } else if (window.innerWidth <= 1230) {
      const shopping_Card = shop.querySelector(".shopping-cart-2");

      shopping_Card.classList.add("shopping-cart-active");

      let data = {
        left:
          shopping_card_pos2.left -
          (shopping_card_pos2.width / 2 +
            flying_img_pos.left +
            flying_img_pos.width / 2),
        top: shopping_card_pos2.bottom - flying_img_pos.bottom + 80,
      };

      flying_img.style.cssText = `
                            --left: ${data.left.toFixed(2)}px;
                            --top: ${data.top.toFixed(2)}px;
    `;

      setTimeout(() => {
        shopping_Card.classList.remove("shopping-cart-active");
        target_parent.style.zIndex = "";
        target_parent.removeChild(flying_img);
      }, 1000);
    }
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
