// Types
import type { NextFunction, Request, Response } from "express";

// -----------------------------IMPORTS-----------------------------

export const catchAsync = (fn: any) => {
    return (req: Request, res: Response, next: NextFunction) => {
        Promise.resolve(fn(req, res, next)).catch(next);
    };
};
