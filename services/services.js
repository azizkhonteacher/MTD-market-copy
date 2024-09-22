const baseURL = "https://vadalar.uz/api";

export default {
  getHeroBanner() {
    return $fetch(`${baseURL}/banner/web-site-banners`);
  },
  getOurEffers(parentCategoryKey, searchKey) {
    return $fetch(
      `${baseURL}/product-manager/our-offers/index?parentCategoryKey=smartfon-va-gadjetlar`
    );
  },
  getPopularCategory() {
    return $fetch(`${baseURL}/category-manager/category/popular-categories`);
  },
  getBodyBanner() {
    return $fetch(`${baseURL}/banner/body-banners`);
  },
  getCheapProducts() {
    return $fetch(`${baseURL}/product-manager/cheap-product/index`);
  },
  getBrands() {
    return $fetch(`${baseURL}/brand/index`);
  },
};
