<script setup lang="ts">
defineProps<{ to: string }>()
</script>

<template>
    <RouterLink :to="to"> <slot /> <span class="material-symbols-sharp">keyboard_arrow_right</span></RouterLink>
</template>

<style scoped>
a {
    display: flex;

    align-items: center;

    text-decoration: none;

    color: var(--accent);
}

a > .material-symbols-sharp {
    transition: translate 100ms ease;

    color: var(--accent);
}

a:hover > .material-symbols-sharp {
    translate: 4px 0px;
}
</style>