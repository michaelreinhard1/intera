import useFetch from "../../../../../../core/hooks/useFetch";
import LoadingIndicator from "../../../../../Design/LoadingIndicator/LoadingIndicator";
import Error from "../../../../../Design/Alerts/Error";
import "../../../../../Design/NotFound/NotFound.css";
import { ApiRoutes, PropertyRoutes } from "../../../../../../core/routing";
import HeaderSpacer from "../../../../../Design/HeaderSpacer/HeaderSpacer";
import Table from "../../../../../Design/Table/Table";
import useTitle from "../../../../../../core/hooks/useTitle";
import { useTranslation } from "react-i18next";
import Button from "../../../../../Design/Button/Button";
import { formatPrice } from "../../../../../../core/modules/properties/utils";
import { useAuthContext } from "../../../AuthProvider";

const AgentPropertiesOverviewScreen = () => {
    const { t } = useTranslation();
    useTitle(t('properties.overview.title'));
    const { auth } = useAuthContext();

    const {  isLoading, data, error } = useFetch(`${ApiRoutes.PropertiesByAgency}${auth.user.id}`);

    console.log(data);
    console.log(`${ApiRoutes.PropertiesByAgency}${auth.user.id}`);
    console.log(data);

    if (isLoading) {
        return <LoadingIndicator />
    }
    if (error) {
        return <Error message={error} />;
    }
    const dataForTable = data.map(item => {
        delete item.description;
        delete item.image;
        delete item.province;
        delete item.rooms;
        delete item.bathrooms;
        delete item.bedrooms;
        delete item.area;
        delete item.floor;
        item.price = formatPrice(item.price);
        return item;
    }
    );

    return (
        <>
            <HeaderSpacer />
            <div className="w-4/5 mx-auto">
                <div className="flex justify-end mb-5">
                    <Button
                        href={PropertyRoutes.New} color={'primary'} >
                            {t('properties.overview.create')}
                    </Button>
                </div>
                {/* if no data */}
                {dataForTable.length === 0 ?
                    <div className="flex justify-center items-center">
                        <div className="text-center text-gray-900 text-xl">
                            {t('properties.overview.no properties')}
                        </div>
                    </div>
                    :
                    <Table
                    items={dataForTable}
                    edit={PropertyRoutes.Detail}
                    />
                }
            </div>
        </>
    );
};

export default AgentPropertiesOverviewScreen;
