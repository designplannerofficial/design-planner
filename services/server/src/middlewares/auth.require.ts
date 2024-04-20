import { Request, Response, NextFunction } from "express";
import { generateAccessToken, verifyToken } from "../utils/jwt";
import { UnAuthorizedError } from "../utils/errors";

export interface UserPayload {
    _id: string;
    email: string;
}

export const RequireAuth = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {

    try {
        const { access_token, refresh_token } = req.cookies;

        if (!access_token && !refresh_token) {
            throw new UnAuthorizedError();
        }

        let user;

        if (access_token) {
            user = await verifyToken(
                access_token,
                String(process.env.ACCESS_TOKEN_SECRET)
            );
        }

        if (!user && refresh_token) {
            user = await verifyToken(
                refresh_token,
                String(process.env.REFRESH_TOKEN_SECRET)
            );
            if (user) {
                const newAccessToken = generateAccessToken(user);
                res.cookie("access_token", newAccessToken, {
                    httpOnly: true,
                });
            }
        }

        req.user = user!;
        if (!req.user) {
            throw new UnAuthorizedError();
        }
        next();
    } catch (error) {
        next(error);
    }
}