<script lang="ts" setup>

</script>

<template>
    <main>
        <div class="gradients">
            <div class="corner-gradient"></div>
            <div class="bottom-gradient"></div>
            <div class="very-bottom-gradient"></div>
        </div>

        <div class="main-content">
            <h1>Bridging Systems, <br> Software, and Hardware</h1>

            <p>We are MIT's main undergraduate-led satellite hub. With backing from  AeroAstro and the Small Satellite Collaborative, we aim to bridge the  institute's undergraduate body with satellite systems, software, and  hardware engineering experience with an emphasis on humanitarian impact. All our projects are started from scratch, so our members get  experience in all the steps of a mission's life cycle.</p>

            <button>Get Involved</button>
        </div>
    </main>

    <p>More here!</p>
</template>

<style scoped>
main {
    background-image: url('../assets/earth-hero.png');
    background-size: cover;

    width: 100vw;
    height: 100vh;

    overflow: hidden;

    position: relative;
}

.gradients {
    position: absolute;
    left: 0;
    top: 0;

    width: 100%;
    height: 100%;
}

.corner-gradient {
    position: absolute;
    left: 0;
    bottom: 0;

    width: 100%;
    height: 100%;

    background: linear-gradient(to top right, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0));
}

.bottom-gradient {
    position: absolute;
    left: 0;
    bottom: 0;

    width: 100%;
    height: 60%;

    background: linear-gradient(to top, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0));
}

.very-bottom-gradient {
    position: absolute;
    left: 0;
    bottom: 0;

    width: 100%;
    height: 40px;

    background: linear-gradient(to top, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0));
}

.main-content {
    position: absolute;

    left: 60px;
    bottom: 60px;
}

.main-content > h1 {
    margin: 0;
    margin-bottom: 20px;
}

.main-content > p {
    font-size: 1.5rem;

    max-width: 56rem;

    margin: 0;
    margin-bottom: 40px;
}

.main-content > button {
    font-size: 1.5rem;

    margin: 0;
}
</style>