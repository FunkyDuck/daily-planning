<script setup lang="ts">
import { fetchJson } from '@/services/json'
import { onMounted, ref } from 'vue'
import type { ICours } from '../services/ICours'
import { upperFirst } from '@/services/string'

const data = ref<ICours[]>([])

onMounted(async () => {
  const response = await fetchJson()
  data.value = response.cours
})
</script>

<template>
  <main>
    <article v-for="cours in data" :key="cours?.nom">
      <h2>{{ cours.nom }}</h2>
      <p>
        @{{ upperFirst(cours.ecole) }}
        <span v-if="cours.prof">- {{ upperFirst(cours.prof) }}</span>
      </p>
      <ul>
        <li v-for="jour in cours?.jours_cours" :key="jour?.jour">
          <div>
            <h3>{{ upperFirst(jour.jour) }}</h3>
            <b>{{ jour.date_debut }} ► {{ jour.date_fin }}</b>
            <i>{{ jour.heure_debut }} ► {{ jour.heure_fin }}</i>
          </div>
        </li>
        <li v-for="jour in cours?.Jours_supp" :key="jour?.date">
          {{ jour.date }}
          {{ jour.heure_debut }} ► {{ jour.heure_fin }}
        </li>
      </ul>
    </article>

    <!-- <article v-for="vacance in data" :key="vacance?.nom">
      <h2>{{ vacance.nom }}</h2>
      <p>{{ vacance.date_debut }} ► {{ vacance.date_fin }}</p>
    </article> -->
  </main>
</template>

<style lang="css" scoped>
article {
  margin: 1rem;
  padding: 0;
  /* padding: 1rem; */
  border: 1px solid var(--color-background-contrast);
  border-radius: 1rem;

  h2,
  p,
  ul {
    margin: 0;
    padding: 0.5rem;
  }

  h2 {
    padding: 1rem;
    /* border-bottom: 1px solid var(--color-background-contrast); */
    border-radius: 0.9rem;
    background: var(--color-background-contrast);

    font-size: 2rem;
    font-weight: 800;
    color: var(--color-curse-text);
  }


  ul {
    li {
      div {
        display: flex;
        flex-direction: column;
        justify-content: space-between;

        b,
        i,
        h3 {
          margin: 0;
          padding: 0;
        }

        h3 {
          font-size: 1.5rem;
          font-weight: 600;
        }

        b,
        i {
          margin: 0;
          padding: 0;
        }
      }
    }
  }

  /* &:first-child{
    background: var(--color-curse-1);
  }

  &:nth-child(2) h2{
    background: var(--color-curse-2);
  }

  &:nth-child(3) h2{
    background: var(--color-curse-3);
  }

  &:nth-child(4) h2{
    background: var(--color-curse-4);
  }

  &:nth-child(5) h2{
    background: var(--color-curse-5);
  }

  &:nth-child(6) h2{
    background: var(--color-curse-6);
  }

  &:nth-child(7) h2{
    background: var(--color-curse-7);
  }

  &:nth-child(8) h2{
    background: var(--color-curse-8);
  }

  &:nth-child(9) h2{
    background: var(--color-curse-9);
  } */
}


</style>
