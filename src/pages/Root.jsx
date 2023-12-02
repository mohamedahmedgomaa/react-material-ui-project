import React, {useState} from "react";
import {Outlet} from "react-router-dom";
import Appbar from "../MUI-components/Appbar";
import Drawerr from "../MUI-components/Drawerr";
import {Box, CssBaseline} from "@mui/material";
import {ThemeProvider, createTheme} from '@mui/material/styles';
import {grey} from '@mui/material/colors';

const drawerWidth = 240;

const Root = () => {
    const [myMode, setMyMode] = useState(
        localStorage.getItem("currentMode") === null ? "light"
        : localStorage.getItem("currentMode") === "light" ? "light" : "dark"
    );

    const darkTheme = createTheme({
        palette: {
            mode: myMode,
            ...(myMode === "light" ?
                {
                    moha: {
                        main: '#E3D026',
                        light: '#E9DB5D',
                        dark: '#A29415',
                        contrastText: '#242105',
                    },
                    favColor: {
                        main : grey[300]
                    }
                } : {
                    moha: {
                        main: '#E3D026',
                        light: '#E9DB5D',
                        dark: '#A29415',
                        contrastText: '#242105',
                    },
                    favColor: {
                        main : grey[800]
                    }
                }),

        },
    });

    const [noneORBlock, setNoneORBlock] = useState("none");
    const [drawerType, setDrawerType] = useState("permanent"); // permanent , temporary

    return (
        <>
            <ThemeProvider theme={darkTheme}>
                <CssBaseline/>
                <Appbar drawerWidth={drawerWidth} setNoneORBlock={setNoneORBlock} setDrawerType={setDrawerType}/>

                <Drawerr setMyMode={setMyMode} drawerWidth={drawerWidth} noneORBlock={noneORBlock} drawerType={drawerType}/>
                <Box component="main"
                     sx={{ml: {sm: `${drawerWidth}px`}, display: "flex", justifyContent: "center", mt: "66px"}}>
                    <Outlet/>
                </Box>
            </ThemeProvider>
        </>
    );
};

export default Root;
