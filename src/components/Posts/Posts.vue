<template>
    <section class="posts">
        <h2>Posts</h2>
        <div>
            <input type="text" v-model="search" />
        </div>
        <ul>
            <li v-for="post in filteredPosts" :key="post.id">
                <router-link :to="{ name: 'post', params: { id: post.id } }">
                    {{ post.id }}. {{ post.title }}
                </router-link>
            </li>
        </ul>
    </section>
</template>

<script setup>
import { ref, computed } from 'vue';

const search = ref('');

const posts = ref([
    { id: 1, title: 'Post 1' },
    { id: 2, title: 'Post 2' },
    { id: 3, title: 'Post 3' },
]);

const filteredPosts = computed(() => {
    if (!search.value) {
        return posts.value;
    }
    return posts.value.filter((post) => post.title.toLowerCase().includes(search.value.toLowerCase()));
});


</script>

<style scoped>
h2 {
    text-align: center;
}

.posts {
    display: flex;
    flex-direction: column;
    align-items: center;
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