export function upperFirst(str: string): string {
  if (!str || typeof str !== 'string' || str.length === 0) return str
  return str.charAt(0).toUpperCase() + str.slice(1)
}

export function parseDate(datetime: Date | string): Date {
  if (datetime instanceof Date)
    return new Date(datetime.getFullYear(), datetime.getMonth(), datetime.getDate())
  if (!datetime || datetime === undefined) return new Date()
  const date = datetime.split('T')[0]
  if (!date || date === undefined) return new Date()
  const [day, month, year] = date.split('/')
  return new Date(Number(year), Number(month) - 1, Number(day))
}

export function getDayString(date: Date): string {
  const days = ['Dimanche', 'Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi']
  return days[date.getDay()] ?? ''
}
