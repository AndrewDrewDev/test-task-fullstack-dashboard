export interface ResponseBody<DataType> {
  error?: boolean,
  status: number,
  msg: string,
  data: DataType
}
