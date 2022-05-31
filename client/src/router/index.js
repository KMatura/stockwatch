import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import WatchlistView from '../views/WatchlistView.vue';
import AboutUsView from '../views/AboutUsView.vue';
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
            path: '/Watchlist',
            alias: '/watchlist',
            name: 'dashboard',
            component: WatchlistView,
        },
        {
            path: '/AboutUs',
            alias: '/aboutus',
            name: 'AboutUs',
            component: AboutUsView,
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
            path: '/register',
            alias: '/signup',
            name: 'signup',
            component: SignUpView
        }
    ],
});

export default router;