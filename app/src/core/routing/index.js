const ApiRoutes = {
    Login: '/login',
    Register: '/register',
    Properties: '/properties',
    PropertiesWithLocation: '/properties-with-location',
}

const AuthRoutes = {
    Index: '/account',
    Register: "/account/register",
    Login: "/account/login",
    Profile: "/profile",
    ForgotPassword: "/forgot-password",
    Logout: "/logout",
};

const HomeRoutes = {
    Index: "/",
    Buy: "/buy",
    Rent: "/rent",
    Sell: "/sell",
    Saved: "/saved",
    Contact: "/contact",
    About: "/about",
    Terms: "/terms",
    Privacy: "/privacy",
};

const AdminRoutes = {
    Index: "/admin",
    Users: "/admin/users",
    Properties: "/admin/properties",
    Agents: "/admin/agents",
    Settings: "/admin/settings",
    Logout: "/logout",
    Notifications: "/admin/notifications",
    Messages: "/admin/messages"
};

const ProjectRoutes = {
    Index: "/projects",
    New: "/projects/new",
    Detail: "/projects/:id",
    Edit: "/projects/:id/edit",
};

const UserRoutes = {
    Index: "/users",
    New: "/users/new",
    Detail: "/users/:id",
    Edit: "/users/:id/edit",
};

// replaces : values with values from object
// e.g. route('/projects/:id', { id : 9 }) -> /projects/9
export const route = (path, options = {}) => {
    Object.keys(options).forEach((key) => {
        path = path.replace(`:${key}`, options[key]);
    });
    return path;
};

export { AuthRoutes, HomeRoutes, ProjectRoutes, UserRoutes, AdminRoutes, ApiRoutes };
