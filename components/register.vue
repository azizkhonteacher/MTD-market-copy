<template>
  <div class="login modal">
    <!--        TOP      -->
    <div class="modal-top">
      <h2 class="modal-title">
        {{ store.updateUserPhone ? $t('telRaqam') : $t('Register') }}
      </h2>
      <button @click="store.closeModal()" class="modal-close">
        <closeSvg />
      </button>
    </div>

    <!--        BOTTOM       -->
    <div class="modal-bottom">
      <form class="modal-form" @submit.prevent="postPhoneNumber()">
        <!-- number -->
        <div>
          <label class="modal-label" for="phone">{{ $t('tRaqam') }}</label>
          <div class="input__wrap">
            <input
              v-model="phone"
              @input="mask"
              @focus="mask"
              @blur="mask"
              @keydown="mask"
              type="text"
              autocomplete="false"
              id="phone"
              placeholder="+998"
              class="modal-input"
            />
          </div>
        </div>

        <button class="modal-login-btn">{{ $t('next') }}</button>
      </form>
    </div>
  </div>
</template>

<script setup>
// import's
import { useStore } from "~/store/store";
import closeSvg from "./icons/closeSvg.vue";
import login from "~/services/login";
// varivles
const store = useStore();
const phone = ref(store.userInfo?.username ? store.userInfo?.username : "");

// fetch
async function getUserInfoFetch() {
  if (store.token) {
    try {
      const res = await login.getUserInfo(store.token);
      store.userInfo = res.data;
    } catch (error) {
      console.error("Failed to fetch user info:", error);
      // Handle error (e.g., show a notification or redirect)
    }
  }
}

function postPhoneNumber() {
  if (store.enterPhone) {
    async function postPhone() {
      let tel = phone.value.split("-").join("");
      const t = tel.split(" ").join("");
      const pNum = t.split(")").join("");
      const p = pNum.split("(").join("");

      const res = await login.postEnterPhone(p);
      if (res.status == 200) {
        store.phone = p;
        store.enterPhone = false;
        store.verifyCode = true;
        store.success = true;
        store.closeMessage();
      }
      else{
        store.error = true;
        store.closeMessage();
      }
    }
    return postPhone();
  } else if (store.enterPhoneReset) {
    async function postPhoneReset() {
      let tel = phone.value.split("-").join("");
      const t = tel.split(" ").join("");
      const pNum = t.split(")").join("");
      const p = pNum.split("(").join("");

      const res = await login.postResetEnterPhone(p);
      if (res.status == 200) {
        store.phone = p;
        store.enterPhoneReset = false;
        store.verifyCodeReset = true;
        store.success = true;
        store.closeMessage();
      }else{
        store.error = true;
        store.closeMessage();
      }
    }
    return postPhoneReset();
  } else if (store.updateUserPhone) {
    async function updatePhone() {
      let tel = phone.value.split("-").join("");
      const t = tel.split(" ").join("");
      const pNum = t.split(")").join("");
      const p = pNum.split("(").join("");

      const res = await login.postUpdateUserPhone(store.token, p);
      if (res.status == 200) {
        store.phone = p;
        store.updateUserPhone = false;
        store.updateUserPhoneCode = true;
        getUserInfoFetch();
        store.success = true;
        store.closeMessage();
      }else{
        store.error = true;
        store.closeMessage();
      }
    }
    return updatePhone();
  }
}

// maska
const mask = (event) => {
  let keyCode;
  event.keyCode && (keyCode = event.keyCode);
  let pos = event.target.selectionStart;
  if (pos < 3) event.preventDefault();
  let matrix = "+998 (__) ___-__-__",
    i = 0,
    def = matrix.replace(/\D/g, ""),
    val = event.target.value.replace(/\D/g, ""),
    newValue = matrix.replace(/[_\d]/g, function (a) {
      return i < val.length ? val.charAt(i++) || def.charAt(i) : a;
    });
  i = newValue.indexOf("_");
  if (i !== -1) {
    i < 5 && (i = 3);
    newValue = newValue.slice(0, i);
  }
  let reg = matrix
    .substr(0, event.target.value.length)
    .replace(/_+/g, function (a) {
      return "\\d{1," + a.length + "}";
    })
    .replace(/[+()]/g, "\\$&");
  reg = new RegExp("^" + reg + "$");
  if (
    !reg.test(event.target.value) ||
    event.target.value.length < 5 ||
    (keyCode > 47 && keyCode < 58)
  ) {
    event.target.value = newValue;
  }
  if (event.type === "blur" && event.target.value.length < 5) {
    event.target.value = "";
  }
};
</script>

<style lang="scss" scoped></style>
