<script setup lang="ts">
import { fetchJson } from '@/services/json';
import { ref, onMounted } from 'vue';

const data = ref({});

onMounted(async () =>{
    data.value = await fetchJson();
})

</script>

<template>
    <main>
        <h1>Global</h1>

    </main>
</template>

<style lang="css" scoped></style>