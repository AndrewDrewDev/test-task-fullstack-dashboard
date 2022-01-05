type ErrorDataBody = { count: number; code: number | null }[]

export interface Dataset {
  errors_last_3days: ErrorDataBody
  errors_yesterday: ErrorDataBody
  errors_last_hour: ErrorDataBody
  errors_today: ErrorDataBody
  data: { [key: string]: number | null }[]
}
