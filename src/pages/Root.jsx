import React, {useState} from "react";
import {Outlet} from "react-router-dom";
import Appbar from "../MUI-components/Appbar";
import Drawerr from "../MUI-components/Drawerr";
import {Box, CssBaseline} from "@mui/material";
import {ThemeProvider, createTheme} from '@mui/material/styles';
import {cyan, deepPurple,grey} from '@mui/material/colors';

const drawerWidth = 240;

const Root = () => {
    const [mode, setMode] = useState(
        localStorage.getItem("currentMode") === null ? "light"
            : localStorage.getItem("currentMode") === "light" ? "light" : "dark"
    );

    const darkTheme = createTheme({

        palette: {
            mode,
            ...(mode === 'light'
                ? {
                    moha: {
                        main: deepPurple[600],
                    },
                    favColor: {
                        main : grey[300]
                    }
                }
                : {
                    moha: {
                        main: cyan[700],
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

                <Drawerr setMode={setMode} drawerWidth={drawerWidth} noneORBlock={noneORBlock} drawerType={drawerType}/>
                <Box component="main"
                     sx={{ml: {sm: `${drawerWidth}px`}, display: "flex", justifyContent: "center", mt: "66px"}}>
                    <Outlet/>
                </Box>
            </ThemeProvider>
        </>
    );
};

export default Root;
