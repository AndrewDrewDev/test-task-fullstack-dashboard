import { NextFunction, Request, Response } from 'express'
import { dataset } from '../model/dataset'
import { ResponseHandler } from '../types'
import ErrorHandler from '../error/ErrorHandler'
import { ErrorHandle } from '../error/types'
import { Dataset } from '../model/types'

const getErrorTodayController = async (
  req: Request,
  res: Response,
  next: NextFunction
): ResponseHandler<Dataset['errors_today']> => {
  try {
    return res.status(200).json({
      code: 200,
      msg: 'Errors last hour received successfully!',
      data: dataset.errors_today,
    })
  } catch (e) {
    const error = e as ErrorHandle
    next(new ErrorHandler(500, error.message))
  }
}

export default getErrorTodayController
