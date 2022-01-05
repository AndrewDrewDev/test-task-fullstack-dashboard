import { ErrorRequestHandler } from 'express'

const errorResponseHandler: ErrorRequestHandler = (err, req, res, next) => {
  let { code, msg } = err
  code = code || 500
  msg = msg || 'Internal Server Error server error!'

  res.status(code).json({
    error: true,
    code,
    msg,
  })

  next()
}

export default errorResponseHandler
