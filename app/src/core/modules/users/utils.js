import { UserRoles } from "./constants";

const formatName = (user) => {
    return `${user.name} ${user.surname}`;
};

const isAdmin = (user) => {
    return user.role === UserRoles.Admin;
};

const formatPrice = (price) => {
    return `€${price.toLocaleString("nl-NL")}`;
};

export { isAdmin, formatName, formatPrice };