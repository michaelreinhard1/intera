import useFetch from "../../../../../../core/hooks/useFetch";
import LoadingIndicator from "../../../../../Design/LoadingIndicator/LoadingIndicator";
import Error from "../../../../../Design/Alerts/Error";
import "../../../../NotFound/NotFound.css";
import { AdminRoutes, ApiRoutes } from "../../../../../../core/routing";
import HeaderSpacer from "../../../../../Design/HeaderSpacer/HeaderSpacer";
import Container from "../../../../../Design/Container/Container";
import Table from "../../../../../Design/Table/Table";

const PropertiesOverviewScreen = () => {
    const {  isLoading, data, error } = useFetch(ApiRoutes.Properties);

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
                <Table
                items={data}
                edit={AdminRoutes.PropertyDetail}
                />
            </Container>
        </>
    );
};

export default PropertiesOverviewScreen;
