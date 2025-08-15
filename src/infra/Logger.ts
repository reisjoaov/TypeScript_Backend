import express, {NextFunction, Request, Response} from "express";

export default function Logger (req: Request, res: Response, next: NextFunction){
    const timestamp = new Date().toISOString();
    console.log(`${timestamp} Chamada ao método: ${req.method} url: ${req.url} `);
    next();
};