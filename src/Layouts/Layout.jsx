import { Outlet } from "react-router";
import Navbar from "../pages/Others/Navbar";

const Layout = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
        </div>
    );
};

export default Layout;