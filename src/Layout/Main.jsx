import { Outlet } from "react-router-dom";
import Footer from "../Pages/Shared/Footer/Footer";
import NavBar from "../Pages/Shared/NavBar/NavBar";
import StickyCountdown from "../Pages/Shared/StickyCountdown/StickyCountdown";

const Main = () => {
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