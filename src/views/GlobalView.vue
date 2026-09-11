<script setup lang="ts">
import { fetchJson } from '@/services/json'
import { ref, onMounted } from 'vue'
import { upperFirst, parseDate } from '@/services/string'

import type { ICours } from '../services/ICours'

const data = ref()
const schedule = ref<object[]>([])
const firstDate = ref()
const lastDate = ref()
const firstDay = ref<string>()
const lastDay = ref<string>()

onMounted(async () => {
  data.value = await fetchJson()

  const cours: ICours[] = data.value.cours

  cours.forEach((item) => {
    item.jours_cours.forEach((jour) => {
      if (!firstDate.value || parseDate(firstDate.value) > parseDate(jour.date_debut)) {
        firstDate.value = jour.date_debut
        firstDay.value = jour.jour
      }
      if (!lastDate.value || parseDate(lastDate.value) < parseDate(jour.date_fin)) {
        lastDate.value = jour.date_fin
        lastDay.value = jour.jour
      }
    })
  })

  // if (parseDate(firstDate.value).getDay() === 1) {
  //   console.log('Monday')
  // }

  // if (parseDate(lastDate.value).getDay() === 5) {
  //   console.log('Friday')
  // }
})

function setIterationDate(firstDate: string, lastDate: string): number {
  const date1 = parseDate(firstDate)
  const date2 = parseDate(lastDate)
  const diffTime = Math.abs(date2.getTime() - date1.getTime())
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24) / 7)
  console.log(diffDays)
  return diffDays
}

function setDateFromIteration(iteration: number): string {
  const date = new Date()
  date.setDate(parseDate(firstDate.value).getDate() + iteration * 7)
  if (!date || date === undefined) return ''
  const [year, month, day] = date.toISOString().split('T')[0].split('-')
  return day + '/' + month + '/' + year
}
</script>

<template>
  <main>
    <section>
      <table>
        <tr>
          <th v-for="day in setIterationDate(firstDate, lastDate)" :key="day">
            {{ setDateFromIteration(day) }}
          </th>
        </tr>
      </table>
    </section>
  </main>
</template>

<style lang="css" scoped>
section {
  width: 100%;
  overflow-x: scroll;
  table {
    margin: 1rem;

    border-collapse: collapse;
    width: 100%;
    border: 1px solid var(--color-curse-text-contrast);

    tr {
      th {
        padding: 0.5rem;
        border: 1px solid var(--color-curse-text-contrast);
      }
    }
  }
}
</style>
