<script lang="ts" setup>
import GoLink from '../components/GoLink.vue';
import Hero from '../assets/ether/hero-optimized.webm'
import Diagram1 from '../assets/ether/diagram-1.jpg'
import Codr from '../assets/ether/codr.jpg'
import Poster from '../assets/ether/poster.jpg'

// import { useTemplateRef, watch } from 'vue';

// const video = useTemplateRef('video')
// watch(video, () => {
// 	if(video.value) video.value.playbackRate = 0.5
// })

</script>

<template>
	<div class="hero">
		<video :src="Hero" autoplay muted loop playsinline ref="video" />

		<div class="gradients">
            <div class="corner-gradient"></div>
            <div class="bottom-gradient"></div>
            <div class="very-bottom-gradient"></div>
        </div>

		<div class="hero-content">
            <h1>Ether</h1>

            <p>
				Cryogenic propellant mixing payload aimed at reducing temperature stratification inside cryogenic tanks and enabling near zero boil-off.
			</p>

			<GoLink to="#about" size="large">Read More</GoLink>
        </div>
    </div>

    <main>
		<div id="about" style="translate: 0px -100px;"></div>

        <h2>What is ETHER?</h2>

        <p>
			ETHER is the MIT Satellite Team's microgravity fluids research project.
		</p>

		<p>
			In 2025, MIT Satellite team's chief engineer, Pranav Bala, won NASA's Human Lander Challenge. Ether was a subsystem of this project, focusing on the development of a cryogenic fluid experiment characterizing temperature gradients, pressure behavior, and fluid mixing within a tank equipped with modified baffle systems.
		</p>

		<p>
			The long-term vision is to develop and validate technologies that enable long-duration cryogenic propellant storage in space by reducing thermal stratification and propellant boil-off inside spacecraft tanks. ETHER is a combination of experimental testing, CFD modeling, and flight demonstrations, It investigates how new fluid management techniques like baffles can improve the efficiency of long-distance space missions.
		</p>

		<p>
			Our next milestone is a microgravity flight demonstration, where ETHER will collect thermal and pressure data during repeated periods of reduced gravity to evaluate the effectiveness of the baffle design in reducing stratification. These results will guide the development of future orbital experiments and ultimately support technologies for cryogenic propellant storage.
		</p>

		<img :src="Codr" class="codr-image"/>
		<p style="text-align: center;">ETHER CoDR Group</p>
		
		<img :src="Poster"/>
		<p style="text-align: center;">Edgerton Center showcase</p>
		
		<img :src="Diagram1"/>
		<p style="text-align: center;">ETHER structures diagram</p>
    </main>
</template>

<style scoped>
.hero {
    width: 100%;
    height: 100vh;

    overflow: hidden;

    position: relative;

    min-height: 60rem;
}

.hero > video {
	width: 100%;
	height: 100%;
	object-fit: cover;
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

.hero-content {
    position: absolute;

    left: 60px;
    bottom: 60px;
}

.hero-content > h1 {
    margin: 0;
    margin-bottom: 20px;
}

.hero-content > p {
    font-size: 1.5rem;

    max-width: 56rem;

    margin: 0;
    margin-bottom: 40px;
}

main {
    padding-top: 80px;
    padding-left: 40px;
    padding-right: 40px;

    min-height: calc(100vh - 230px);

    max-width: 1000px;
    margin-left: auto;
    margin-right: auto;
}

h3 {
    font-size: 2rem;
    font-weight: 500;

    margin-top: 60px;
    margin-bottom: 0;
}

p {
    margin-top: 10px;
    margin-bottom: 20px;
}

main > img {
	width: 100%;
    max-height: 500px;

    object-fit: cover;

	margin-top: 40px;
}

.codr-image {
	max-height: 800px;
}

@media (max-width: 900px) {
    .hero-content > h1 {
        font-size: 4rem;
    }

    .hero-content > p {
        max-width: calc(100% - 60px);

        font-size: 1.2rem;
    }
}
</style>