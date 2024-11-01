<template>
  <div class="login modal">
    <div class="modal-top">
      <h2 class="modal-title">{{ $t("kirish") }}</h2>
      <button class="modal-close" @click="store.closeModal()">
        <closeSvg />
      </button>
    </div>

    <div class="modal-bottom">
      <form class="modal-form" @submit.prevent="Login()">
        <!-- number -->
        <div>
          <label class="modal-label" for="phone">{{ $t("tRaqam") }}</label>
          <div class="input__wrap">
            <input
              v-model="username"
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
        <!-- password -->
        <div>
          <div class="fcs">
            <label class="modal-label" for="password">{{ $t("parol") }}</label>
            <button
              @click="
                (store.loginModal = false), (store.enterPhoneReset = true)
              "
              type="button"
              class="modal-label__btn"
            >
              {{ $t("forgotPassword") }}
            </button>
          </div>
          <div class="input__wrap">
            <input
              v-model="password"
              type="password"
              autocomplete="false"
              id="password"
              class="modal-input"
            />
          </div>
        </div>

        <button class="modal-login-btn">{{ $t("kirish") }}</button>
        <button
          @click="(store.enterPhone = true), (store.loginModal = false)"
          type="button"
          class="modal-register"
        >
          {{ $t("Register") }}
        </button>
      </form>
    </div>
  </div>
</template>

<script setup>
// imports
import { useStore } from "~/store/store";
import closeSvg from "./icons/closeSvg.vue";
import login from "~/services/login";

// varibles
const store = useStore();
const username = ref("");
const password = ref("");

// fetch
async function Login() {
  let tel = username.value.split("-").join("");
  const t = tel.split(" ").join("");
  const pNum = t.split(")").join("");
  const p = pNum.split("(").join("");

  const res = await login.loginPost(p, password.value);
  if (res.status == 200) {
    localStorage.setItem("authKey", res.data.auth_key);
    store.token = res.data.auth_key;
    store.closeModal();
    store.success = true;
    store.closeMessage();
  } else {
    store.error = true;
    store.closeMessage();
  }
}
// mask
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
