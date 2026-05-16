<script setup lang="ts">
import { useRouter } from 'vue-router';
import Logo from '../assets/satellite-logo.png'

const router = useRouter()

function goHome() {
    router.push('/')
}

</script>

<template>
    <nav>
        <div class="logo" @click="goHome">
            <img :src="Logo" />
            <span>MIT Satellite</span>
        </div>
        
        <div class="nav-links">
            <RouterLink to="/projects">Projects</RouterLink>
            <RouterLink to="/about">About</RouterLink>
            <RouterLink to="/wiki">Wiki</RouterLink>
            <RouterLink to="/get-involved"><button class="nav-button">Get Involved</button></RouterLink>
        </div>
    </nav>
</template>

<style scoped>
nav {
    position: sticky;

    display: flex;

    justify-content: space-between;
    align-items: center;

    height: 4rem;
    margin-bottom: calc(-4rem - 20px);

    padding: 10px 20px;

    z-index: 1;
}

.nav-links {
    display: flex;

    gap: 60px;

    align-items: center;
}

.nav-links > a {
    text-decoration: none;
}

.nav-button {
    background: none;

    border: 1px solid var(--text);
    color: var(--text);

    font-size: 1rem;
    font-weight: 400;
}

.logo {
    display: flex;

    align-items: center;

    gap: 20px;

    cursor: pointer;
}

.logo > img {
    width: 3rem;
}

.logo > span {
    font-weight: 500;
    font-size: 1.6rem;
}
</style>