import { NextFunction, Request, Response } from "express";
import { UPLOAD_FOLDER } from "../../constants";
import NotFoundError from "../../errors/NotFoundError";
import PropertyService from "./Property.service";
import { PropertyBody } from "./Property.types";
import { UploadedFile } from "express-fileupload";
import { AuthRequest } from "../../middleware/auth/auth.types";
import UserService from "../User/User.service";
import AgencyService from "../Agency/Agency.service";

const getImage = (req: Request) => {
    if (req.files.image) {
        const image: UploadedFile = Array.isArray(req.files.image)
            ? req.files.image[0]
            : req.files.image;
        const path = `${UPLOAD_FOLDER}/${new Date().getTime()}_${image.name}`;
        image.mv(path);
        return path;
    }
    return null;
};

export default class PropertyController {
    private propertyService: PropertyService;
    private userService: UserService;
    private agencyService: AgencyService;

    constructor() {
        this.propertyService = new PropertyService();
        this.userService = new UserService();
        this.agencyService = new AgencyService();
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

    allByAgency = async (req: Request<{ id: number }>, res: Response, next: NextFunction) => {
        const user = await this.userService.findOne(req.params.id);
        if (!user) {
            next(new NotFoundError());
            return;
        }
        const properties = await this.propertyService.allByAgency(user.agency.id);
        return res.json(properties);
    };

    findByAgency = async (req: Request<{ agencyId: number, propertyId: number }>, res: Response, next: NextFunction) => {
        const user = await this.userService.findOne(req.params.agencyId);
        if (!user) {
            next(new NotFoundError());
            return;
        }
        const property = await this.propertyService.findByAgency(user.agency.id, req.params.propertyId);
        return res.json(property);
    }

    updateByAgency = async (req: Request<{ agencyId: number, propertyId: number }>, res: Response, next: NextFunction) => {
        const user = await this.userService.findOne(req.params.agencyId);
        if (!user) {
            next(new NotFoundError());
            return;
        }
        const { body } = req;

        if (body.agencyId) {
            console.log(body.agencyId);

            body.agency = await this.agencyService.findOne(body.agencyId);
        }

        const property = await this.propertyService.updateByAgency(user.agency.id, req.params.propertyId, req.body);

        return res.json(property);
    }

    deleteByAgency = async (req: Request<{ agencyId: number, propertyId: number }>, res: Response, next: NextFunction) => {
        const user = await this.userService.findOne(req.params.agencyId);
        if (!user) {
            next(new NotFoundError());
            return;
        }
        const property = await this.propertyService.deleteByAgency(user.agency.id, req.params.propertyId);
        return res.json(property);
    }

    // createByAgency using agencyId from params and image
    createByAgency = async (req: Request<{ agencyId: number }>, res: Response, next: NextFunction) => {
        const user = await this.userService.findOne(req.params.agencyId);
        if (!user) {
            next(new NotFoundError());
            return;
        }

        const property: PropertyBody = {
            ...req.body,
            agency: user.agency,
            // image: getImage(req)
        };

        const newProperty = await this.propertyService.createByAgency(user.agency.id, property);

        return res.json(newProperty);
    }



    allWithLocation = async (req: AuthRequest, res: Response, next: NextFunction) => {
        const properties = await this.propertyService.allWithLocation();
        return res.json(properties);
    };

    allRentWithLocation = async (req: AuthRequest, res: Response, next: NextFunction) => {
        const properties = await this.propertyService.allRentWithLocation();
        return res.json(properties);
    };

    allBuyWithLocation = async (req: AuthRequest, res: Response, next: NextFunction) => {
        const properties = await this.propertyService.allBuyWithLocation();
        return res.json(properties);
    };

    find = async (
        req: AuthRequest<{ id: string }>,
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
        req: AuthRequest<{ id: string }>,
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
        next: NextFunction,
    ) => {
        const image = getImage(req);
        if (image) {
            req.body.image = image;
        }
        const property = await this.propertyService.create(req.body);
        return res.json(property);
    };

    update = async (
        req: AuthRequest<{ id: string }, {}, PropertyBody>,
        res: Response,
        next: NextFunction,
    ) => {
        // const image = getImage(req);
        // if (image) {
        //     req.body.image = image;
        // }
        const { body } = req;

        if (body.agencyId) {
            body.agency = await this.agencyService.findOne(body.agencyId);
        }

        const property = await this.propertyService.update(
            parseInt(req.params.id),
            req.body
        );
        if (!property) {
            next(new NotFoundError());
        }
        return res.json(property);
    };

    // updateByAgency = async (
    //     req: AuthRequest<{ id: string }, {}, PropertyBody>,
    //     res: Response,
    //     next: NextFunction,
    // ) => {
    //     const property = await this.propertyService.updateByAgency(
    //         parseInt(req.params.id),
    //         req.body
    //     );
    //     if (!property) {
    //         next(new NotFoundError());
    //     }
    //     return res.json(property);
    // }


    delete = async (
        req: AuthRequest<{ id: string }>,
        res: Response,
        next: NextFunction
    ) => {
        try {
            const property = await this.propertyService.delete(parseInt(req.params.id));
            if (!property) {
                next(new NotFoundError());
            }
            return res.json({});
        } catch (err) {
            next(err);
        }

    };
}
