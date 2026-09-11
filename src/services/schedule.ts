import { parseDate, getDateFromDatetime, getFormattedDateFromDatetime } from './string'

export function getDaily(schedule: unknown, day: Date) {
  if (!schedule || !day) return

  console.log(schedule)
  console.log(day)
  console.log('Now holiday')
  const holiday = Array.from(schedule?.vacances).find((v) => {
    return (
      getDateFromDatetime(day).toString() >= parseDate(v?.date_debut).toString() &&
      getDateFromDatetime(day).toString() <= parseDate(v?.date_fin).toString()
    )
  })

  if (holiday) {
    holiday['type'] = 'holiday'
    return holiday
  }
  console.log('Now ferie')
  const ferie = Array.from(schedule.feries).find((f) => {
    return getDateFromDatetime(day).toString() == getFormattedDateFromDatetime(f?.date).toString()
  })

  if (ferie) {
    ferie['type'] = 'ferie'
    return ferie
  }

  console.log('Now cours')
  const cours = Array.from(schedule.cours).find((c) => {
    return (
      getDateFromDatetime(day).toString() >= parseDate(c?.date_debut).toString() &&
      getDateFromDatetime(day).toString() <= parseDate(c?.date_fin).toString()
    )
  })

  if (cours) {
    cours['type'] = 'cours'
    return cours
  }
}
