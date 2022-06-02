import useFetch from "../../../../../../core/hooks/useFetch";
import LoadingIndicator from "../../../../../Design/LoadingIndicator/LoadingIndicator";
import Error from "../../../../../Design/Alerts/Error";
import "../../../../NotFound/NotFound.css";
import { AdminRoutes, ApiRoutes, PropertyRoutes } from "../../../../../../core/routing";
import HeaderSpacer from "../../../../../Design/HeaderSpacer/HeaderSpacer";
import Container from "../../../../../Design/Container/Container";
import Table from "../../../../../Design/Table/Table";
import useTitle from "../../../../../../core/hooks/useTitle";
import { t } from "i18next";
import Button from "../../../../../Design/Button/Button";

const PropertiesOverviewScreen = () => {

    useTitle(t('properties.overview.title'));

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
            <div className="flex justify-end mb-5">
                    <Button href={PropertyRoutes.New} color={'primary'} className="text-sm font-medium text-gray-900 w-max flex justify-center items-center gap-2">
                        {t('properties.overview.create')}
                    </Button>
                </div>
                <Table
                items={data}
                edit={PropertyRoutes.Detail}
                />
            </Container>
        </>
    );
};

export default PropertiesOverviewScreen;
