import useFetch from "../../../../../core/hooks/useFetch";
import { ApiRoutes } from "../../../../../core/routing";
import Select from "../../../../Design/Form/Select";
import LoadingIndicator from "../../../../Design/LoadingIndicator/LoadingIndicator";

const AgencySelect = (props) => {
    const { data: agencies, isLoading } = useFetch(ApiRoutes.Agencies);

    if (isLoading) {
        return <LoadingIndicator />;
    }

    const options = agencies
        ? agencies.map((c) => ({ value: c.id, label: c.name }))
        : null;

    return <Select value={props.value} options={options} {...props} />;
};

export default AgencySelect;