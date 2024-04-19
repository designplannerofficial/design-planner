import { Request, Response } from "express";
export const signInWithGoogleFailed = async (req: Request, res: Response) => {
    res.redirect(`${process.env.CLIENT_URL}login?error=${encodeURIComponent("Google Authentication Failed")}`);
};