import { Outlet, useParams } from "react-router-dom";
import useFetch from "../../../../../../core/hooks/useFetch";
import { ApiRoutes } from "../../../../../../core/routing";
import Error from "../../../../../Design/Alerts/Error";
import LoadingIndicator from "../../../../../Design/LoadingIndicator/LoadingIndicator";

const AgencyEditLayout = () => {

    const { id } = useParams();

    const {
        isLoading,
        error,
        invalidate,
        data: agency,
        // refresh,
    } = useFetch(`${ApiRoutes.Agency}${id}`);

    const handleUpdate = () => {
        invalidate();
    };

    if (error) {
        return <Error>{error}</Error>;
    }

    if (isLoading) {
        return <LoadingIndicator />;
    }

    return <Outlet context={{ agency, onAgencyUpdate: handleUpdate }} />;
};

export default AgencyEditLayout;
