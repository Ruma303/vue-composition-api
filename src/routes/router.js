import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '@/components/Home.vue';

const routes = [
    { path: '/', name: 'home', component: HomePage },
    {
        path: '/posts',
        name: 'posts',
        component: () => import('@/components/Posts/Posts.vue'),
    },
    {
        path: '/post/:id',
        name: 'post',
        component: () => import('@/components/Posts/Post.vue'),
    },
];


const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;