const ApiRoutes = {
    Login: '/login',
    Register: '/register',
    Properties: '/properties',
    BuyProperties : '/buy-properties',
    RentProperties : '/rent-properties',
    PropertiesWithLocation: '/properties-with-location',
    BuyPropertiesWithLocation: '/buy-properties-with-location',
    RentPropertiesWithLocation: '/rent-properties-with-location',
    Property: '/properties/',
    PropertyWithLocation: '/properties-with-location/',
    Users: '/users',
    User: '/user/',
    Agencies: '/agencies',
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
    Saved: "/saved",
    Contact: "/contact",
    About: "/about",
    Terms: "/terms",
    Privacy: "/privacy",
};


const AdminRoutes = {
    Index: "/admin",
    Properties: "/admin/properties",
    PropertyDetail: "/admin/property/:id",
    AddProperty: "/admin/property/add",
    Agencies: "/admin/agencies",
    AddAgency: "/admin/agency/add",
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

export { AuthRoutes, HomeRoutes, ProjectRoutes, UserRoutes, AdminRoutes, ApiRoutes , PropertyRoutes, AgencyRoutes};
