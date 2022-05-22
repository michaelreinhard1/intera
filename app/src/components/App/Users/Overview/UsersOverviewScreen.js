import useFetch from "../../../../core/hooks/useFetch";
import "../../NotFound/NotFound.css";

const UsersOverviewScreen = () => {
    const { isLoading, error } = useFetch("/users");

    if (isLoading) {
        // return <LoadingIndicator />;
    }
    if (error) {
        // return <Alert color="danger">{error}</Alert>;
    }

    return (
        <>
            <div className="NotFound">
        {/* Create a 404 error landing page */}
                <h1>Dashboard</h1>
            </div>
        </>
    );
};

export default UsersOverviewScreen;
