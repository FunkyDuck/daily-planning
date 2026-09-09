export function upperFirst(str: string): string {
  if (!str || typeof str !== 'string' || str.length === 0) return str
  return str.charAt(0).toUpperCase() + str.slice(1)
}

export function parseDate(date: string): Date {
  try {
    const [day, month, year] = date.split('/')
    return new Date(`${year}-${month}-${day}`)
  } catch {
    return new Date(date)
  }
}
