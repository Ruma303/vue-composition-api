import { createRouter, createWebHistory } from 'vue-router';
import Cakes from '@/components/Cakes.vue';
import Lollipops from '@/components/Lollipops.vue';

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            component: Cakes
        },
        {
            path: '/lollipops',
            component: Lollipops
        },
    ]
});

export default router;