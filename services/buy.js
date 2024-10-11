const baseURL = "https://vadalar.uz/api";

export default {
  getStores(token) {
    return $fetch(`${baseURL}/order-manager/store/index`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  },
  getRegion(){
    return $fetch(`${baseURL}/order-manager/region/index`)
  },
  getRegionDistricts(id){
    return $fetch(`${baseURL}/order-manager/region/districts?region_id=${id}`)
  }
};
