import useFetch from "../../../../../core/hooks/useFetch";
import { AgencyRoutes, ApiRoutes } from "../../../../../core/routing";
import Select from "../../../../Design/Form/Select";
import LoadingIndicator from "../../../../Design/LoadingIndicator/LoadingIndicator";

const AgencySelect = (props) => {
    const { data: agencies, isLoading } = useFetch(ApiRoutes.Agencies);

    if (isLoading) {
        return <LoadingIndicator />;
    }

    console.log(agencies);

    const options = agencies
        ? agencies.map((c) => ({ value: c.id, label: c.name }))
        : null;

    return <Select options={options} {...props} />;
};

export default AgencySelect;