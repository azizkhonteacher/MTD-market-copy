import { defineStore } from "pinia";
export const useStore = defineStore("store", () => {
  const openLang = ref(false);
  const openKategory = ref(false);
  const openHeaderMenu = ref(false);
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
  };
});
