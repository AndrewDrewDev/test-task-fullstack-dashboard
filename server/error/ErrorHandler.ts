type Code = string | number

class ErrorHandler extends Error {
  private code: Code
  private msg: any

  constructor(code: Code, msg: any) {
    super()
    this.code = code
    this.msg = msg
  }
}

export default ErrorHandler