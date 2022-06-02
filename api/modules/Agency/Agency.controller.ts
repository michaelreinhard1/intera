import { NextFunction, Request, Response } from "express";
import NotFoundError from "../../errors/NotFoundError";
import AgencyService from "./Agency.service";
import { AgencyBody } from "./Agency.types";

export default class AgencyController {
    private agencyService: AgencyService;

    constructor() {
        this.agencyService = new AgencyService();
    }

    all = async (req: Request, res: Response, next: NextFunction) => {
        const properties = await this.agencyService.all();
        return res.json(properties);
    };

    find = async (
        req: Request<{ id: string }>,
        res: Response,
        next: NextFunction
    ) => {
        const property = await this.agencyService.findOne(
            parseInt(req.params.id)
        );
        if (!property) {
            next(new NotFoundError());
        }
        return res.json(property);
    };

    create = async (
        req: Request<{}, {}, AgencyBody>,
        res: Response,
        next: NextFunction
    ) => {
        const property = await this.agencyService.create(req.body);
        return res.json(property);
    };

    update = async (
        req: Request<{ id: string }, {}, AgencyBody>,
        res: Response,
        next: NextFunction
    ) => {
        const property = await this.agencyService.update(
            parseInt(req.params.id),
            req.body
        );
        if (!property) {
            next(new NotFoundError());
        }
        return res.json(property);
    };

    delete = async (
        req: Request<{ id: string }>,
        res: Response,
        next: NextFunction
    ) => {
        const property = await this.agencyService.delete(parseInt(req.params.id));
        if (!property) {
            next(new NotFoundError());
        }
        return res.json({});
    };
}
