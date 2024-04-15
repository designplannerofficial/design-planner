import { Request, Response } from "express";

export const registerController = (req: Request, res: Response) => {
    console.log(`yes here`);
    res.send({
        message: "ok fine"
    })
}