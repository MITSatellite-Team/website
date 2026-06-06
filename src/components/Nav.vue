<script setup lang="ts">
import { useRouter } from 'vue-router';
import Logo from '../assets/satellite-logo.png'
import { onMounted, onUnmounted, ref } from 'vue';

const router = useRouter()

function goHome() {
    router.push('/')
}

const floating = ref(false)

function onScroll() {
  floating.value = window.scrollY > 0
}

onMounted(() => {
  window.addEventListener('scroll', onScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', onScroll)
})

</script>

<template>
    <nav :class="{ 'floating': floating }">
        <div class="logo" @click="goHome">
            <img :src="Logo" />
            <span>MIT Satellite</span>
        </div>
        
        <div class="nav-links">
            <RouterLink to="/#active-projects">Projects</RouterLink>
            <RouterLink to="/about">About</RouterLink>
            <a href="https://wikis.mit.edu/confluence/pages/viewpage.action?pageId=324944308" target="blank">Wiki</a>
            <RouterLink to="/get-involved"><button class="nav-button">Get Involved</button></RouterLink>
        </div>
    </nav>
</template>

<style scoped>
nav {
    position: sticky;
    top: 0;

    display: flex;

    justify-content: space-between;
    align-items: center;

    height: 4rem;
    margin-bottom: calc(-4rem - 20px);

    padding: 10px 20px;

    z-index: 1;

    border-bottom: 1px transparent solid;

    transition: background 100ms ease, border-bottom 100ms ease;
}

nav.floating {
    background: var(--background);
    border-bottom: 1px var(--text) solid;
}

.nav-links {
    display: flex;

    gap: 60px;

    align-items: center;
}

.nav-links > a {
    text-decoration: none;

    transition: color 100ms ease;
}

.nav-links > a:hover {
    color: var(--accent);

    transition: none;
}

.nav-button {
    background: none;

    border: 1px solid var(--text);
    color: var(--text);

    font-size: 1rem;
    font-weight: 400;

    transition: background 100ms ease, color 100ms ease;
}

.nav-button:hover {
    background: var(--text);
    color: var(--text-alt);

    transition: none;
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