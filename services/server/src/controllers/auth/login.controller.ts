import { Request, Response } from "express";

export const loginController = (req: Request, res: Response) => {
    console.log(`yes here`);
    res.send({
        message: "ok fine"
    })
}