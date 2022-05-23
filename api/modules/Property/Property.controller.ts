import { NextFunction, Request, Response } from "express";
import NotFoundError from "../../errors/NotFoundError";
import PropertyService from "./Property.service";
import { PropertyBody } from "./Property.types";

export default class PropertyController {
    private propertyService: PropertyService;

    constructor() {
        this.propertyService = new PropertyService();
    }

    all = async (req: Request, res: Response, next: NextFunction) => {
        const properties = await this.propertyService.all();
        return res.json(properties);
    };

    allRent = async (req: Request, res: Response, next: NextFunction) => {
        const properties = await this.propertyService.allRent();
        return res.json(properties);
    };

    allBuy = async (req: Request, res: Response, next: NextFunction) => {
        const properties = await this.propertyService.allBuy();
        return res.json(properties);
    };

    allWithLocation = async (req: Request, res: Response, next: NextFunction) => {
        const properties = await this.propertyService.allWithLocation();
        return res.json(properties);
    };

    allRentWithLocation = async (req: Request, res: Response, next: NextFunction) => {
        const properties = await this.propertyService.allRentWithLocation();
        return res.json(properties);
    };

    allBuyWithLocation = async (req: Request, res: Response, next: NextFunction) => {
        const properties = await this.propertyService.allBuyWithLocation();
        return res.json(properties);
    };

    find = async (
        req: Request<{ id: string }>,
        res: Response,
        next: NextFunction
    ) => {
        const property = await this.propertyService.findOne(
            parseInt(req.params.id)
        );
        if (!property) {
            next(new NotFoundError());
        }
        return res.json(property);
    };

    findWithLocation = async (
        req: Request<{ id: string }>,
        res: Response,
        next: NextFunction
    ) => {
        const property = await this.propertyService.findOneWithLocation(
            parseInt(req.params.id)
        );
        if (!property) {
            next(new NotFoundError());
        }
        return res.json(property);
    };

    create = async (
        req: Request<{}, {}, PropertyBody>,
        res: Response,
        next: NextFunction
    ) => {
        const property = await this.propertyService.create(req.body);
        return res.json(property);
    };

    update = async (
        req: Request<{ id: string }, {}, PropertyBody>,
        res: Response,
        next: NextFunction
    ) => {
        const property = await this.propertyService.update(
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
        const property = await this.propertyService.delete(parseInt(req.params.id));
        if (!property) {
            next(new NotFoundError());
        }
        return res.json({});
    };
}
