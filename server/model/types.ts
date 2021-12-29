export interface Dataset {
  errors_last_3days: { count: number, code: number } | { count: number, code: null }[],
  errors_yesterday: { count: number, code: null } | { count: number, code: number }[],
  errors_last_hour: never[],
  data: {[key: string]: number | null}[]
}