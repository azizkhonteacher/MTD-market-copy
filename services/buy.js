const baseURL = "https://vadalar.uz/api";

export default {
  // do'konlar
  getStores(token) {
    return $fetch(`${baseURL}/order-manager/store/index`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  },
  // viloyatlar
  getRegion() {
    return $fetch(`${baseURL}/order-manager/region/index`);
  },
  // shahar va tumanlar
  getRegionDistricts(id) {
    return $fetch(`${baseURL}/order-manager/region/districts?region_id=${id}`);
  },
  // uygacha yetkazib berish
  getHome() {
    return $fetch(`${baseURL}/order-manager/store/home-delivery-sum`);
  },
  // buyurtmani rasmiylashtirish
  postBuyurtmaberishYetkazibBerish(
    token,
    lang,
    paymentType,
    checkRegion,
    checkDistrict,
    checkUy,
    address,
    floor,
    cartData
  ) {
    return $fetch(`${baseURL}/order-manager/order/delivery`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Accept-Language": lang,
      },
      body: {
        payment_type: paymentType, // To'lov turi
        region_id: checkRegion, // Viloyat nomi
        district_id: checkDistrict, // Shahar/Tuman nomi
        is_delivery_home: checkUy, // 1- Uygacha yetkazib berish ha, 0 - Uygacha yetkazib berish yo'q
        address: address,
        floor: floor, // Qavat yoki uy raqami,
        delivery_date: "14.01.2024", // Yetkazib berish sanasi,
        home_delivery_sum: 25000, // Uygacha yetkazib berish narxi
        products: cartData.map((e) => ({
          product_id: e.id, // Mahsulot ID raqami
          count: e.quantity, // Buyurtma soni
        })),
      },
    });
  },
  postDukondanOlibKetish(token, lang, paymentType, storeId, cartData) {
    return $fetch(`${baseURL}/order-manager/order/store-pickup`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Accept-Language": lang,
      },
      body: {
        payment_type: paymentType, // To'lov turi
        store_id: storeId, // Do'kon ID raqami
        products: cartData.map((e) => ({
          product_id: e.id, // Mahsulot ID raqami
          count: e.quantity, // Buyurtma soni
        })),
      },
    });
  },
};
