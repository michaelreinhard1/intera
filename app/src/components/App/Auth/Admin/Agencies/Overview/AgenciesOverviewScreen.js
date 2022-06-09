import useFetch from "../../../../../../core/hooks/useFetch";
import LoadingIndicator from "../../../../../Design/LoadingIndicator/LoadingIndicator";
import Error from "../../../../../Design/Alerts/Error";
import "../../../../../Design/NotFound/NotFound.css";
import HeaderSpacer from "../../../../../Design/HeaderSpacer/HeaderSpacer";
import { AgencyRoutes, ApiRoutes } from "../../../../../../core/routing";
import { useTranslation } from "react-i18next";
import Button from "../../../../../Design/Button/Button";
import Table from "../../../../Shared/Generic/Table/Table";

const AgenciesOverviewScreen = () => {
    const { t } = useTranslation();
    const {  isLoading, data, error, invalidate } = useFetch(ApiRoutes.Agencies);

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
        return item;
    }
    );
    const handleDelete = () => {
        invalidate();
    };
    return (
        <>
            <HeaderSpacer />
            <div className="w-4/5 mx-auto">
                <div className="flex justify-end mb-5">
                    <Button href={AgencyRoutes.New} color={'primary'}>
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
                    invalidate={handleDelete}
                    scope={ApiRoutes.Agencies}
                    />
                    </>
                }
            </div>
        </>
    );
};

export default AgenciesOverviewScreen;
