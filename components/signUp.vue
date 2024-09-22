<template>
  <div class="login modal">
    <!--        TOP      -->
    <div class="modal-top">
      <h2 class="modal-title">SignUp</h2>
      <button @click="store.closeModal" class="modal-close">
        <closeSvg />
      </button>
    </div>

    <!--        BOTTOM       -->
    <div class="modal-bottom">
      <form class="modal-form" @submit.prevent="postSignUp()">
        <!-- firstname -->
        <div>
          <label class="modal-label" for="firstname">First Name</label>
          <div class="input__wrap">
            <input
              v-model="firstname"
              type="text"
              autocomplete="false"
              id="firstname"
              placeholder=""
              class="modal-input"
            />
          </div>
        </div>

        <!-- lastname -->
        <div>
          <label class="modal-label" for="lastname">Last Name</label>
          <div class="input__wrap">
            <input
              v-model="lastname"
              type="text"
              autocomplete="false"
              id="lastname"
              placeholder=""
              class="modal-input"
            />
          </div>
        </div>

        <!-- password -->
        <div>
          <div class="fcs">
            <label class="modal-label" for="password">Password</label>
            <p v-if="false" class="modal-error">parol 8 ta belgidan kam!</p>
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

        <!-- password_repeat -->
        <div>
          <div class="fcs">
            <label class="modal-label" for="password_repeat"
              >Confirm Password</label
            >
            <p v-if="false" class="modal-error">parollar mos emas!</p>
          </div>
          <div class="input__wrap">
            <input
              v-model="passwordRepeat"
              type="password"
              autocomplete="false"
              id="password_repeat"
              class="modal-input"
            />
          </div>
        </div>

        <button class="modal-login-btn">Send</button>
      </form>
    </div>
  </div>
</template>

<script setup>
// import's
import { useStore } from "~/store/store";
import closeSvg from "./icons/closeSvg.vue";
import login from "~/services/login";

// varibles
const store = useStore();
const firstname = ref("");
const lastname = ref("");
const password = ref("");
const passwordRepeat = ref("");

// fetch
async function postSignUp() {
  const res = await login.postSignUp(
    firstname.value,
    lastname.value,
    password.value,
    passwordRepeat.value,
    store.phone,
    store.code
  );
  if (res.status == 200) {
    localStorage.setItem("authKey", res.data.auth_key);
    store.token = res.data.auth_key;
    store.overlay = false;
    store.signUp = false;
  }
}
</script>

<style lang="scss" scoped></style>
