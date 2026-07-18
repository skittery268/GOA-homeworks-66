// Types
import type { NextFunction, Request, Response } from "express"

// Function to catch async errors
const catchAsync = (fn: any) => {
    return (req: Request, res: Response, next: NextFunction) => {
        fn(req, res, next).catch(next);
    };
};

export default catchAsync;