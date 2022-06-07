import { useTranslation } from "react-i18next";
import { useNavigate, useOutletContext } from "react-router-dom";
import useMutation from "../../../../../../core/hooks/useMutation";
import useTitle from "../../../../../../core/hooks/useTitle";
import { ApiRoutes, PropertyRoutes } from "../../../../../../core/routing";
import Error from "../../../../../Design/Alerts/Error";
import Container from "../../../../../Design/Container/Container";
import HeaderSpacer from "../../../../../Design/HeaderSpacer/HeaderSpacer";
import PropertyForm from "../PropertyForm";

const PropertyEdit = () => {
    const navigate = useNavigate();
    const { t } = useTranslation();
    useTitle(t("properties.create.title"));
    const { property, onPropertyUpdate } = useOutletContext();

    const { isLoading, error, mutate} = useMutation();

    const handleSubmit = (data) => {
        mutate(`${process.env.REACT_APP_API_URL}${ApiRoutes.Properties}`, {
            method: "POST",
            data,
            multipart: true,
            onSuccess: () => {
                navigate(PropertyRoutes.Index);
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

export default PropertyEdit;
