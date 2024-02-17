<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
    <main class="min-w-[300px] max-w-[900px] min-h-[800px] shadow-xl shadow-gray-400 flex flex-col gap-2 items-center py-4 mt-16 mx-auto rounded-xl">
        <h1 class="text-4xl mb-4">Composables</h1>

        <nav>
            <router-link to="/">Cakes</router-link>
            <router-link to="/lollipops">Lollipops</router-link>
        </nav>

        <router-view />
    </main>
</template>
