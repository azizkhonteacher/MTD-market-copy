import { defineStore } from "pinia";
export const useStore = defineStore("store", () => {
  const openLang = ref(false);
  const openKategory = ref(false);
  const openHeaderMenu = ref(false);

  return {
    openLang,
    openKategory,
    openHeaderMenu,
  };
});
