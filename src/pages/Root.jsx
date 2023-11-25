import React from "react";
import { Outlet } from "react-router-dom";
import {Typography, AppBar, Toolbar, Link, Avatar} from "@mui/material";

const Root = () => {
  return (
    <>

        <AppBar position="static">
            <Toolbar>


                <Link sx={{ flexGrow: 1, "&:hover" : { color: "red"}, }} href="/" color="inherit" underline="none">My Expenses</Link>

                <Typography variant="h6" component="div" mr={2} color="inherit">
                    Moha
                </Typography>
                <Avatar alt="Cindy Baker" src="https://mui.com/static/images/avatar/3.jpg" />

            </Toolbar>
        </AppBar>

      <Outlet />
    </>
  );
};

export default Root;
