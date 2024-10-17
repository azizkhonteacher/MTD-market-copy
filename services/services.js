const baseURL = "https://vadalar.uz/api";

export default {
  getHeroBanner(lang) {
    return $fetch(`${baseURL}/banner/web-site-banners`, {
      headers: {
        "Accept-Language": lang,
      },
    });
  },
  getOurEffers(lang) {
    return $fetch(`${baseURL}/product-manager/our-offers/index`, {
      headers: {
        "Accept-Language": lang,
      },
    });
  },
  getPopularCategory(lang) {
    return $fetch(`${baseURL}/category-manager/category/popular-categories`, {
      headers: {
        "Accept-Language": lang,
      },
    });
  },
  getBodyBanner(lang) {
    return $fetch(`${baseURL}/banner/body-banners`, {
      headers: {
        "Accept-Language": lang,
      },
    });
  },
  getCheapProducts(lang) {
    return $fetch(`${baseURL}/product-manager/cheap-product/index`, {
      headers: {
        "Accept-Language": lang,
      },
    });
  },
  getBrands(lang) {
    return $fetch(`${baseURL}/brand/index`, {
      headers: {
        "Accept-Language": lang,
      },
    });
  },
  getProductDetail(productKey, lang) {
    return $fetch(
      `${baseURL}/product-manager/product/detail?productKey=${productKey}`,
      {
        headers: {
          "Accept-Language": lang,
        },
      }
    );
  },
  getPageInfoCategory(lang) {
    return $fetch(`${baseURL}/page-info/category`, {
      headers: {
        "Accept-Language": lang,
      },
    });
  },
  getPageInfoCategoryDetail(id, lang) {
    return $fetch(`${baseURL}/page-info/category-detail?category_id=${id}`, {
      headers: {
        "Accept-Language": lang,
      },
    });
  },
  getHeaderBottomCategories(lang) {
    return $fetch(`${baseURL}/category-manager/category/header-categories`, {
      headers: {
        "Accept-Language": lang,
      },
    });
  },
  getCatalogCategories(lang) {
    return $fetch(`${baseURL}/category-manager/category/index?searchKey=sm`, {
      headers: {
        "Accept-Language": lang,
      },
    });
  },
  getCategoryDetail(slug, lang) {
    return $fetch(
      `${baseURL}/product-manager/category-product/category?${slug}`,
      {
        headers: {
          "Accept-Language": lang,
        },
      }
      // &filter[2][]=100 sm&filter[2][]=60 sm&filter[2][]=120 sm
    );
  },
  getKatalogDetail(slug, lang) {
    return $fetch(
      `${baseURL}/product-manager/category-product/sub-category?${slug}`,
      {
        headers: {
          "Accept-Language": lang,
        },
      }
    );
  },
  getSearch(search, lang) {
    return $fetch(
      `${baseURL}/product-manager/product/search?searchKey=${search}`,
      {
        headers: {
          "Accept-Language": lang,
        },
      }
    );
  },
};
