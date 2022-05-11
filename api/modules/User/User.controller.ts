import { NextFunction, Request, Response } from "express";
import NotFoundError from "../../errors/NotFoundError";
import { AuthRequest } from "../../middleware/auth/auth.types";
import UserService from "./User.service";

export default class UserController {
    private userService: UserService;

    constructor() {
        this.userService = new UserService();
    }

    all = async (req: AuthRequest, res: Response, next: NextFunction) => {
        // don't show password
        const users = await this.userService.all();
        return res.json(users);
    };

    find = async (
        req: AuthRequest<{ id: string }>,
        res: Response,
        next: NextFunction
    ) => {
        const user = await this.userService.findOneBy({ id: req.params.id });
        if (!user) {
            next(new NotFoundError());
        }
        return res.json(user);
    };

    create = async (req: AuthRequest, res: Response, next: NextFunction) => {
        const user = await this.userService.create(req.body);
        return res.json(user);
    };

    update = async (
        req: AuthRequest<{ id: string }>,
        res: Response,
        next: NextFunction
    ) => {
        const user = await this.userService.update(
            parseInt(req.params.id),
            req.body
        );
        if (!user) {
            next(new NotFoundError());
        }
        return res.json(user);
    };

    delete = async (
        req: AuthRequest<{ id: string }>,
        res: Response,
        next: NextFunction
    ) => {
        const user = await this.userService.delete(parseInt(req.params.id));
        if (!user) {
            next(new NotFoundError());
        }
        return res.json({});
    };
}
