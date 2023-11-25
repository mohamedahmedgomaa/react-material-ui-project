import React from "react";
import {Outlet} from "react-router-dom";
import Appbar from "../MUI-components/Appbar";
import Drawerr from "../MUI-components/Drawerr";
const drawerWidth  = 240;

const Root = () => {
    return (
        <>
            <Appbar drawerWidth={drawerWidth}/>

            <Drawerr drawerWidth={drawerWidth}/>

            <Outlet/>
        </>
    );
};

export default Root;
