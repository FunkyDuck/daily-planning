<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
import { onMounted } from 'vue'
import NavBar from './components/NavBar.vue'
import { fetchJson } from './services/json.ts'

let jsonData = {}

onMounted(async () => {
  jsonData = await fetchJson()

  console.log(jsonData)
})
</script>

<template>
  <!-- <header>
    <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />

    <div class="wrapper">
      <HelloWorld msg="You did it!" />

      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </div>
  </header> -->

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
