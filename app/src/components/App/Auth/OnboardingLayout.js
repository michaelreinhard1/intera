import { Navigate, Outlet, useLocation } from "react-router-dom";
import AuthBackground from "../AuthBackground/AuthBackground";
import { useAuthContext } from "./AuthProvider";

const OnboardingLayout = () => {
    const { auth } = useAuthContext();
    const location = useLocation();

    if (!auth) {
        return (
            <AuthBackground>
                <Outlet />
            </AuthBackground>
        );
    }

    // check if a previous path was available
    const from = location.state?.from?.pathname || "/";

    return <Navigate to={from} state={{ replace: true }} />;
};

export default OnboardingLayout;