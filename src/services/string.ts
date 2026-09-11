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

export function getDateFromDatetime(datetime: string | Date): Date {
  if(typeof datetime !== 'string')
    datetime = datetime.toISOString()
  const date = datetime.split('T')[0] ?? datetime
  return new Date(date)
}

export function getFormattedDateFromDatetime(datetime: string | Date): Date {
  if(typeof datetime !== 'string')
    datetime = datetime.toISOString()
  datetime = datetime.split('T')[0] ?? datetime
  const date = parseDate(datetime)
  return new Date(date)
}
