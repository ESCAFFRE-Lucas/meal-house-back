import {Request, Response, NextFunction} from 'express';

export const authMiddleware = async (req: Request, res: Response, next: NextFunction) => {
  console.log('authMiddleware');
  next();
}
