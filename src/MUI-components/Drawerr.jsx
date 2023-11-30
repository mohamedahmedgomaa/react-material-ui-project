import React from "react";
import {
    Button,
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
import {useNavigate} from "react-router-dom";
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';

const Drawerr = ({drawerWidth, setMyMode}) => {
    const navigate = useNavigate();
    const theme = useTheme();

    return (
        <>
            <Drawer
                sx={{
                    width: `${drawerWidth}px`,
                    flexShrink: 0,
                    '& .MuiDrawer-paper': {
                        width: `${drawerWidth}px`,
                        boxSizing: 'border-box',
                    },
                }}
                variant="permanent"
                anchor="left"
            >


                <List>
                    <ListItem disablePadding sx={{ display: "flex", justifyContent: "center", mb: "14px" }}>
                        <IconButton onClick={() => {
                            localStorage.setItem("currentMode", theme.palette.mode === "light" ? "dark" : "light")
                            setMyMode(theme.palette.mode === "light" ? "dark" : "light")
                        }} color="inherit">
                            {theme.palette.mode === 'dark' ? <Brightness7Icon/> : <Brightness4Icon/>}
                        </IconButton>
                    </ListItem>

                    <Divider/>

                    <ListItem disablePadding>
                        <ListItemButton onClick={() => {
                            navigate("/")
                        }}>
                            <ListItemIcon>
                                <HomeIcon/>
                            </ListItemIcon>
                            <ListItemText primary="Home"/>
                        </ListItemButton>
                    </ListItem>

                    <ListItem disablePadding>
                        <ListItemButton onClick={() => {
                            navigate("/create")
                        }}>
                            <ListItemIcon>
                                <CreateIcon/>
                            </ListItemIcon>
                            <ListItemText primary="Create"/>
                        </ListItemButton>
                    </ListItem>


                    <ListItem disablePadding>
                        <ListItemButton onClick={() => {
                            navigate("/")
                        }}>
                            <ListItemIcon>
                                <PersonIcon/>
                            </ListItemIcon>
                            <ListItemText primary="Profile"/>
                        </ListItemButton>
                    </ListItem>

                    <ListItem disablePadding>
                        <ListItemButton onClick={() => {
                            navigate("/")
                        }}>
                            <ListItemIcon>
                                <SettingsIcon/>
                            </ListItemIcon>
                            <ListItemText primary="Settings"/>
                        </ListItemButton>
                    </ListItem>

                    <ListItem disablePadding>
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