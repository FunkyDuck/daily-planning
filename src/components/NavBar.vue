<script setup lang="ts">
</script>

<template>
    <header>
        <nav>
            <RouterLink to="daily">Aujourd'hui</RouterLink>
            <RouterLink to="weekly">Semaine</RouterLink>
            <RouterLink to="monthly">Mois</RouterLink>
            <RouterLink to="global">Planning Complet</RouterLink>
        </nav>
    </header>
</template>

<style lang="css" module>
header {
    display: flex;
    flex-direction: row;
    width: 100%;
    background: var(--color-background);
    margin: 0;
    padding: 0;

    nav {
        display: flex;
        flex-direction: row;
        width: 100%;

        & > * {
            width: 100%;
            color: var(--color-heading);

            text-align: center;

            &:hover {
                background: var(--color-heading);
                color: var(--color-background);
            }
        }
    }
}
</style>