import useFetch from "../../../../../../core/hooks/useFetch";
import LoadingIndicator from "../../../../../Design/LoadingIndicator/LoadingIndicator";
import Error from "../../../../../Design/Alerts/Error";
import "../../../../NotFound/NotFound.css";
import HeaderSpacer from "../../../../../Design/HeaderSpacer/HeaderSpacer";
import Container from "../../../../../Design/Container/Container";
import Table from "../../../../../Design/Table/Table";
import { AdminRoutes, ApiRoutes, route } from "../../../../../../core/routing";
import * as MaterialDesign from "react-icons/md";

const UsersOverviewScreen = () => {

    const {  isLoading, data, error } = useFetch(ApiRoutes.Users);

    if (isLoading) {
        return <LoadingIndicator />
    }
    if (error) {
        return <Error message={error} />;
    }

    return (
        <>
            <HeaderSpacer />
            <Container>
                {
                    !data ?
                    <div className="not-found">
                        <h1>No users found</h1>
                    </div>
                    :
                    <Table
                    items={data}
                    edit={AdminRoutes.UserDetail}
                    />
                }
            </Container>
        </>
    );
};

export default UsersOverviewScreen;
