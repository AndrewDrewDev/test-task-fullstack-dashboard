import {ErrorsBody} from "../types";

export interface ErrorsPercentagedData {
  code: number | null,
  count: number,
  percentage: number
}

export function getPercentage(data: ErrorsBody): ErrorsPercentagedData[] {
  const totalCount = data.reduce((acc, item) => {
    acc += item.count
    return acc
  }, 0)

  return data.map((item) => {
    const {count} = item
    const percentage = Math.ceil(100 * count / totalCount)
    return {...item, percentage}
  })
}