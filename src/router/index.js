import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [{
        path: "/",
        name: "Home",
        component: Home,
        meta: { transitionName: 'slide' }
    },
    {
        path: "/About",
        name: "About",
        component: () =>
            import ("@/views/About.vue"),
        meta: { transitionName: 'slide' }
    },
    {
        path: "/Contact",
        name: "Contact",
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import ( /* webpackChunkName: "about" */ "../views/Contact.vue"),
        meta: { transitionName: 'slide' }
    },
    {
        path: '/Works',
        name: 'Works',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import ( /* webpackChunkName: "about" */ '../views/Works.vue'),
        meta: { transitionName: 'slide' }
    }
];

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes,
});

export default router;