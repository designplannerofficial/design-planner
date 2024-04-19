import jwt from "jsonwebtoken";
interface UserPayload {
    _id: string;
    email: string;
}
export const verifyToken = (token: string, secret: string): Promise<UserPayload | null> => {
    return new Promise((resolve, reject) => {
        jwt.verify(token, secret, (err, decoded) => {
            if (err) {
                reject(err);
            } else {
                resolve(decoded as UserPayload);
            }
        });
    });
};