import { createRouter, createWebHistory } from "vue-router";

import Home from '../pages/Home.vue'
import Login from '../pages/Login.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'hame',
            component: Home,
            // beforeEnter() {
            //     alert('Hello')
            // }
        },
        {
            path: '/login',
            name: 'login',
            component: Login,
        }
    ]
})

router.beforeEach((to, from, next) => {
    const token = localStorage.getItem('token')
    if(!token && to.name ==! 'login') {
        next({name: 'login'})
    }else if (token && to.name == 'login') {
        next({name: from.name})
    }else {
        next()
    }
})

export default router;