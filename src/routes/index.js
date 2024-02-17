import { createRouter, createWebHistory } from 'vue-router';
import HomeVue from '@/components/Home.vue';
import AboutVue from '@/components/About.vue';

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            component: HomeVue
        },
        {
            path: '/about',
            component: AboutVue
        },
    ]
});

export default router;