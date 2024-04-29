import { Request } from "express";

export interface AuthenticatedRequest extends Request {
    user?: { _id: string, email: string }
}

export interface UserPayload {
    _id: string;
    email: string;
}