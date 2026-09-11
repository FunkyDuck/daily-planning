<script setup lang="ts">
import { RouterView } from 'vue-router'
import NavBar from './components/NavBar.vue'

</script>

<template>
  <NavBar />
  <RouterView />
</template>

<style scoped>
:root {
  display: flex;
  flex-direction: column;
  main {
    background: var(--color-background-soft);
    height: 90dvh;
    padding: 2.5dvh auto;
  }
}
</style>
