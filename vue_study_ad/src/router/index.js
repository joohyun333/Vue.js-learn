import { createRouter, createWebHistory } from 'vue-router'
import { createApp } from 'vue'
import App from '../App.vue'


import NewsView from '../views/NewsView'
import JobsView from '../views/JobsView'
import AskView from '../views/AskView'
import UserView from "../views/UserView";

const routes =
    [
        {
            path: "/",
            redirect: 'news',
        },
        {
            path: '/news',
            component: NewsView,
        },
        {
            path: '/jobs',
            component: JobsView,
        },
        {
            path: '/ask',
            component: AskView,
        },
        {
            path: '/user/:id',
            component: UserView
        }
    ];

export const router = createRouter({
    history : createWebHistory(),
    routes,
})

createApp(App).use(router)
