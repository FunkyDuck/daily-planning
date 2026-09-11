<script setup lang="ts"></script>

<template>
  <header>
    <nav>
      <RouterLink to="daily"><img src="../assets/Icon/hourglass-half-solid-full.svg" /></RouterLink>
      <RouterLink to="weekly"><img src="../assets/Icon/calendar-week-solid-full.svg" /></RouterLink>
      <RouterLink to="monthly"><img src="../assets/Icon/calendar-days-solid-full.svg" /></RouterLink>
      <RouterLink to="global"><img src="../assets/Icon/calendar-solid-full.svg" /></RouterLink>
      <RouterLink to="curse"><img src="../assets/Icon/book-bookmark-solid-full.svg" /></RouterLink>
      <!-- <RouterLink to="daily">Aujourd'hui</RouterLink> -->
      <!-- <RouterLink to="weekly">Semaine</RouterLink> -->
      <!-- <RouterLink to="monthly">Mois</RouterLink> -->
      <!-- <RouterLink to="global">Planning</RouterLink> -->
      <!-- <RouterLink to="curse">Cours</RouterLink> -->
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

        img {
          filter: invert(27.74%)
            sepia(32.13%)
            saturate(469.06%)
            hue-rotate(111.08deg)
            brightness(98.76%)
            contrast(117.85%);
        }
      }

      img {
        height: 4dvh;
        vertical-align: middle;

        filter: invert(53.90%)
          sepia(36.13%)
          saturate(97.55%)
          hue-rotate(70.98deg)
          brightness(240.21%)
          contrast(55.45%);
      }
    }
  }
}
</style>
