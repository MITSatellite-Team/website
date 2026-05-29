<script setup lang="ts">
defineProps<{ to: string, external?: boolean, size?: 'normal' | 'large' }>()
</script>

<template>
    <RouterLink v-if="!external" :to="to" :style="size === 'large' ? 'font-size: 1.5rem' : ''"> <slot /> <span class="material-symbols-sharp" :style="size === 'large' ? 'font-size: 36px' : ''">keyboard_arrow_right</span></RouterLink>
    <a v-if="external" :href="to" target="blank" :style="size === 'large' ? 'font-size: 1.5rem' : ''"> <slot /> <span class="material-symbols-sharp" :style="size === 'large' ? 'font-size: 36px' : ''">keyboard_arrow_right</span></a>
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