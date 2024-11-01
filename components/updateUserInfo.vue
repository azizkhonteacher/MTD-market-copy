<template>
  <div class="login modal">
    <!--    TOP -->
    <div class="modal-top">
      <h2 class="modal-title">{{ $t("shaxsiy") }}</h2>
      <button class="modal-close" @click="store.closeModal()">
        <closeSvg />
      </button>
    </div>

    <!--    BOTTOM -->
    <div class="modal-bottom">
      <form class="modal-form" @submit.prevent="updateUserName()">
        <!-- firstname -->
        <div>
          <label class="modal-label" for="firstname">{{ $t("fName") }}</label>
          <div class="input__wrap">
            <input
              v-model="firstName"
              type="text"
              autocomplete="false"
              id="firstname"
              class="modal-input"
            />
          </div>
        </div>

        <!-- lastname -->
        <div>
          <label class="modal-label" for="lastname">{{ $t("lName") }}</label>
          <div class="input__wrap">
            <input
              v-model="lastName"
              type="text"
              autocomplete="false"
              id="lastname"
              class="modal-input"
            />
          </div>
        </div>

        <button class="modal-login-btn">{{ $t("update") }}</button>
        <button
          @click="
            (store.updateUserInfo = false), (store.updateUserPhone = true)
          "
          type="button"
          class="modal-register"
        >
          {{ $t("telRaqam") }}
        </button>
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
const firstName = ref(store.userInfo?.firstname);
const lastName = ref(store.userInfo?.lastname);

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

async function updateUserName() {
  const res = await login.postUpdateUserName(
    store.token,
    firstName.value,
    lastName.value
  );
  if (res.status == 200) {
    store.overlay = false;
    store.updateUserInfo = false;
    getUserInfoFetch();
    store.success = true;
    store.closeMessage();
  } else {
    store.error = true;
    store.closeMessage();
  }
}
</script>

<style lang="scss" scoped></style>
