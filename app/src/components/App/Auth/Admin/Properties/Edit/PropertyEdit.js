import { useTranslation } from "react-i18next";
import { useNavigate, useOutletContext } from "react-router-dom";
import useMutation from "../../../../../../core/hooks/useMutation";
import useTitle from "../../../../../../core/hooks/useTitle";
import { ApiRoutes, PropertyRoutes } from "../../../../../../core/routing";
import Error from "../../../../../Design/Alerts/Error";
import Container from "../../../../../Design/Container/Container";
import HeaderSpacer from "../../../../../Design/HeaderSpacer/HeaderSpacer";
import PropertyForm from "../../../../Shared/Properties/Form/PropertyForm";

const PropertyEdit = () => {
    const navigate = useNavigate();

    const { t } = useTranslation();

    useTitle(t("properties.edit.title"));

    const { property } = useOutletContext();

    const { isLoading, error, mutate} = useMutation();

    const handleSubmit = (data) => {
        console.log(data);
        mutate(`${process.env.REACT_APP_API_URL}${ApiRoutes.Property}${property.id}`, {
            method: "PATCH",
            data,
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
            {error && <Error message={error} />}
        </Container>
        </>
    );
};

export default PropertyEdit;