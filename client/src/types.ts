export enum TabsNamesEnum {
  errors_last_3_day,
  today,
  errors_yesterday,
  errors_last_hour,
}

type ErrorsBody =
  { count: number, code: null }
  | { count: number, code: number }[]

type AnalyticsDataBody = { [key: string]: number | null }[]

export interface Dataset {
  today: ErrorsBody,
  errors_last_3days: ErrorsBody,
  errors_yesterday: ErrorsBody,
  errors_last_hour: ErrorsBody,
  analytics_data: AnalyticsDataBody,
}
