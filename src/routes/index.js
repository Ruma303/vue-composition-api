import { createRouter, createWebHistory } from 'vue-router';
import CakesVue from '@/components/Cakes.vue';
import LoollipopsVue from '@/components/Loollipops.vue';

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            component: CakesVue
        },
        {
            path: '/lollipops',
            component: LoollipopsVue
        },
    ]
});

export default router;