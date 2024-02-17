<script setup>
import { onBeforeMount, onMounted, onBeforeUnmount, onUnmounted } from "vue";

onBeforeMount(() => {
    console.log('onBeforeMount');
});
onMounted(() => {
    console.log('onMounted');
});
onBeforeUnmount(() => {
    console.log('onBeforeUnmount');
});
onUnmounted(() => {
    console.log('onUnmounted');
});
</script>

<template>
    <h1 class="text-2xl">Componente About page</h1>
    <p class="p-5">About me?</p>
</template>
