<script setup lang="ts">
</script>

<template>
    <footer>
        <div class="info">
            <span class="name">MIT Satellite Team</span>
            <a href="mailto:satellite-team-exec@mit.edu">Email Us</a>
            <a href="https://accessibility.mit.edu/" target="blank">Accessibility</a>
        </div>

        <span>© 2026 MIT Satellite Team. All rights reserved. </span>
    </footer>
</template>

<style scoped>
footer {
    display: flex;

    justify-content: space-between;
    align-items: center;

    padding: 40px;

    font-size: 0.9rem;
}

.name {
    font-weight: 500;
}

.info {
    display: flex;
    flex-direction: column;

    gap: 5px;
}
</style>