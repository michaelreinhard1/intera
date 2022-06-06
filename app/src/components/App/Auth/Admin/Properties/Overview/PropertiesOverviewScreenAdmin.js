import useFetch from "../../../../../../core/hooks/useFetch";
import LoadingIndicator from "../../../../../Design/LoadingIndicator/LoadingIndicator";
import Error from "../../../../../Design/Alerts/Error";
import "../../../../NotFound/NotFound.css";
import { AdminRoutes, ApiRoutes, PropertyRoutes } from "../../../../../../core/routing";
import HeaderSpacer from "../../../../../Design/HeaderSpacer/HeaderSpacer";
import Container from "../../../../../Design/Container/Container";
import Table from "../../../../../Design/Table/Table";
import useTitle from "../../../../../../core/hooks/useTitle";
import { useTranslation } from "react-i18next";
import Button from "../../../../../Design/Button/Button";

const PropertiesOverviewScreen = () => {
    const { t } = useTranslation();
    useTitle(t('properties.overview.title'));

    const {  isLoading, data, error } = useFetch(ApiRoutes.PropertiesWithLocation);


    if (isLoading) {
        return <LoadingIndicator />
    }
    if (error) {
        return <Error message={error} />;
    }
    const dataForTable = data.map(item => {
        delete item.id;
        delete item.description;
        delete item.image;
        delete item.rooms;
        delete item.bathrooms;
        delete item.bedrooms;
        delete item.area;
        delete item.floor;
        return item;
    }
    );

    return (
        <>
            <HeaderSpacer />
            <div className="w-4/5 mx-auto">

            <div className="flex justify-end mb-5">
                    <Button href={PropertyRoutes.New} color={'primary'} className="text-sm font-medium text-gray-900 w-max flex justify-center items-center gap-2">
                        {t('properties.overview.create')}
                    </Button>
                </div>
                <Table
                items={dataForTable}
                edit={PropertyRoutes.Detail}
                />
            </div>
        </>
    );
};

export default PropertiesOverviewScreen;
