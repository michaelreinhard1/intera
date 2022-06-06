import { useTranslation } from "react-i18next";
import { Link, useOutletContext } from "react-router-dom";
import useTitle from "../../../../../../core/hooks/useTitle";
import { route, UserRoutes } from "../../../../../../core/routing";
import Container from "../../../../../Design/Container/Container";
import HeaderSpacer from "../../../../../Design/HeaderSpacer/HeaderSpacer";
import '../../../../NotFound/NotFound.css'
const UserDetailScreen = () => {
    const { t } = useTranslation();
    const { user } = useOutletContext();

    useTitle(user ? user.name : "");

    return (
        <>
            <HeaderSpacer />
            <Container>
                <Link to={route(UserRoutes.Edit, { id: user.id })}>
                    {t("buttons.edit")}
                </Link>
            </Container>
        </>
    );
};

export default UserDetailScreen;
