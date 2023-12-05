<template>
    <n-space style="">
        <n-space justify="space-between">
            <RouterLink class="link" to="/">Home</RouterLink>
            <RouterLink class="link" to="/about">About</RouterLink>
        </n-space>
        <RouterLink v-if="!isAuth" to="/login">Login</RouterLink>
        <button v-else @click="onLogout">Logout</button>
        this is a Home page
    </n-space>
</template>

<script setup>
import { NSpace, NTag } from 'naive-ui'
import {useHome} from '../composable/home';

const {isAuth, onLogout} = useHome()
</script>

<style>
.link{
    color:black;
    text-decoration: none;
}

.router-link-exact-active{
    color: brown;
}
</style>