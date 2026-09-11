import { parseDate } from "./string";

export function getDaily(schedule: unknown, day: Date) {
    if(!schedule || !day) return

    console.log(schedule)
    // const holidays: Array<Object> = schedule.vacances;
    const holiday = Array.from(schedule?.vacances).find(v => {
        return day >= parseDate(v?.date_debut) && day <= parseDate(v?.date_fin)
    })

    const ferie = Array.from(schedule.feries).find(f => {
        return day.toDateString().split('T')[0] == parseDate(f?.date).toDateString().split('T')[0]
    })
}