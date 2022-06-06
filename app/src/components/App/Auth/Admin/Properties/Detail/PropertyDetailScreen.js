import { useTranslation } from "react-i18next";
import { Link, useOutletContext } from "react-router-dom";
import useTitle from "../../../../../../core/hooks/useTitle";
import { PropertyRoutes, route } from "../../../../../../core/routing";
import '../../../../NotFound/NotFound.css'
import PropertyDetail from "../../../../Properties/Detail/PropertyDetail";
const PropertyDetailScreen = () => {
    const { t } = useTranslation();
    const { property } = useOutletContext();

    useTitle(property ? property.name : "");

    return (
        <>
            <PropertyDetail>

            </PropertyDetail>

        </>
    );
};

export default PropertyDetailScreen;
