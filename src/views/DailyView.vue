<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { upperFirst } from '@/services/string';
import { getDaily } from '@/services/schedule';
import { fetchJson } from '@/services/json';

const schedule = ref();
const daily = ref();
const today = new Date();
const selectedDate = ref(today);

console.log(today)

onMounted(async () => {
    schedule.value = await fetchJson()

    daily.value = getDaily(schedule.value, selectedDate.value)

    console.log(daily.value)
})
</script>

<template>
    <main>
        <!-- <h1>Daily</h1> -->
        <section>
            <h1>{{ upperFirst(selectedDate.toLocaleDateString('fr-FR', {weekday: 'long'})) }} {{ selectedDate.toLocaleDateString() }}</h1>

            <article></article>
        </section>
        
    </main>
</template>

<style lang="css" scoped>
main {
    margin: 0;
    padding: 0;

    section {
        display: flex;
        flex-direction: column;

        margin: 1rem;
        /* padding: 1rem; */

        border: 1px solid var(--color-background-contrast);
        border-radius: 1rem;

        h1 {
            font-size: 2rem;
            font-weight: 800;
            color: var(--color-background);

            background: var(--color-background-contrast);

            padding: 1rem;

            border: 1px solid var(--color-background-contrast);
            border-radius: 0.95rem;
        }
    }
}
</style>