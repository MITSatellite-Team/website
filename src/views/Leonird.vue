<script lang="ts" setup>
import GoLink from '../components/GoLink.vue';
import LeonirdLaunchVideo from '../assets/leonird/leonird-hab-launch-optimized.webm'
import HabBalloon from '../assets/leonird/hab-baloon.jpg'
import Earth from '../assets/leonird/earth.png'
import Assembly from '../assets/leonird/assembly.jpg'

// import { useTemplateRef, watch } from 'vue';

// const video = useTemplateRef('video')
// watch(video, () => {
// 	if(video.value) video.value.playbackRate = 0.5
// })

</script>

<template>
	<div class="hero">
		<video :src="LeonirdLaunchVideo" autoplay muted="true" loop="true" ref="video" />

		<div class="gradients">
            <div class="corner-gradient"></div>
            <div class="bottom-gradient"></div>
            <div class="very-bottom-gradient"></div>
        </div>

		<div class="hero-content">
            <h1>LEONIRD</h1>

            <p>
				The Low Earth Orbit Near-Infrared Device, is MIT Satellite Team's flagship mission. The long-term vision is a CubeSat mission that uses NIR solar occultation and limb sounding to observe Earth's atmosphere along the edge of the planet during orbital sunrise and sunset. In Spring 2026, we completed a high-altitude balloon flight to test flight computer integration, telemetry, tracking, recovery, and operations.
			</p>

			<GoLink to="#about" size="large">Read More</GoLink>
        </div>
    </div>

    <main>
		<div id="about" style="translate: 0px -100px;"></div>

        <h2>What is LEONIRD?</h2>

        <p>
			LEONIRD, the Low Earth Orbit Near-Infrared Device, is MIT Satellite Team's flagship mission.
		</p>

		<p>
			The long-term vision is a CubeSat mission that uses NIR solar occultation and limb sounding to observe Earth's atmosphere along the edge of the planet during orbital sunrise and sunset. Before building toward the full science mission, the team is proving the core systems step by step.
		</p>

		<p>
			In Spring 2026, we completed a high-altitude balloon flight to test flight computer integration, telemetry, tracking, recovery, and operations.
		</p>

		<p>
			Our next milestone is LEONIRD I, a 1U systems-proof satellite designed to demonstrate the avionics, communications, ground-station, software, and operations architecture needed for future LEONIRD missions. We are currently targeting launch readiness within the next 18 months.
		</p>

		<img :src="HabBalloon"/>
		<p style="text-align: center;">The team filling up the HAB with helium</p>
		
		<img :src="Earth"/>
		<p style="text-align: center;">The last photo captured by the mounted GoPro at roughly 50,000 ft.</p>
		
		<img :src="Assembly"/>
		<p style="text-align: center;">The LEONIRD HAB payload being assembled</p>
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
</style>