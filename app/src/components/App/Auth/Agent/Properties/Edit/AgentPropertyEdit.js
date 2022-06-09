import { useTranslation } from "react-i18next";
import { useNavigate, useOutletContext } from "react-router-dom";
import useMutation from "../../../../../../core/hooks/useMutation";
import useTitle from "../../../../../../core/hooks/useTitle";
import { AgentRoutes, ApiRoutes, PropertyRoutes } from "../../../../../../core/routing";
import Error from "../../../../../Design/Alerts/Error";
import Container from "../../../../../Design/Container/Container";
import HeaderSpacer from "../../../../../Design/HeaderSpacer/HeaderSpacer";
import PropertyForm from "../../../../Shared/Properties/Form/PropertyForm";
import { useAuthContext } from "../../../AuthProvider";

const AgentPropertyEdit = () => {

    const navigate = useNavigate();

    const { t } = useTranslation();

    useTitle(t("properties.create.title"));

    const { property, auth, onPropertyUpdate } = useOutletContext();

    const { isLoading, error, mutate} = useMutation();

    const handleSubmit = (data) => {
        mutate(`${process.env.REACT_APP_API_URL}${ApiRoutes.PropertiesByAgency}${auth.user.id}/${property.id}`, {
            method: "PATCH",
            data,
            onSuccess: () => {
                onPropertyUpdate();
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
                label={t("buttons.save")}
                disabled={isLoading}
                onSubmit={handleSubmit}
                initialData={property}
                />
            {error && <Error>{error}</Error>}
        </Container>
        </>
    );
};

export default AgentPropertyEdit;
