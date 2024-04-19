import { Request, Response } from "express";
import { generateAccessToken, generateRefreshToken } from "../../utils/jwt";
import { AuthenticatedRequest } from "../../utils/types";

export const signInWithGoogleSuccess = async (req: Request, res: Response) => {
    const authReq = req as AuthenticatedRequest;
    if (authReq.user && authReq.user._id) {
        const id = authReq.user._id as string;
        const email = authReq.user.email as string;
        const accessToken = generateAccessToken({
            _id: id, email: email
        });
        const refreshToken = generateRefreshToken({
            _id: id, email: email
        });
        res.cookie("access_token", accessToken, {
            httpOnly: true
        }).cookie("refresh_token", refreshToken, {
            httpOnly: true
        }).redirect(`${process.env.CLIENT_URL}`);
    } else {
        res.redirect(`${process.env.CLIENT_URL}login?error=${encodeURIComponent("Google Authentication Failed")}`);
    }
}