<script lang="ts" setup>

</script>

<template>
    <main>
        <h2>About Us</h2>

        <img class="exec-photo" src="../assets/about/execPhoto.webp" />

        <h3>Mission</h3>

        <p>
            The MIT Satellite Team is a student-run group that designs, builds, tests, and flies small satellites. We fuse aerospace, software, and systems engineering to tackle end-to-end missions using NASA-style processes and real hardware.
        </p>

        <p>
            Our mission is to be the undergraduate-led hub for MIT student satellite efforts, with the long-term goal of launching a fully student-built and integrated satellite into low Earth orbit. 
        </p>

        <h3>How We Operate</h3>

        <p>
            We are organized around projects and subsystem teams. Members do real engineering work across various technical disciplines.
        </p>

        <h3>Values</h3>

        <p>
            Continuity and documentation: We run on durable documentation. Every project produces living design docs, interface definitions, test plans, and lessons learned so that new members can ramp quickly and the team can compound progress over semesters.
        </p>

        <p>
            Advising and alignment: We are advised by Zac Manchester
        </p>

        <h3>Team Culture</h3>

        <p>
            Our team culture is built on hands-on learning, mentorship, and real-world experience. Students of all skill levels are welcome to join and grow with us.
        </p>

        <p>
            We believe in learning by doing. Every member has the opportunity to work on actual hardware, contribute to mission-critical systems, and gain experience that directly translates to professional aerospace careers. Whether you're writing your first line of flight software or designing your first circuit board, our experienced members are here to guide and support you. 
        </p>
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

.exec-photo {
    width: 100%;
    max-height: 500px;

    object-fit: cover;
}
</style>