import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import useMutation from "../../../../../../core/hooks/useMutation";
import useTitle from "../../../../../../core/hooks/useTitle";
import { ApiRoutes, PropertyRoutes } from "../../../../../../core/routing";
import Error from "../../../../../Design/Alerts/Error";
import Container from "../../../../../Design/Container/Container";
import HeaderSpacer from "../../../../../Design/HeaderSpacer/HeaderSpacer";
import PropertyForm from "../../../../Shared/Properties/Form/PropertyForm";

const PropertyAdd = () => {
    const navigate = useNavigate();
    const { t } = useTranslation();
    useTitle(t("properties.create.title"));

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
                label={t("buttons.create")}
                disabled={isLoading}
                onSubmit={handleSubmit}
                />
            {error && <Error message={error} />}
        </Container>
        </>
    );
};

export default PropertyAdd;
