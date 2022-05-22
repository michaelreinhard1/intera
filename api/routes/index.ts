import { NextFunction, Request, Response, Router } from "express";
import NotFoundError from "../errors/NotFoundError";
import { authJwt, authLocal, withRole } from "../middleware/auth";
import ClientController from "../modules/Client/Client.controller";
import ProjectController from "../modules/Project/Project.controller";
import AuthController from "../modules/User/Auth.controller";
import UserController from "../modules/User/User.controller";
import PropertyController from "../modules/Property/Property.controller";
import { UserRole } from "../modules/User/User.constants";

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

    router.post("/login", authLocal, handleErrors(authController.login));
    router.post("/register", handleErrors(authController.register));

    router.post("/dev/property", propertyController.create);

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

    router.use(withRole(UserRole.Admin), adminRouter);
};

const guestRoutes = (router: Router) => {

    const propertyController = new PropertyController();
    router.get("/properties", handleErrors(propertyController.all));

    // if user is authenticated, return propertyController.allWithLocation on the same route

}

const registerAuthenticatedRoutes = (router: Router) => {
    const authRouter = Router();

    const clientController = new ClientController();
    authRouter.get("/clients", handleErrors(clientController.all));
    authRouter.get("/clients/:id", handleErrors(clientController.find));
    authRouter.post("/clients", handleErrors(clientController.create));
    authRouter.patch("/clients/:id", handleErrors(clientController.update));
    authRouter.delete("/clients/:id", handleErrors(clientController.delete));

    const projectController = new ProjectController();
    authRouter.get("/projects", handleErrors(projectController.all));
    authRouter.get("/projects/:id", handleErrors(projectController.find));
    authRouter.post("/projects", handleErrors(projectController.create));
    authRouter.patch("/projects/:id", handleErrors(projectController.update));
    authRouter.delete("/projects/:id", handleErrors(projectController.delete));

    const propertyController = new PropertyController();
    authRouter.get("/properties-with-location", handleErrors(propertyController.allWithLocation));

    registerAdminRoutes(authRouter);

    // authenticated routes use authJWT
    router.use(authJwt, authRouter);
};

const registerRoutes = (app: Router) => {


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