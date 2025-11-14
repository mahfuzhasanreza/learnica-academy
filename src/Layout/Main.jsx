import { Outlet, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Footer from "../Pages/Shared/Footer/Footer";
import NavBar from "../Pages/Shared/NavBar/NavBar";
import StickyCountdown from "../Pages/Shared/StickyCountdown/StickyCountdown";

const Main = () => {
    const location = useLocation();

    // Scroll to top on route change
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location.pathname]);

    return (
        <div>
            <StickyCountdown></StickyCountdown>
            <NavBar></NavBar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;