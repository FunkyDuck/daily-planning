import { getDayString, parseDate } from './string'

export function getDaily(schedule: unknown, day: Date) {
  if (!schedule || !day) return

  console.log('Now holiday')
  const holiday = Array.from(schedule?.vacances).find((v) => {
    return parseDate(day) >= parseDate(v?.date_debut) && parseDate(day) <= parseDate(v?.date_fin)
  })

  if (holiday) {
    holiday['type'] = 'holiday'
    return holiday
  }
  console.log('Now ferie')
  const ferie = Array.from(schedule.feries).find((f) => {
    return parseDate(day).getTime() === parseDate(f?.date).getTime()
  })

  if (ferie) {
    ferie['type'] = 'ferie'
    return ferie
  }

  console.log('Now cours')
  const cours = Array.from(schedule.cours).find((c) => {
    let curse
    if (c.jours_cours) {
      curse = c.jours_cours.find((j) => {
        return (
          parseDate(day) >= parseDate(j.date_debut) &&
          parseDate(day) <= parseDate(j.date_fin) &&
          j.jour.toLowerCase() === getDayString(day).toLowerCase()
        )
      })
    }
    if (c.jours_supp) {
      curse += c.jours_supp.find((j) => {
        return parseDate(j.date).getTime() == parseDate(day).getTime()
      })
    }
    console.info('Curse')
    console.log(curse)
    return curse
  })

  if (cours) {
    cours['type'] = 'cours'
    return cours
  }

  return { nom: "Aucun cours aujourd'hui" }
}
