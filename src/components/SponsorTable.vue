<script setup lang="ts"></script>

<template>
    <table class="normal">
        <thead>
            <tr>
                <td></td>
                <td class="sponsor-label">LEO $2,500</td>
                <td class="sponsor-label">MEO $3,750</td>
                <td class="sponsor-label">GEO $5,000</td>
                <td class="sponsor-label">BEYOND $10,000</td>
            </tr>
        </thead>

        <tbody>
            <tr>
                <td class="table-label">Custom message engraved on satellite frame</td>
                <td></td>
                <td></td>
                <td></td>
                <td><span class="material-symbols-sharp">check</span></td>
            </tr>

            <tr>
                <td class="table-label">LinkedIn post</td>
                <td></td>
                <td></td>
                <td><span class="material-symbols-sharp">check</span></td>
                <td><span class="material-symbols-sharp">check</span></td>
            </tr>

            <tr>
                <td class="table-label">Access to resume bank</td>
                <td></td>
                <td><span class="material-symbols-sharp">check</span></td>
                <td><span class="material-symbols-sharp">check</span></td>
                <td><span class="material-symbols-sharp">check</span></td>
            </tr>

            <tr>
                <td class="table-label">Team info session</td>
                <td></td>
                <td><span class="material-symbols-sharp">check</span></td>
                <td><span class="material-symbols-sharp">check</span></td>
                <td><span class="material-symbols-sharp">check</span></td>
            </tr>

            <tr>
                <td class="table-label">Social media posts (Instagram, Facebook)</td>
                <td>1</td>
                <td>2</td>
                <td>3</td>
                <td>3</td>
            </tr>

            <tr>
                <td class="table-label">Logo placement (apparel, flyers, sponsorship banner, website)</td>
                <td>Small</td>
                <td>Medium</td>
                <td>Large</td>
                <td>Large</td>
            </tr>
        </tbody>
    </table>

    <div class="mobile">
        <table>
            <thead>
                <tr>
                    <td class="sponsor-label">BEYOND $10,000</td>
                </tr>
            </thead>

            <tbody>
                <tr>
                    <td class="table-label">Custom message engraved on satellite frame</td>
                    <td><span class="material-symbols-sharp">check</span></td>
                </tr>

                <tr>
                    <td class="table-label">LinkedIn post</td>
                    <td><span class="material-symbols-sharp">check</span></td>
                </tr>

                <tr>
                    <td class="table-label">Access to resume bank</td>
                    <td><span class="material-symbols-sharp">check</span></td>
                </tr>

                <tr>
                    <td class="table-label">Team info session</td>
                    <td><span class="material-symbols-sharp">check</span></td>
                </tr>

                <tr>
                    <td class="table-label">Social media posts (Instagram, Facebook)</td>
                    <td>3</td>
                </tr>

                <tr>
                    <td class="table-label">Logo placement (apparel, flyers, sponsorship banner, website)</td>
                    <td>Large</td>
                </tr>
            </tbody>
        </table>

        <table>
            <thead>
                <tr>
                    <td class="sponsor-label">GEO $5,000</td>
                </tr>
            </thead>

            <tbody>
                <tr>
                    <td class="table-label">Custom message engraved on satellite frame</td>
                    <td></td>
                </tr>

                <tr>
                    <td class="table-label">LinkedIn post</td>
                    <td><span class="material-symbols-sharp">check</span></td>
                </tr>

                <tr>
                    <td class="table-label">Access to resume bank</td>
                    <td><span class="material-symbols-sharp">check</span></td>
                </tr>

                <tr>
                    <td class="table-label">Team info session</td>
                    <td><span class="material-symbols-sharp">check</span></td>
                </tr>

                <tr>
                    <td class="table-label">Social media posts (Instagram, Facebook)</td>
                    <td>3</td>
                </tr>

                <tr>
                    <td class="table-label">Logo placement (apparel, flyers, sponsorship banner, website)</td>
                    <td>Large</td>
                </tr>
            </tbody>
        </table>

        <table>
            <thead>
                <tr>
                    <td class="sponsor-label">MEO $3,750</td>
                </tr>
            </thead>

            <tbody>
                <tr>
                    <td class="table-label">Custom message engraved on satellite frame</td>
                    <td></td>
                </tr>

                <tr>
                    <td class="table-label">LinkedIn post</td>
                    <td></td>
                </tr>

                <tr>
                    <td class="table-label">Access to resume bank</td>
                    <td><span class="material-symbols-sharp">check</span></td>
                </tr>

                <tr>
                    <td class="table-label">Team info session</td>
                    <td><span class="material-symbols-sharp">check</span></td>
                </tr>

                <tr>
                    <td class="table-label">Social media posts (Instagram, Facebook)</td>
                    <td>2</td>
                </tr>

                <tr>
                    <td class="table-label">Logo placement (apparel, flyers, sponsorship banner, website)</td>
                    <td>Medium</td>
                </tr>
            </tbody>
        </table>

        <table>
            <thead>
                <tr>
                    <td class="sponsor-label">LEO $2,500</td>
                </tr>
            </thead>

            <tbody>
                <tr>
                    <td class="table-label">Custom message engraved on satellite frame</td>
                    <td></td>
                </tr>

                <tr>
                    <td class="table-label">LinkedIn post</td>
                    <td></td>
                </tr>

                <tr>
                    <td class="table-label">Access to resume bank</td>
                    <td></td>
                </tr>

                <tr>
                    <td class="table-label">Team info session</td>
                    <td></td>
                </tr>

                <tr>
                    <td class="table-label">Social media posts (Instagram, Facebook)</td>
                    <td>1</td>
                </tr>

                <tr>
                    <td class="table-label">Logo placement (apparel, flyers, sponsorship banner, website)</td>
                    <td>Small</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<style scoped>
tr:nth-child(even) { 
    background: rgba(245, 213, 224, 0.1);
}

table {
    border-collapse: collapse;

    margin-left: auto;
    margin-right: auto;
}

tbody {
    border: 1px solid rgba(245, 213, 224, 0.1);
}

thead tr td {
    border: none;
    border-bottom: 1px solid white;

    font-weight: 600;
}

.mobile > table > thead {
    border-bottom: 1px solid white;
}

td {
    font-size: 1.2rem;

    padding: 20px;
}

td:not(.table-label) {
    text-align: center;
}

td .material-symbols-sharp {
    color: var(--accent);

    font-size: 2rem;
}

.table-label {
    max-width: 400px;
}

.sponsor-label {
    max-width: 80px;
}

.mobile {
    display: none;
}

@media (max-width: 650px) {
    .normal {
        display: none;
    }

    .mobile {
        display: block;
    }
}
</style>