import { NextFunction, Request, Response } from 'express';

export const authController = async (req: Request, res: Response) => {
  res.send('Hello World from authController !');
}
