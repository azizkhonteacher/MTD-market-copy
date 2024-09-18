<template>
    <div class="products">
        <div class="container">
            <h3 class="products__title">Sevimlilar</h3>
            <div class="products__wrapper">
                <product-card v-for="i in 14" :key="i"/>
            </div>
        </div>
    </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>

</style>