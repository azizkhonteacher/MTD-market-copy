<template>
  <div>
    <NuxtLayout />
  </div>
</template>

<script setup>
import { useStore } from "~/store/store";
import { onMounted, watch } from "vue";
import login from "./services/login";

const store = useStore();

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

async function getLikeProduct() {
  if (store.token) {
    try {
      const res = await login.getLikeProduct(store.token);
      store.like = res.data;
    } catch (error) {
      console.error("Failed to fetch user info:", error);
      // Handle error (e.g., show a notification or redirect)
    }
  }
}

onMounted(() => {
  if (process.client) {
    store.token = localStorage.getItem("authKey") || null;
  }
  getUserInfoFetch();
  getLikeProduct();
});
watch(
  () => store.token,
  () => {
    getUserInfoFetch();
    getLikeProduct();
  }
);
</script>

<style lang="scss" scoped></style>
