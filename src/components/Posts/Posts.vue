<template>
    <section>
        <h2>Posts</h2>
        <div>
            <label for="">Find post</label>
            <input type="text" v-model="search" />
        </div>
        <ul>
            <li v-for="post in posts" :key="post.id">
                <router-link :to="{ name: 'post', params: { id: post.id } }">
                    {{ post.id }}. {{ post.title }}
                </router-link>
            </li>
        </ul>
    </section>
</template>

<script setup>
import { ref } from 'vue';

const search = ref('');

const posts = ref([
    { id: 1, title: 'Post 1' },
    { id: 2, title: 'Post 2' },
    { id: 3, title: 'Post 3' },
]);
</script>

<style scoped>
h2 {
    text-align: center;
}

ul {
    list-style: none;
    padding: 0;
    max-width: 600px;
    margin: 20px auto;
}

li {
    margin: 10px 0;
}

router-link {
    text-decoration: none;
    color: #007bff;
    font-weight: bold;
}

router-link:hover {
    text-decoration: underline;
}
</style>