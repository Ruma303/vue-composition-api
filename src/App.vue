<script setup>
import { RouterLink, RouterView } from "vue-router";
import { useMouse, useOnline } from '@vueuse/core';
const { x, y } = useMouse();
const online = useOnline();
</script>

<template>
    <main
        class="min-w-[300px] max-w-[900px] min-h-[800px] shadow-xl shadow-gray-300 flex flex-col gap-2 items-center py-8 mt-16 mx-auto rounded-lg relative">
        <div class="absolute right-1 top-1 flex gap-4">
            <p>Mouse coordinates: {{ x }} - {{ y }}</p>
            <p :class="online ? 'text-emerald-500' : 'text-red-500'">
                {{ online ? 'You are online 🟢' : 'You are offline 🔴' }}
            </p>
        </div>
        <h1 class="text-4xl mb-4">Composables</h1>

        <nav class="flex gap-2 items-center">
            <router-link to="/">Cakes</router-link>
            <router-link to="/lollipops" class="">Lollipops</router-link>
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
