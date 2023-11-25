import React from "react";
import {AppBar, Avatar, Link, Toolbar, Typography} from "@mui/material";

const Appbar = ({drawerWidth}) => {
    return (
        <>
            <AppBar position="static" sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px` }}>
                <Toolbar>

                    <Link sx={{flexGrow: 1, "&:hover": {color: "red"}}} href="/" color="inherit" underline="none">My Expenses</Link>

                    <Typography variant="h6" component="div" mr={2} color="inherit">
                        Moha
                    </Typography>
                    <Avatar alt="Cindy Baker" src="https://mui.com/static/images/avatar/3.jpg"/>

                </Toolbar>
            </AppBar>

        </>
    );
}

export default Appbar;