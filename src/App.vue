<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
    <main class="min-w-[300px] max-w-[900px] min-h-[800px] shadow-xl shadow-gray-300 flex flex-col gap-2 items-center py-4 mt-16 mx-auto rounded-lg">
        <h1 class="text-4xl mb-4">Composables</h1>

        <nav class="flex gap-2 items-center">
            <router-link to="/">Home</router-link>
            <router-link to="/about" class="">About</router-link>
        </nav>
        <router-view />
    </main>
</template>

<style scoped>
.router-link-exact-active {
    color: rgb(35, 201, 26);
    font-size: 1.3em;
    font-weight: 500;
}
</style>
