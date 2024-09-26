const baseURL = "https://vadalar.uz/api";

export default {
  getHeroBanner() {
    return $fetch(`${baseURL}/banner/web-site-banners`);
  },
  getOurEffers(parentCategoryKey, searchKey) {
    return $fetch(`${baseURL}/product-manager/our-offers/index`);
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
  getProductDetail(productKey) {
    return $fetch(
      `${baseURL}/product-manager/product/detail?productKey=${productKey}`
    );
  },
  getPageInfoCategory() {
    return $fetch(`${baseURL}/page-info/category`);
  },
  getPageInfoCategoryDetail(id) {
    return $fetch(`${baseURL}/page-info/category-detail?category_id=${id}`);
  },
  getHeaderBottomCategories() {
    return $fetch(`${baseURL}/category-manager/category/header-categories`);
  },
  getCatalogCategories() {
    return $fetch(`${baseURL}/category-manager/category/index?searchKey=sm`);
  },
  getCategoryDetail(slug) {
    return $fetch(
      `${baseURL}/product-manager/category-product/category?slugKey=${slug}`
      // &filter[2][]=100 sm&filter[2][]=60 sm&filter[2][]=120 sm
    );
  },
  getSearch(search) {
    return $fetch(
      `${baseURL}/product-manager/product/search?searchKey=${search}`
    );
  },
};
