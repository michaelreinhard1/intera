import useFetch from "../../../../../../core/hooks/useFetch";
import LoadingIndicator from "../../../../../Design/LoadingIndicator/LoadingIndicator";
import Error from "../../../../../Design/Alerts/Error";
import "../../../../NotFound/NotFound.css";
import HeaderSpacer from "../../../../../Design/HeaderSpacer/HeaderSpacer";
import Container from "../../../../../Design/Container/Container";
import Table from "../../../../../Design/Table/Table";
import { AdminRoutes, ApiRoutes, route, UserRoutes } from "../../../../../../core/routing";
import * as MaterialDesign from "react-icons/md";
import Button from "../../../../../Design/Button/Button";
import { useTranslation } from "react-i18next";
import useTitle from "../../../../../../core/hooks/useTitle";

const UsersOverviewScreen = () => {
    const { t } = useTranslation();
    useTitle(t('users.overview.title'));

    const {  isLoading, data, error } = useFetch(ApiRoutes.Users);

    if (isLoading) {
        return <LoadingIndicator />
    }
    if (error) {
        return <Error message={error} />;
    }

    const dataForTable = data.map(item => {
        return item;
    }
    );


    return (
        <>
            <HeaderSpacer />
            <div className="w-4/5 mx-auto">
                <div className="flex justify-end mb-5">
                    <Button href={UserRoutes.New} color={'primary'} className="text-sm font-medium text-gray-900 w-max flex justify-center items-center gap-2">
                        {t('users.overview.create')}
                    </Button>
                </div>
                {
                    data.length === 0 ?
                    <div className="not-found">
                        <h1>No users found</h1>
                    </div>
                    :
                    <Table
                    items={dataForTable}
                    edit={UserRoutes.Detail}
                    />
                }
            </div>
        </>
    );
};

export default UsersOverviewScreen;
