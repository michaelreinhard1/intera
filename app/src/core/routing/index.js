const ApiRoutes = {
    Login: '/login',
    Register: '/register',
    Properties: '/properties',
    Property: '/properties/',
    PropertyWithLocation: '/properties-with-location/',
    BuyProperties : '/buy-properties',
    RentProperties : '/rent-properties',
    PropertiesWithLocation: '/properties-with-location',
    BuyPropertiesWithLocation: '/buy-properties-with-location',
    RentPropertiesWithLocation: '/rent-properties-with-location',
    PropertiesByAgency: '/properties-by-agency/',
    Users: '/users',
    User: '/users/',
    Agencies: '/agencies',
    Agency: '/agencies/',
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
    Property: `/property/:id`,
    About: "/about",
    Terms: "/terms",
    Privacy: "/privacy",
};

const AdminRoutes = {
    Index: "/admin",
    Settings: "/admin/settings",
    Logout: "/logout",
    Notifications: "/admin/notifications",
    Messages: "/admin/messages"
};

const AgentRoutes = {
    Index: "/agent",
    Properties: "/agent/properties",
    Property: `/agent/properties/:id`,
    NewProperty: "/agent/properties/new",
    Agents: "/agent/agents",
    Logout: "/logout",
};

const UserRoutes = {
    Index: "/users",
    New: "/users/new",
    Detail: "/users/:id",
    Edit: "/users/:id/edit",
};

const ProjectRoutes = {
    Index: "/projects",
    New: "/projects/new",
    Detail: "/projects/:id",
    Edit: "/projects/:id/edit",
};

const PropertyRoutes = {
    Index: "/properties",
    New: "/properties/new",
    Detail: `/properties/:id`,
    Edit: `/properties/:id/edit`,
};

const AgencyRoutes = {
    Index: "/agencies",
    New: "/agencies/new",
    Detail: "/agencies/:id",
    Edit: "/agencies/:id/edit",
};

// replaces : values with values from object
// e.g. route('/projects/:id', { id : 9 }) -> /projects/9
export const route = (path, options = {}) => {
    Object.keys(options).forEach((key) => {
        path = path.replace(`:${key}`, options[key]);
    });
    return path;
};

export { AuthRoutes, HomeRoutes, ProjectRoutes, UserRoutes, AdminRoutes, ApiRoutes , PropertyRoutes, AgencyRoutes, AgentRoutes};
