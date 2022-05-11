import { Outlet } from "react-router-dom";
import Container from "../Design/Container/Container";
import Header from "./Header/Header";

const AppLayout = () => {
    return (
        <>
            <Header />
            <Container>
                <Outlet />
            </Container>
        </>
    );
};

export default AppLayout;
