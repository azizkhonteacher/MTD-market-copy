<template>
  <div class="login modal">
    <div class="modal-top">
      <h2 class="modal-title">Enter</h2>
      <button
        class="modal-close"
        @click="(store.loginModal = false), (store.showModal = false)"
      >
        <svg
          width="22"
          height="22"
          viewBox="0 0 22 22"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M7.25208 6.23135L10.9984 9.9777L14.7453 6.23141L15.7676 7.25371L12.0207 11L15.7676 14.7463L14.7453 15.7686L10.9984 12.0223L7.25208 15.7686L6.23047 14.7462L9.97671 11L6.23047 7.25376L7.25208 6.23135Z"
            fill="#000000"
          />
        </svg>
      </button>
    </div>
    <div class="modal-bottom">
      <form class="modal-form" @submit.prevent="PostLogin()">
        <!-- number -->
        <div>
          <label class="modal-label" for="phone">Phone Number</label>
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
            <label class="modal-label" for="password">Password</label>
            <button
              type="button"
              @click="
                (store.loginModal = false), (store.enterPhoneReset = true)
              "
              class="modal-label__btn"
            >
              Forgot Your Password
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

        <button class="modal-login-btn">Login</button>
        <button
          @click="(store.enterPhone = true), (store.loginModal = false)"
          type="button"
          class="modal-register"
        >
          Register
        </button>
      </form>
    </div>
  </div>
</template>

<script setup>
//      IMPORT
import { useStore } from "~/store/store";
import login from "~/services/login";
//      VARIBLES
const store = useStore();
const username = ref("");
const password = ref("");
//      FETCH
async function postLogin() {
  let tel = username.value.split("-").join("");
  const t = tel.split(" ").join("");
  const pNum = t.split(")").join("");
  const p = pNum.split("(").join("");

  const res = await login.postLogin(p, password.value);

  if(res.status == 200){
    localStorage.setItem("authKey", res.data.auth_key);
    store.token = res.data.auth_key;
  }
}
</script>

<style lang="scss" scoped></style>
