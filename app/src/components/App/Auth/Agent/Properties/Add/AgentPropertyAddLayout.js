import { Outlet, useParams } from "react-router-dom";
import useFetch from "../../../../../../core/hooks/useFetch";
import { ApiRoutes } from "../../../../../../core/routing";
import Error from "../../../../../Design/Alerts/Error";
import LoadingIndicator from "../../../../../Design/LoadingIndicator/LoadingIndicator";
import { useAuthContext } from "../../../AuthProvider";

const AgentPropertyAddLayout = () => {

    const { auth } = useAuthContext();
    const {
        isLoading,
        error,
        invalidate,
        data: user,
        // refresh,
    } = useFetch(`${ApiRoutes.User}${auth.user.id}`);

    const handleUpdate = () => {
        invalidate();
    };

    if (error) {
        return <Error>{error}</Error>;
    }

    if (isLoading) {
        return <LoadingIndicator />;
    }

    return <Outlet context={{ user, onPropertyUpdate: handleUpdate }} />;
};

export default AgentPropertyAddLayout;
