import { Outlet } from "react-router-dom";
import Header from "./Shared/Generic/Header/Header";

const AppLayout = () => {
    return (
        <>
            <Header />
            <Outlet />
        </>
    );
};

export default AppLayout;
