import React from "react";
import {
    Divider,
    Drawer, IconButton,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    useTheme,
} from "@mui/material";
import HomeIcon from '@mui/icons-material/Home';
import CreateIcon from '@mui/icons-material/Create';
import LogoutIcon from '@mui/icons-material/Logout';
import SettingsIcon from '@mui/icons-material/Settings';
import PersonIcon from '@mui/icons-material/Person';
import {useLocation, useNavigate} from "react-router-dom";
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';

const Drawerr = ({drawerWidth, setMode, noneORBlock,drawerType}) => {
    const navigate = useNavigate();
    const theme = useTheme();
    const currentLocation = useLocation();

    const BGColor = (current) => {

        return currentLocation.pathname === current ? theme.palette.favColor.main : null

    }
    return (
        <>
            <Drawer
                sx={{
                    display: {xs: noneORBlock, sm: "block"},
                    // [theme.breakpoints.down('md')]: {
                    //     backgroundColor: theme.palette.secondary.main,
                    // },
                    // [theme.breakpoints.up('md')]: {
                    //     backgroundColor: theme.palette.secondary.main,
                    // },
                    width: `${drawerWidth}px`,
                    flexShrink: 0,
                    '& .MuiDrawer-paper': {
                        width: `${drawerWidth}px`,
                        boxSizing: 'border-box',
                    },
                }}
                variant={drawerType}
                anchor="left"
                open={true}
            >
                <List>
                    <ListItem disablePadding sx={{display: "flex", justifyContent: "center", mb: "14px"}}>
                        <IconButton onClick={() => {
                            localStorage.setItem("currentMode", theme.palette.mode === "light" ? "dark" : "light")
                            setMode(theme.palette.mode === "light" ? "dark" : "light")
                        }} color="inherit">
                            {theme.palette.mode === 'dark' ? <Brightness7Icon/> : <Brightness4Icon/>}
                        </IconButton>
                    </ListItem>

                    <Divider/>

                    <ListItem sx={{bgcolor: BGColor("/")}} disablePadding>
                        <ListItemButton onClick={() => {
                            navigate("/")
                        }}>
                            <ListItemIcon>
                                <HomeIcon/>
                            </ListItemIcon>
                            <ListItemText primary="Home"/>
                        </ListItemButton>
                    </ListItem>

                    <ListItem sx={{bgcolor: BGColor("/create")}} disablePadding>
                        <ListItemButton onClick={() => {
                            navigate("/create")
                        }}>
                            <ListItemIcon>
                                <CreateIcon/>
                            </ListItemIcon>
                            <ListItemText primary="Create"/>
                        </ListItemButton>
                    </ListItem>


                    <ListItem sx={{bgcolor: BGColor("/")}} disablePadding>
                        <ListItemButton onClick={() => {
                            navigate("/")
                        }}>
                            <ListItemIcon>
                                <PersonIcon/>
                            </ListItemIcon>
                            <ListItemText primary="Profile"/>
                        </ListItemButton>
                    </ListItem>

                    <ListItem sx={{bgcolor: BGColor("/")}} disablePadding>
                        <ListItemButton onClick={() => {
                            navigate("/")
                        }}>
                            <ListItemIcon>
                                <SettingsIcon/>
                            </ListItemIcon>
                            <ListItemText primary="Settings"/>
                        </ListItemButton>
                    </ListItem>

                    <ListItem sx={{bgcolor: BGColor("/")}} disablePadding>
                        <ListItemButton onClick={() => {
                            navigate("/")
                        }}>
                            <ListItemIcon>
                                <LogoutIcon/>
                            </ListItemIcon>
                            <ListItemText primary="Logout"/>
                        </ListItemButton>
                    </ListItem>

                </List>

            </Drawer>

        </>
    );
}

export default Drawerr;