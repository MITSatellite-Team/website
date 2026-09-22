<script lang="ts" setup>
</script>

<template>
    <main>
        <h2>MIT Satellite Team's Grand Debut</h2>
        
        <img class="header-photo" src="./header.jpg" />
        <p class="alt-text">
            Our co-president, Emily Alemán, telling others about our endeavors at the 2026 Edgerton Showcase. Photo credits to Marvelin Higginbottom.
        </p>

        <p>
        A year ago, and this club was nothing but a discussion between a few people.
        Now, we've got a high-altitude balloon flight slated for May 2nd, with plans to
        put a satellite in space and a zero-g test.
        </p>

        <p>
        Hey everyone! We're the new kid on the Edgerton block: the MIT Satellite Team!
        We're a dedicated group of undergraduates from across the spectrum of majors joined
        by a collective appreciation of space and a drive to help others through that appreciation. 
        </p>

        <p>
        This Edgerton showcase serves as a milestone for the club, as it marks our first appearance
        at an official, MIT-sanctioned event that introduced us to established faces in the MIT
        community, from current students to alums.
        </p>

        <img class="mezz-photo" src="./mezz.jpg" />
        <p class="alt-text">
            Our representatives at the 2026 Edgerton showcase (from left to right): Kareenah Shah ('27),
            Emily Alemán ('28), Izaan Rizvi ('28), Sebastián Perdomo Hernández ('29), & Divya Krishna ('29).
        </p>

        <p>
        Founded by Aleksander Garbuz (Aero/Astro '28) and Emily Alemán (Aero/Astro '28), the team
        has grown from a young group of friends to a matured, organized team driving full speed ahead.
        We're actively working on two concurrent missions: ETHER and LEONIRD. ETHER is our 6U experiment
        testing a novel active mixing system for cryogenic fluids to reduce their boil-off via thermal
        stratification; while LEONIRD is our first, full-on satellite mission that uses solar occultation
        to detect trace gases in the atmosphere to fill a recent data gap and aid the war on climate
        change. It's a two-phase endeavor, with Phase I being a high-altitude weather balloon to test our
        communication systems, and Phase II putting the satellite in actual low-Earth orbit. 
        </p>

        <p>
        Over this past semester, we've doubled our active team member population, seamlessly transitioned
        ETHER from a space-faring payload into a zero-g flight, completed our first Conceptual Design
        Review (CoDR) for ETHER, & scheduled a date for Phase I of LEONIRD.
        </p>

        <p>
        So with all this reflection on our progress and what we've done, one question rises above the rest: what's next for Satellite Team? 
        </p>

        <p>
        From CPW events, SPARK classes, & sponsorships from industry professionals, to the actual launch
        of LEONIRD Phase I, the ETHER test flight, and future space missions, we have a lot to show, and
        a lot to prove. Above all, we have a lot of drive to show the world what we're made of, so it is
        with this first post that we elect to celebrate this club achievement and announce a way for you,
        our incredible readers, to stay "in our orbit" so to speak. 
        </p>

        <p>
        Please stay tuned for our upcoming monthly newsletter: "In Orbit" where we'll detail updates,
        exciting news, and teammate spotlights so you know that we're not going anywhere but up.
        </p>

        <p>
        If you'd like to get in contact right now, shoot us an email at satellite-team-exec@mit.edu.
        If you can't wait to hear from us again and want to know more about what we're working on
        currently, please check out our website or our wiki.
        </p>

        <p>
        Thanks for being here at our beginning, we're excited to stay in touch! We'll see each other
        soon, and if we don't, you can always look up at our satellites in the sky (well, once they're up there that is!) 
        </p>
    </main>
</template>

<style scoped>
main {
    padding-top: 80px;
    padding-left: 40px;
    padding-right: 40px;

    min-height: calc(100vh - 230px);

    max-width: 800px;
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

.alt-text {
    text-align: center;
}

ul {
    display: flex;
    flex-direction: column;
    gap: 10px;
}

.header-photo {
    width: 100%;
    max-height: 500px;

    object-fit: cover;
}

.mezz-photo {
    width: 100%;
    max-height: 500px;

    object-fit: cover;
}
</style>