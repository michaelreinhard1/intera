import { Navigate } from "react-router-dom";
import { HomeRoutes } from "../../../core/routing";
import { useAuthContext } from "./AuthProvider";

const RoleContainer = ({ roles = [], children }) => {
    const {
        auth
    } = useAuthContext();


    if (!auth || !roles.includes(auth.user.role)) {
        return <Navigate to={HomeRoutes.Index} />;
    }

    return children;
};

export default RoleContainer;
