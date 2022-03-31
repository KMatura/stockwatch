import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import DashboardView from '../views/DashboardView.vue';
import SettingsView from '../views/SettingsView.vue';
import SignInView from '../views/SignInView.vue';
import FAQView from '../views/FAQView.vue';
import SignUpView from '../views/SignUpView.vue';

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            alias: '/home',
            name: 'home',
            component: HomeView,
        },
        {
            path: '/dashboard',
            name: 'dashboard',
            component: DashboardView,
        },
        {
            path: '/settings',
            name: 'settings',
            component: SettingsView,
        },
        {
            path: '/login',
            alias: '/signin',
            name: 'login',
            component: SignInView,
        },
        {
            path: '/faq',
            name: 'faq',
            component: FAQView

        },
        {
            path: '/signup',
            name: 'signup',
            component: SignUpView
        }
    ],
});

export default router;