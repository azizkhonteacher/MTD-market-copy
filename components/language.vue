<template>
  <div>
    {{ locale }}
  </div>
</template>

<script setup lang="ts">
const { locale } = useI18n();
</script>

<style lang="scss" scoped></style>
