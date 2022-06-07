import { Outlet, useParams } from "react-router-dom";
import useFetch from "../../../../../../core/hooks/useFetch";
import { ApiRoutes } from "../../../../../../core/routing";
import Error from "../../../../../Design/Alerts/Error";
import LoadingIndicator from "../../../../../Design/LoadingIndicator/LoadingIndicator";

const PropertyEditLayout = () => {

    const { id } = useParams();

    const {
        isLoading,
        error,
        invalidate,
        data: property,
        // refresh,
    } = useFetch(`${ApiRoutes.Property}${id}`);

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

export default PropertyEditLayout;
