import { Outlet, useParams } from "react-router-dom";
import useFetch from "../../../../../../core/hooks/useFetch";
import { ApiRoutes } from "../../../../../../core/routing";
import Error from "../../../../../Design/Alerts/Error";
import LoadingIndicator from "../../../../../Design/LoadingIndicator/LoadingIndicator";
import { useAuthContext } from "../../../AuthProvider";

const AgentPropertyEditLayout = () => {

    const { id } = useParams();

    const { auth } = useAuthContext();
    const {
        isLoading,
        error,
        invalidate,
        data: property,
        // refresh,
    } = useFetch(`${ApiRoutes.PropertiesByAgency}${auth.user.id}/${id}`);

    const handleUpdate = () => {
        invalidate();
    };

    if (error) {
        return <Error>{error}</Error>;
    }

    if (isLoading) {
        return <LoadingIndicator />;
    }

    return <Outlet context={{ property, auth, onPropertyUpdate: handleUpdate }} />;
};

export default AgentPropertyEditLayout;
