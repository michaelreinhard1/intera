import { NextFunction, Request, Response, Router } from "express";
import NotFoundError from "../errors/NotFoundError";
import { authJwt, authLocal, withRole } from "../middleware/auth";
import AuthController from "../modules/User/Auth.controller";
import UserController from "../modules/User/User.controller";
import AgencyController from "../modules/Agency/Agency.controller";
import PropertyController from "../modules/Property/Property.controller";
import { UserRole } from "../modules/User/User.constants";
import * as express from "express";
import * as path from "path";

const handleErrors =
    (func: (req: any, res: Response, next: NextFunction) => Promise<any>) =>
    async (req: Request, res: Response, next: NextFunction) => {
        try {
            await func(req, res, next);
        } catch (err) {
            next(err);
        }
    };

const registerOnboardingRoutes = (router: Router) => {
    const authController = new AuthController();
    const userController = new UserController();
    const propertyController = new PropertyController();
    const agencyController = new AgencyController();

    router.post("/login", authLocal, handleErrors(authController.login));
    router.post("/register", handleErrors(authController.register));

    router.post("/dev/property", propertyController.create);
    router.post("/dev/agency", agencyController.create);

    // test route REMOVE after
    if (process.env.ENV === "development") {
        router.post("/dev/users", userController.create);
    }
};

const registerAdminRoutes = (router: Router) => {
    const adminRouter = Router();

    const userController = new UserController();
    adminRouter.get("/users", handleErrors(userController.all));
    adminRouter.get("/users/:id", handleErrors(userController.find));
    adminRouter.post("/users", handleErrors(userController.create));
    adminRouter.patch("/users/:id", handleErrors(userController.update));
    adminRouter.delete("/users/:id", handleErrors(userController.delete));

    const propertyController = new PropertyController();
    adminRouter.post("/properties", handleErrors(propertyController.create));

    const agencyController = new AgencyController();
    adminRouter.get("/agencies", handleErrors(agencyController.all));
    adminRouter.get("/agencies/:id", handleErrors(agencyController.find));
    adminRouter.post("/agencies", handleErrors(agencyController.create));
    adminRouter.patch("/agencies/:id", handleErrors(agencyController.update));

    router.use(withRole(UserRole.Admin), adminRouter);
};

const guestRoutes = (router: Router) => {

    const propertyController = new PropertyController();
    router.get("/properties", handleErrors(propertyController.all));
    router.get("/buy-properties", handleErrors(propertyController.allBuy));
    router.get("/rent-properties", handleErrors(propertyController.allRent));
    router.get("/properties/:id", handleErrors(propertyController.find));
}

const registerAuthenticatedRoutes = (router: Router) => {
    const authRouter = Router();

    const propertyController = new PropertyController();
    authRouter.get("/properties-with-location", handleErrors(propertyController.allWithLocation));
    authRouter.get("/buy-properties-with-location", handleErrors(propertyController.allBuyWithLocation));
    authRouter.get("/rent-properties-with-location", handleErrors(propertyController.allRentWithLocation));
    authRouter.get("/properties-with-location/:id", handleErrors(propertyController.findWithLocation));

    const userController = new UserController();
    authRouter.get("/users", handleErrors(userController.all));
    authRouter.get("/user/:id", handleErrors(userController.find));
    authRouter.patch("/user/:id", handleErrors(userController.update));

    registerAdminRoutes(authRouter);

    router.use(authJwt, authRouter);
};

const registerRoutes = (app: Router) => {

    app.use("/public", express.static(path.resolve(__dirname, "../public")));
    // onboarding routes (login, ...)
    registerOnboardingRoutes(app);

    guestRoutes(app);

    // authenticated routes (authentication required)
    registerAuthenticatedRoutes(app);


    // fallback route, return our own 404 instead of default
    app.use((req: Request, res: Response, next: NextFunction) => {
        next(new NotFoundError());
    });
};

export { registerRoutes };