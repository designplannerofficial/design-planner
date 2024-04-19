import { Request, Response, NextFunction } from "express";
import { CustomError } from "../utils/errors";

export const ErrorHandler = (
    err: Error,
    req: Request,
    res: Response,
    next: NextFunction
) => {
    if (err instanceof CustomError) {
        return res.status(err.code).json({
            error: err.message
        });
    }
    res.status(400).json({
        message: 'Something went wrong'
    });
};