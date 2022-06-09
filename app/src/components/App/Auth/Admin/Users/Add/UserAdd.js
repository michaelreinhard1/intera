import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import useMutation from "../../../../../../core/hooks/useMutation";
import useTitle from "../../../../../../core/hooks/useTitle";
import { ApiRoutes, UserRoutes } from "../../../../../../core/routing";
import Error from "../../../../../Design/Alerts/Error";
import Container from "../../../../../Design/Container/Container";
import HeaderSpacer from "../../../../../Design/HeaderSpacer/HeaderSpacer";
import UserForm from "../../../../Shared/Users/Form/UserForm";

const UserAdd = () => {
    const navigate = useNavigate();
    const { t } = useTranslation();
    useTitle(t("users.create.title"));

    const { isLoading, error, mutate } = useMutation();

    const handleSubmit = (data) => {
        mutate(`${process.env.REACT_APP_API_URL}${ApiRoutes.Register}`, {
            method: "POST",
            data,
            onSuccess: () => {
                navigate(UserRoutes.Index);
            },
        });
    };

    return (
        <>
        <HeaderSpacer />
        <Container>
            {/* <BackButton href={route(UserRoutes.Index)} /> */}
            <UserForm
                label={t("buttons.create")}
                disabled={isLoading}
                onSubmit={handleSubmit}
                />
            {error && <Error message={error} />}
        </Container>
        </>
    );
};

export default UserAdd;
