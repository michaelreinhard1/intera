import { useTranslation } from "react-i18next";
import { Link, useOutletContext } from "react-router-dom";
import useTitle from "../../../../../../core/hooks/useTitle";
import { AgencyRoutes, PropertyRoutes, route } from "../../../../../../core/routing";
import Container from "../../../../../Design/Container/Container";
import HeaderSpacer from "../../../../../Design/HeaderSpacer/HeaderSpacer";
import '../../../../NotFound/NotFound.css'
import PropertyDetail from "../../../../Properties/Detail/PropertyDetail";
const AgencyDetailScreen = () => {
    const { t } = useTranslation();
    const { agency } = useOutletContext();

    useTitle(agency ? agency.name : "");

    return (
        <>
            <HeaderSpacer />
            <Container>
                <Link to={route(AgencyRoutes.Edit, { id: agency.id })}>
                    {t("buttons.edit")}
                </Link>
            </Container>
        </>
    );
};

export default AgencyDetailScreen;
