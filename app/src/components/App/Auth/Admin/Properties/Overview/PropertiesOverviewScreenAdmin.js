import useFetch from "../../../../../../core/hooks/useFetch";
import LoadingIndicator from "../../../../../Design/LoadingIndicator/LoadingIndicator";
import Error from "../../../../../Design/Alerts/Error";
import "../../../../NotFound/NotFound.css";

const PropertiesOverviewScreen = () => {
    const { isLoading, error } = useFetch("/users");

    if (isLoading) {
        return <LoadingIndicator />
    }
    if (error) {
        return <Error message={error} />;
    }

    return (
        <>
            <div className="NotFound">
                <h1>Properties</h1>
            </div>
        </>
    );
};

export default PropertiesOverviewScreen;
