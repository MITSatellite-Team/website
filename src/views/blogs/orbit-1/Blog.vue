<script lang="ts" setup>
import GoLink from '../../../components/GoLink.vue';
</script>

<template>
    <main>
        <h2>In Orbit Issue 1 - One Year: One Launch</h2>
        
        <img class="photo" src="./header.png" />
        <p class="alt-text">
            Last screenshot before LEONIRD's onboard GoPro lost power.
        </p>

        <p>
        Hey everyone! It's been a while since you last heard from us (a little over a month in fact!),
        and we have a LOT to catch you up on. For those of you who read the last post, you'd know that
        were coming up on our first year of existence. On top of that, we have 2 ongoing projects that
        are actively being worked on, and over this past month, immense progress has been made on one
        in particular: LEONIRD.
        </p>

        <p>
        Our first step towards Phase I of LEONIRD involved launching a high-altitude balloon (HAB) in
        the cold and damp climate of New York, which reached almost 100k ft in the air. It was packed
        chock full of sensors, telemetry, and cameras. Craziest part of this launch? It was designed,
        created, and launched all within a month. The boards that controlled, stored, and communicated
        all of the on-board data were initially expected to take over a month to finish, and our talented
        firmware team managed to get it ready by launch. Of course, launch was a little rocky
        (last-minute helium shortage, structural issues, and some electrical mishaps), but we managed
        to adapt and get the balloon into the air.
        </p>

        <p>
        After a slightly tumultuous chase (that involved a little luck with finding it after telemetry
        ceased and power died) and a 9 hour drive through New England, we managed to recover the payload
        the next day, along with the 4 temperature sensors, HPT sensor, and a special spectrometer fully
        designed and machined by us that all came on board.
        </p>

        <p>
        A particularly important component that was recovered was the onboard ARGUS board
        (a design from a class at CMU), which contained an RP2350 processor, LORA radio, GPS, IMU, and I2C
        line. This board collected all the sensor data and sent it over the LORA radio to our microcontrollers,
        dubbed Beacons, which were placed in different places. The first beacon, Beacon 1, was put on top of
        MIT's own Green Building (the second tallest building in Cambridge) and connected to a large antenna.
        The second Beacon, Feldspar, which came with the team---connected to an antenna and ziptied to the
        top of the main chase vehicle. The third and final Beacon, Riebeck, was an onboard microcontroller
        meant to pick up backup radio and GPS data. Unfortunately, this microcontroller was dropped last-minute
        to reduce weight and ensure the HAB's launch. 
        </p>

        <img class="photo" src="./recovery.png" />
        <p class="alt-text">
            Akshay ('28) and Aleks ('28) find our payload in New Hampshire. GoPro can be seen on the chassis.
        </p>

        <p>
        Next steps include interpreting data, iterating (particularly on the spectrometer), improving structures,
        and documenting everything to improve future missions. A particularly important post-launch step involves 
        adapting what we learned from the HAB into our future plans for our satellite launch (slated for Fall of 2027),
        so that were truly space ready. This involves careful strategizing, designing, extensive testing,
        and above all a positive attitude towards our work, even when things get hard and were forced to adapt plans.
        </p>

        <img class="photo" src="./group.png" />
        <p class="alt-text">
            Launch team at New York. Selfie taken by Chris ('29). From left to right: Ryan ('29), Izaan ('28), Armaan ('29),
            Liam ('29), Mirabelle ('29), Akshay ('28), Emily ('28), Aleks ('28), Sebastián ('29), Pranav ('27), Ajibola ('29), & Asael ('28).
        </p>

        <p>
        We'd also like to extend a shoutout to New-England Sci-Tech (NEST) in Natick, MA, who provided us with an APRS
        backup transmitter which helped us track down the payload. They also had a class on Saturday (day of launch)
        were they tracked our flight trajectory. Thank you guys for all your help! We're extremely proud of the entire
        team, and all the good work that they've done to put such a newborn team on the map. In the same vein, we'd like
        to shoutout Liam Hanrahan ('29) who did a lot of important work on the firmware/software side. For more information
        on that, check out his blog. We hope to continue our work into next year, and the future beyond so we become a
        mainstay build team here at MIT!
        </p>

        <h3>Around the Team</h3>

        <p>
        With the first issue of "In Orbit," comes the first edition of our Around the Team portion! Here we'd like to shout
        out all the hard work of a specific member over the past month, to show our appreciation for everyone on the team!
        The first Around the Team of the newsletter's history goes to...
        </p>

        <img class="photo-aspect" src="./ryan.jpg" />
        <p class="alt-text">
            Ryan Tang ('29) at the HAB Launch
        </p>

        <p>
        Ta-da! Meet Ryan Tang ('29), who was the main brain behind the proverbial spectrometer that has been constantly
        mentioned throughout this issue. See, this spectrometer is a crossed Czerny-Turner spectrometer, specially designed
        to operate in the stratosphere and covering 200-500nm wavelengths with roughly 0.5nm resolution. The size and weight
        constraints of the LEONIRD I payload forced Ryan into using this compact Czerny-Turner setup, and the wavelength
        range was particularly interesting at altitude, since the payload crossed a large part of the atmosphere that would
        normally eat up all that UV signal. Thus, this spectrometer allowed LEONIRD I to get measurements that weren't
        really feasible at ground-level. 
        </p>

        <img class="photo-aspect" src="./spectrometer.jpg" />
        <p class="alt-text">
            Ryan's spectrometer while being assembled. You can see the components being fit inside, including the two PCBs.
        </p>

        <p>
        However, while operating so high up, temperature and pressure swings could cause condensation the optics, which
        would ruin the measurements fast. The solution? Sealing and filling the spectrometer's enclosure with inert gas
        and silica gel packets that would keep the optics clean and dry, regardless of the surroundings.
        </p>

        <img class="photo" src="./cad.png" />
        <p class="alt-text">
            Models of the two PCBs in the spectrometer. On the left is the mainboard, which holds the Raspberry Pi
            Pico as well as an RTC and temperature sensor. On the right is the PCB holding the detector, which needed
            to be a lot smaller to fit in the mount.
        </p>

        <p>
        Currently the instrument still needs to be properly characterized and calibrated, so there isn't any interesting
        spectra to show yet. That said, the science goals are to gather UV flux measurements, and identify atmospheric
        gas signatures at altitude. Ryan's spectrometer would prove a crucial step towards LEONIRD's environmental goals
        (particularly for Phase II), so shoutout to him for all his hard work this semester for us!
        </p>

        <h3>Upcoming Events</h3>

        <p>
        The semester is ending, so no more immediate meetings. Instead, we're pivoting into summer work as we are starting
        to get planning done for the continuations of our 2 ongoing projects, as well as some new possibilities for more
        High Altitude Balloon launches. Some people, namely our Vice President Izaan Rizvi ('28) and prominent member Chris
        Kirchain ('29), will help lead work throughout the summer to make sure we keep our foot on the gas for all of the
        cool things we want to continue to accomplish as a team.
        </p>

        <h3>Get in Contact</h3>

        <ul>
            <li>Website: satellite.mit.edu</li>
            <li>Email: satellite-team-exec@mit.edu</li>
            <li>Instagram: @mitsatellite</li>
        </ul>
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

.photo {
    width: 100%;
    max-height: 500px;

    object-fit: cover;
}

.photo-aspect {
    height: 500px;

    display: block;
    margin-left: auto;
    margin-right: auto;
}
</style>