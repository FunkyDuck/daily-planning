<script setup lang="ts"></script>

<template>
  <header>
    <nav>
      <RouterLink to="daily">Aujourd'hui</RouterLink>
      <RouterLink to="weekly">Semaine</RouterLink>
      <RouterLink to="monthly">Mois</RouterLink>
      <RouterLink to="global">Planning</RouterLink>
      <RouterLink to="curse">Cours</RouterLink>
    </nav>
  </header>
</template>

<style lang="css" scoped>
header {
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 5dvh;
  background: var(--color-background-contrast);
  border-bottom: 1px solid var(--color-background-contrast);
  margin: 0;
  padding: 0;

  nav {
    display: flex;
    flex-direction: row;
    width: 100%;

    a {
      width: 100%;
      color: var(--color-text-contrast);

      text-align: center;
      text-decoration: none;

      vertical-align: middle;
      line-height: 5dvh;

      &:hover,
      &.router-link-active,
      &.router-link-exact-active {
        background: var(--color-text-contrast) !important;
        color: var(--color-background-contrast) !important;

        font-weight: bold;

        border-radius: 1rem 1rem 0 0;
      }
    }
  }
}
</style>
