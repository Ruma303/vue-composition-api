<template>
    <div class="post">
        <h2>Post Details</h2>

        <p><strong>ID:</strong> {{ postId }}</p>
        <p><strong>Title:</strong> {{ postTitle }}</p>
        <router-link to="/posts">Back to Posts</router-link>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();
const postId = route.params.id;

const posts = ref([
    { id: 1, title: 'Post 1' },
    { id: 2, title: 'Post 2' },
    { id: 3, title: 'Post 3' },
]);

const postTitle = posts.value.find((post) => post.id == postId)?.title || 'Unknown Post';
</script>

<style scoped>
.post {
    text-align: center;
    margin-top: 50px;
}

router-link {
    display: inline-block;
    margin-top: 20px;
    text-decoration: none;
    color: #007bff;
    font-weight: bold;
}

router-link:hover {
    text-decoration: underline;
}
</style>