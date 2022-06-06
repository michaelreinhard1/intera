import { Outlet, useParams } from "react-router-dom";
import useFetch from "../../../../../../core/hooks/useFetch";
import { ApiRoutes } from "../../../../../../core/routing";
import Error from "../../../../../Design/Alerts/Error";
import LoadingIndicator from "../../../../../Design/LoadingIndicator/LoadingIndicator";

const UserDetailLayout = () => {

    const { id } = useParams();

    const {
        isLoading,
        error,
        invalidate,
        data: user,
    } = useFetch(`${ApiRoutes.User}${id}`);

    const handleUpdate = () => {
        invalidate();
    };

    if (error) {
        return <Error>{error}</Error>;
    }

    if (isLoading) {
        return <LoadingIndicator />;
    }

    return <Outlet context={{ user, onUserUpdate: handleUpdate }} />;
};

export default UserDetailLayout;
