import { defineStore } from "pinia";
export const useStore = defineStore("store", () => {
  const openLang = ref(false);
  const openKategory = ref(false);
  const openHeaderMenu = ref(false);
  const openPage = ref(false);
  const viewCategory = ref(false);
  const viewAccardion = ref(false);
  const overlay = ref(false);
  const paymentMethod = ref(false);
  const paymentMethodCheck = ref(false);
  const phone = ref("");
  const code = ref("");
  const token = ref("");
  const userInfo = ref("");

  return {
    openLang,
    openKategory,
    openHeaderMenu,
    phone,
    code,
    token,
    userInfo,
    openPage,
    viewCategory,
    viewAccardion,
    overlay,
    paymentMethod,
    paymentMethodCheck,
  };
});
