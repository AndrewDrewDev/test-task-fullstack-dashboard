export enum TabsNamesEnum {
  errors_last_3_day,
  today,
  errors_yesterday,
  errors_last_hour,
}

export type ErrorsBody = { count: number; code: number | null }[]

type AnalyticsDataBody = { [key: string]: number | null }[]

export interface Dataset {
  errors_today: ErrorsBody
  errors_last_3days: ErrorsBody
  errors_yesterday: ErrorsBody
  errors_last_hour: ErrorsBody
  analytics_data: AnalyticsDataBody
}
