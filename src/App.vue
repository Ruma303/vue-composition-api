<template>
    <h1>Composition API</h1>
    <Navbar />
    <router-view />
</template>

<script setup>
import Navbar from '@/components/Navbar/Navbar.vue';
</script>

<style scoped>
h1 {
    text-align: center;
    margin: 20px 0;
}
</style>