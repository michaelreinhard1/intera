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
        const agency = await this.agencyService.findOne(
            parseInt(req.params.id)
        );
        if (!agency) {
            next(new NotFoundError());
        }
        return res.json(agency);
    };

    create = async (
        req: Request<{}, {}, AgencyBody>,
        res: Response,
        next: NextFunction
    ) => {
        const agency = await this.agencyService.create(req.body);
        return res.json(agency);
    };

    update = async (
        req: Request<{ id: string }, {}, AgencyBody>,
        res: Response,
        next: NextFunction
    ) => {
        const agency = await this.agencyService.update(
            parseInt(req.params.id),
            req.body
        );
        if (!agency) {
            next(new NotFoundError());
        }
        return res.json(agency);
    };

    delete = async (
        req: Request<{ id: string }>,
        res: Response,
        next: NextFunction
    ) => {
        try {
            const agency = await this.agencyService.delete(parseInt(req.params.id));
            if (!agency) {
                next(new NotFoundError());
            }
            return res.json({});
        } catch (err) {
            next(err);
        }

    };
}
