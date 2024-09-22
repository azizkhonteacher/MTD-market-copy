<template>
  <div class="login modal">
    <!--        TOP      -->
    <div class="modal-top">
      <h2 class="modal-title">Update Password</h2>
      <button @click="store.closeModal()" class="modal-close">
        <closeSvg />
      </button>
    </div>

    <!--        BOTTOM       -->
    <div class="modal-bottom">
      <form class="modal-form" @submit.prevent="postResetPass()">
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

        <button class="modal-login-btn">Update</button>
      </form>
    </div>
  </div>
</template>

<script setup>
// import's
import { useStore } from "~/store/store";
import login from "~/services/login";
import closeSvg from "./icons/closeSvg.vue";
// varibles
const store = useStore();
const password = ref("");
const passwordRepeat = ref("");

// fetch
async function postResetPass() {
  const res = await login.postResetPassword(
    password.value,
    passwordRepeat.value,
    store.phone,
    store.code
  );
  if (res.status == 200) {
    store.CodeReset = false;
    store.loginModal = true;
  }
}
</script>

<style lang="scss" scoped></style>
