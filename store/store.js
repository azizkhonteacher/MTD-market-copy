import { defineStore } from "pinia";
export const useStore = defineStore("store", () => {
  const openLang = ref(false);

  return {
    openLang,
  };
});
