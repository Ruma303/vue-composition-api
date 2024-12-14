<template>
    <nav>
        <router-link to="/">Home</router-link>
        <router-link to="/posts">Posts</router-link>
    </nav>
</template>

<script setup>
import { RouterLink } from 'vue-router';
</script>

<style scoped>
nav {
    display: flex;
    justify-content: center;
    gap: 20px;
    margin: 20px 0;
}

nav a {
    text-decoration: none;
    color: #007bff;
    font-weight: bold;
}

nav a:hover {
    text-decoration: underline;
}
</style>