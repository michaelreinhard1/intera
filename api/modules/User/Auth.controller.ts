import { NextFunction, Response } from "express";
import { createToken } from "../../middleware/auth";
import { AuthRequest } from "../../middleware/auth/auth.types";
import UserController from "./User.controller";

export default class AuthController {
    login = async (req: AuthRequest, res: Response, next: NextFunction) => {
        const { user } = req;
        res.json({
            user,
            token: createToken(user),
        });
    };
}
