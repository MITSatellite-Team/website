<script lang="ts" setup>
import LeonirdImg from '../assets/leonird.jpg'
import EtherImg from '../assets/ether.jpg'

import EdgertonImg from '../assets/partners/edgerton.png'
import AeroImg from '../assets/partners/aero.png'
import SscImg from '../assets/partners/ssc.png'
import SponsorTable from '../components/SponsorTable.vue'
import { useRouter } from 'vue-router'

const router = useRouter()

function goToGetInvolved() {
    router.push('/get-involved')
}

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

            <button @click="goToGetInvolved">Get Involved</button>
        </div>
    </main>

    <div style="height: 20px;"></div>

    <div class="content">
        <div id="active-projects" style="translate: 0px -100px;"></div>

        <h2>Active Projects</h2>

        <div class="project">
            <div class="project-text">
                <div class="project-top">
                    <h3 class="project-title">LEONIRD I/II</h3>
                    <span class="project-flavor">CubeSat</span>
                </div>

                <p class="project-description">Two-phase CubeSat program centered on solar occultation trace-gas mapping, with an outreach component.</p>

                <RouterLink to="/leonird" class="project-learn-more">Learn More <span class="material-symbols-sharp">keyboard_arrow_right</span></RouterLink>
            </div>

            <img class="project-image" :src="LeonirdImg" />
        </div>

        <div class="project">
            <div class="project-text">
                <div class="project-top">
                    <h3 class="project-title">ETHER</h3>
                    <span class="project-flavor">Payload</span>
                </div>

                <p class="project-description">Cryogenic propellant mixing payload aimed at reducing temperature stratification inside cryogenic tanks and enabling near zero boil-off.</p>
            
                <RouterLink to="/ether" class="project-learn-more">Learn More <span class="material-symbols-sharp">keyboard_arrow_right</span></RouterLink>
            </div>

            <img class="project-image" :src="EtherImg" />
        </div>

        <div style="height: 40px;"></div>

        <h2>Partners</h2>

        <div class="partners">
            <img :src="EdgertonImg" />
            <img :src="AeroImg" />
            <img :src="SscImg" />
        </div>

        <div style="height: 80px;"></div>

        <h2 class="sponsors-title">Sponsor Oppurtunities</h2>
        <p>Support student space engineering and choose a sponsorship tier that fits your organization.</p>
    
        <SponsorTable class="sponsor-table"/>
    </div>
</template>

<style scoped>
.sponsor-table {
    margin-top: 80px;
    margin-left: auto;
    margin-right: auto;
}

.partners {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;

    gap: 100px;

    margin: 80px 0;
}

.sponsors-title {
    margin-bottom: 0;
}

main {
    background-image: url('../assets/earth-hero.png');
    background-size: cover;

    width: 100vw;
    height: 100vh;

    overflow: hidden;

    position: relative;

    min-height: 60rem;
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

.content {
    padding: 0 40px;

    margin-bottom: 100px;

    max-width: 1400px;
    margin-left: auto;
    margin-right: auto;
}

.project {
    display:  flex;

    justify-content: space-between;
    align-items: center;

    overflow: hidden;

    margin-top: -40px;
    margin-bottom: 20px;

    padding: 40px 0;
}

.project-image {
    height: 200px;
    max-width: 800px;

    object-fit: cover;

    flex-grow: 1;

    opacity: 50%;
    translate: 80px 0;

    transition: opacity 100ms ease, translate 100ms ease;
}

.project:hover > .project-image {
    opacity: 100%;
    translate: 0px 0;
}

.project-text {
    max-width: 600px;
}

.project-top {
    display: flex;

    align-items: baseline;

    gap: 10px;

    margin-bottom: 20px;
}

.project-title {
    font-weight: 600;
    font-size: 2rem;

    margin: 0;
}

.project-learn-more {
    display: flex;

    align-items: center;

    text-decoration: none;

    color: var(--accent);
}

.project-learn-more > .material-symbols-sharp {
    transition: translate 100ms ease;

    color: var(--accent);
}

.project-learn-more:hover > .material-symbols-sharp {
    translate: 4px 0px;
}

.project-flavor {
    font-weight: 300;
}

.project-description {
    margin: 0;
    margin-bottom: 20px;
}
</style>