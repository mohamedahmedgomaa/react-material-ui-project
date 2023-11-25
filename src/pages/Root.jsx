import React from "react";
import { Outlet } from "react-router-dom";
import { Button, Typography, IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import MenuIcon from "@mui/icons-material/Menu";

const Root = () => {
  return (
    <>
      <Typography variant="h4" component="p">
        Mohamed Gomaa
      </Typography>
      <Button endIcon={<DeleteIcon />} variant="contained" color="primary">
        Button
      </Button>

      <IconButton size="large" color="info">
        <MenuIcon fontSize="large" />
      </IconButton>
      <Outlet />
    </>
  );
};

export default Root;
