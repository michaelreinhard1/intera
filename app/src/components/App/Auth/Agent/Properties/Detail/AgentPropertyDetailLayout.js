import { Outlet, useParams } from "react-router-dom";
import { ApiRoutes } from "../../../../../../core/routing";
import useFetch from "../../../../../core/hooks/useFetch";
import Error from "../../../../../Design/Alerts/Error";
import LoadingIndicator from "../../../../../Design/LoadingIndicator/LoadingIndicator";

const AgentPropertyDetailLayout = () => {

    const { id } = useParams();

    const {
        isLoading,
        error,
        invalidate,
        data: property,
        // refresh,
    } = useFetch(`${ApiRoutes.Properties}${id}`);

    const handleUpdate = () => {
        invalidate();
    };

    if (error) {
        return <Error>{error}</Error>;
    }

    if (isLoading) {
        return <LoadingIndicator />;
    }

    return <Outlet context={{ property, onPropertyUpdate: handleUpdate }} />;
};

export default AgentPropertyDetailLayout;
