import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import useMutation from "../../../../../../core/hooks/useMutation";
import useTitle from "../../../../../../core/hooks/useTitle";
import { AgencyRoutes, ApiRoutes } from "../../../../../../core/routing";
import Error from "../../../../../Design/Alerts/Error";
import Container from "../../../../../Design/Container/Container";
import HeaderSpacer from "../../../../../Design/HeaderSpacer/HeaderSpacer";
import AgencyForm from "../../../../Shared/Agencies/Form/AgencyForm";

const AgencyAdd = () => {
    const navigate = useNavigate();
    const { t } = useTranslation();
    useTitle(t("agencies.create.title"));

    const { isLoading, error, mutate} = useMutation();

    const handleSubmit = (data) => {
        mutate(`${process.env.REACT_APP_API_URL}${ApiRoutes.Agencies}`, {
            method: "POST",
            data,
            onSuccess: () => {
                navigate(AgencyRoutes.Index);
            },
        });
    };

    return (
        <>
        <HeaderSpacer />
        <Container>
            {/* <BackButton href={route(UserRoutes.Index)} /> */}
            <AgencyForm
                label={t("buttons.create")}
                disabled={isLoading}
                onSubmit={handleSubmit}
                />
            {error && <Error>{error}</Error>}
        </Container>
        </>
    );
};

export default AgencyAdd;
