<script lang="ts" setup>
import GoLink from '../components/GoLink.vue';
</script>

<template>
    <main>
        <h2>Get Involved</h2>

        <p>Any MIT undergraduate can join. No prior satellite experience is required. We are deliberately interdisciplinary and want students across majors.</p>
        
        <img class="involved-photo" src="../assets/involved.jpg" />

        <h3>How to Join</h3>

        <p>1. Fill out the interest form to share your project and subteam preferences.</p>
        <p>2. Attend a general body meeting. We will help you join Slack and connect you with team leads.</p>
        <p>3. Complete the member form (separate from the onboarding interest form). The link is pinned in the general Slack channel.</p>

        <h3>Expectations</h3>

        <p>
        Members are expected to: attend weekly general body meetings; attend weekly subteam meeting(s); join at least one subteam for at least one project.

        Time commitment depends on the point in the semester. During busy seasons such as design reviews, the time demand increases.
        </p>

        <h3>Resources to Get Started</h3>
        
        <GoLink to="https://wikis.mit.edu/confluence/pages/viewpage.action?pageId=324944308" :external=true>Team Wiki (Confluence)</GoLink>
        
        <h3>Oppurtunities</h3>
        
        <ul>
            <li>Software workshops (e.g. STK, NOS(3))</li>
            <li>Hardware prototyping and build sessions</li>
            <li>Guest lectures</li>
            <li>Educational material creation</li>
            <li>Potential internships through sponsors</li>
            <li>Teaching opportunities (e.g. through Spark)</li>
        </ul>
    </main>
</template>

<style scoped>
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

ul {
    display: flex;
    flex-direction: column;
    gap: 10px;
}

.involved-photo {
    width: 100%;
    max-height: 500px;

    object-fit: cover;
}
</style>