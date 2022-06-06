import useFetch from "../../../../../../core/hooks/useFetch";
import LoadingIndicator from "../../../../../Design/LoadingIndicator/LoadingIndicator";
import Error from "../../../../../Design/Alerts/Error";
import "../../../../NotFound/NotFound.css";
import HeaderSpacer from "../../../../../Design/HeaderSpacer/HeaderSpacer";
import Container from "../../../../../Design/Container/Container";
import Table from "../../../../../Design/Table/Table";
import { AdminRoutes, AgencyRoutes, ApiRoutes, route } from "../../../../../../core/routing";
import * as MaterialDesign from "react-icons/md";
import { useTranslation } from "react-i18next";
import Button from "../../../../../Design/Button/Button";

const AgenciesOverviewScreen = () => {
    const { t } = useTranslation();
    const {  isLoading, data, error } = useFetch(ApiRoutes.Agencies);

    console.log(data);

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
        delete item.province;
        return item;
    }
    );

    return (
        <>
            <HeaderSpacer />
            <div className="w-4/5 mx-auto">
                <div className="flex justify-end mb-5">
                    <Button href={AgencyRoutes.New} color={'primary'} className="text-sm font-medium text-gray-900 w-max flex justify-center items-center gap-2">
                        {t('agencies.overview.create')}
                    </Button>
                </div>
                {
                    data.length === 0 ?
                    <div className="NotFound">
                        <h1>No agencies found</h1>
                    </div>
                    :
                    <>
                    <Table
                    items={dataForTable}
                    edit={AgencyRoutes.Detail}
                    />
                    </>
                }
            </div>
        </>
    );
};

export default AgenciesOverviewScreen;
