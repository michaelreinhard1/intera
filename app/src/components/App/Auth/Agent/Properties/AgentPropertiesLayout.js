import { useTranslation } from "react-i18next";
import { Outlet } from "react-router-dom";
import useTitle from "../../../../../core/hooks/useTitle";

const AgentPropertiesLayout = () => {
    const { t } = useTranslation();
    useTitle(t("properties.title"));

    return (
            <Outlet />
    );
};

export default AgentPropertiesLayout;
