import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import useMutation from "../../../../../../core/hooks/useMutation";
import useTitle from "../../../../../../core/hooks/useTitle";
import { AgentRoutes, ApiRoutes } from "../../../../../../core/routing";
import Error from "../../../../../Design/Alerts/Error";
import Container from "../../../../../Design/Container/Container";
import HeaderSpacer from "../../../../../Design/HeaderSpacer/HeaderSpacer";
import PropertyForm from "../../../../Shared/Properties/Form/PropertyForm";
import { useAuthContext } from "../../../AuthProvider";

const AgentPropertyAdd = () => {
    const navigate = useNavigate();
    const { t } = useTranslation();
    useTitle(t("properties.create.title"));

    const { isLoading, error, mutate} = useMutation();

    const { auth } = useAuthContext();

    const handleSubmit = (data) => {
        data.userId = auth.user.id;
        mutate(`${process.env.REACT_APP_API_URL}${ApiRoutes.PropertiesByAgency}`, {
            method: "POST",
            data,
            multipart: true,
            onSuccess: () => {
                navigate(AgentRoutes.Properties);
            },
        });
    };

    return (
        <>
        <HeaderSpacer />
        <Container>
            {/* <BackButton href={route(UserRoutes.Index)} /> */}
            <PropertyForm
                label={t("buttons.create")}
                disabled={isLoading}
                onSubmit={handleSubmit}
                initialData={{agencyId: auth.user.id}}
                />
            {error && <Error>{error}</Error>}
        </Container>
        </>
    );
};

export default AgentPropertyAdd;