import ErrorHandler from "../error/ErrorHandler";
import {Request, Response, NextFunction} from "express";

const pageNotFoundMiddleware = (req: Request, res: Response, next: NextFunction) => {
  next(new ErrorHandler(404, 'Url not found!'))
}

export default pageNotFoundMiddleware