import { AccountContext } from "./AccountContext";
import React, { useContext } from "react";
import Home from "../pages/Home";
const { Outlet } = require("react-router-dom");

const useAuth = () => {
    const {user} = useContext(AccountContext)
    return user && user.loggedIn;
}

const PrivateRoutes = () => {
    const isAuth = useAuth();
    return isAuth ? <Outlet/> : <Home />

};

export default PrivateRoutes;