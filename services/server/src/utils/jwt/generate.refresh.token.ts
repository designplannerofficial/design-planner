import jwt from "jsonwebtoken";

export const generateRefreshToken = (
    payload: {
        _id: string,
        email: string
    }
) => {
    return jwt.sign(
        payload,
        String(process.env.REFRESH_TOKEN_SECRET),
        { expiresIn: '30d' }
    );
};