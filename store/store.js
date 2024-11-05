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
  const userCurrent = ref(true);
  const openFilter = ref(false);
  // varibles
  const phone = ref("");
  const code = ref("");
  const token = ref("");
  const userInfo = ref("");
  const like = ref({});
  const cart = ref([]);
  const loader = ref(false);
  const btnCheck = ref(false);

  // modal's
  const loginModal = ref(false);
  const enterPhone = ref(false);
  const enterPhoneReset = ref(false);
  const verifyCode = ref(false);
  const verifyCodeReset = ref(false);
  const CodeReset = ref(false);
  const signUp = ref(false);
  const updateUserInfo = ref(false);
  const updateUserPhone = ref(false);
  const updateUserPhoneCode = ref(false);
  const cartPage = ref(false);
  // message's
  const error = ref(false);
  const warn = ref(false);
  const success = ref(false);

  // function
  function closeModal() {
    loginModal.value = false;
    overlay.value = false;
    enterPhone.value = false;
    enterPhoneReset.value = false;
    verifyCode.value = false;
    verifyCodeReset.value = false;
    CodeReset.value = false;
    signUp.value = false;
    updateUserInfo.value = false;
    updateUserPhone.value = false;
    updateUserPhoneCode.value = false;
    openHeaderMenu.value = false;
    openKategory.value = false;
    cartPage.value = false;
  }
  function closeMessage() {
    setTimeout(() => {
      error.value = false;
      warn.value = false;
      success.value = false;
    }, 10000);
  }

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
    userCurrent,
    like,
    cartPage,
    cart,
    loader,
    openFilter,
    btnCheck,

    // model's
    closeModal,
    loginModal,
    enterPhone,
    enterPhoneReset,
    verifyCode,
    verifyCodeReset,
    CodeReset,
    signUp,
    updateUserInfo,
    updateUserPhone,
    updateUserPhoneCode,

    // message's
    error,
    warn,
    success,
    closeMessage,
  };
});
