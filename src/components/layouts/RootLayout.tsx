import { Outlet } from "react-router-dom";
import Navbar from "../navbar/navbar";
import "./Root.modules.scss";

const RootLayout = () => {
    return(
    <div className="root-layout">
        <main>             
            <Navbar/>
            <Outlet/>
        </main>
   
    </div>
)
};

export default RootLayout;