import {
    createRouter,
    createWebHistory,
    type RouteLocationNormalizedLoaded,
    type RouteRecordRaw,
} from "vue-router";
import HomeView from "@/views/HomeView.vue";
import AboutView from "@/views/AboutView.vue";
import PizzaView from "@/views/PizzaView.vue";
import PizzasView from "@/views/PizzasView.vue";
import ContactView from "@/views/ContactView.vue";
import ContactFaqView from "@/views/ContactFaqView.vue";
import ContactFormView from "@/views/ContactFormView.vue";
import ErrorView from "@/views/ErrorView.vue";

const routes: RouteRecordRaw[] = [
    {
        path: "/",
        name: "home",
        component: HomeView,
    },
    {
        path: "/about",
        name: "about",
        component: AboutView,
    },
    {
        path: "/pizzas",
        // name: "pizzas",
        // component: PizzasView,
        // props: (route: RouteLocationNormalizedLoaded) => ({
        //     searchTerm: route.query?.search || "",
        // })
        props: true,
        beforeEnter: async (to, from, next) => {
            to.params.searchTerm = (to.query.search || "") as string;
            next();
        },
        children: [
            {
                path: ":id",
                name: "pizza",
                component: PizzaView,
                props: true,
            },
            {
                path: "",
                name: "pizzas",
                component: PizzasView,
            },
        ],
    },
    {
        path: "/contact",
        name: "contact",
        component: ContactView,
        children: [
            {
                path: "faq",
                name: "contact-faq",
                component: ContactFaqView,
            },
            {
                path: "form",
                name: "contact-form",
                component: ContactFormView,
            },
        ],
    },
    {
        path: "/:pathMatch(.*)*",
        // name: "error",
        // component: ErrorView,
        redirect: { name: "home" }
    }
    // {
    //   path: "/login",
    //   name: "login",
    //   component: LoginView,
    // },
];

export const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
});
