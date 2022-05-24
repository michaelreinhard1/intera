import useFetch from "../../../../../../core/hooks/useFetch";
import LoadingIndicator from "../../../../../Design/LoadingIndicator/LoadingIndicator";
import Error from "../../../../../Design/Alerts/Error";
import "../../../../NotFound/NotFound.css";
import HeaderSpacer from "../../../../../Design/HeaderSpacer/HeaderSpacer";
import Container from "../../../../../Design/Container/Container";
import Table from "../../../../../Design/Table/Table";
import { ApiRoutes } from "../../../../../../core/routing";

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
                <h1>Users</h1>
                <Table
                items={data}
                />
            </Container>
        </>
    );
};

export default UsersOverviewScreen;
