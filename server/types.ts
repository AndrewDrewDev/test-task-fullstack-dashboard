import {Response} from "express";

interface ResponseBody<DataType> {
  error?: boolean,
  status: number,
  msg: string,
  data: DataType
}

type ErrorResponse<DataType> = Omit<ResponseBody<DataType>, 'data'>

export type ResponseHandler<DataType> = Promise<Response<ResponseBody<DataType> | ErrorResponse<DataType>> | void>