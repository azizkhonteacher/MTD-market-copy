<template>
  <div class="modal">
    <!--        TOP      -->
    <div class="modal-top">
      <h2 class="modal-title">{{ $t('Register') }}</h2>
      <button class="modal-close" @click="store.closeModal()">
        <closeSvg />
      </button>
    </div>
    <!--        BOTTOM      -->
    <div class="modal-bottom">
      <form class="modal-form" @submit.prevent="VerifyCode()">
        <p class="model-p">
          {{ $t('verifyText') }}
          <span class="fw500">{{ store.phone }}</span>
        </p>
        <!-- code -->
        <div>
          <div class="modal-otp__inputs">
            <v-otp-input
              ref="otpInput"
              input-classes="otp-input"
              :conditionalClass="['one', 'two', 'three', 'four']"
              separator="-"
              input-type="Number"
              inputmode="numeric"
              :num-inputs="4"
              v-model:value="code"
              :should-auto-focus="true"
              :should-focus-order="true"
              @on-complete="handleOnComplete"
            />
          </div>
        </div>

        <span id="timer" class="waiting-time">2:00</span>

        <button
          type="button"
          @click="
            if (store.verifyCode) {
              store.verifyCode = false;
              store.enterPhone = true;
            } else if (store.verifyCodeReset) {
              store.verifyCodeReset = false;
              store.enterPhoneReset = true;
            }
          "
          class="modal-login-btn"
        >
          {{$t('back')}}
        </button>
      </form>
    </div>
  </div>
</template>

<script setup>
// import
import VOtpInput from "vue3-otp-input";
import { useStore } from "~/store/store";
import login from "~/services/login";
import closeSvg from "./icons/closeSvg.vue";

// varibles
const store = useStore();
const code = ref("");

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
function VerifyCode() {
  if (store.verifyCodeReset) {
    async function postResetVerifyPhone() {
      const res = await login.postResetVerifyPhone(store.phone, code.value);
      if (res.status == 200) {
        store.code = code.value;
        store.verifyCodeReset = false;
        store.CodeReset = true;
      }else{
        store.error = true;
        store.closeMessage();
      }
    }
    return postResetVerifyPhone();
  } else if (store.updateUserPhoneCode) {
    async function updatePhoneCode() {
      const res = await login.postUpdateUserPhoneCode(
        store.token,
        code.value,
        store.phone
      );
      if (res.status == 200) {
        store.verifyCode = false;
        store.updateUserPhoneCode = false;
        store.overlay = false;
        getUserInfoFetch();
        store.success = true;
        store.closeMessage();
      }else{
        store.error = true;
        store.closeMessage();
      }
    }
    return updatePhoneCode();
  } else {
    async function postVerifyPhone() {
      const res = await login.postVerifyPhone(store.phone, code.value);
      if (res.status == 200) {
        store.code = code.value;
        store.verifyCode = false;
        store.signUp = true;
        store.success = true;
        store.closeMessage();
      }else{
        store.error = true;
        store.closeMessage();
      }
    }
    return postVerifyPhone();
  }
}

const handleOnComplete = () => {
  VerifyCode();
};
</script>

<style lang="scss" scoped></style>
