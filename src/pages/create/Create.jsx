import React from "react";
import "./Create.css";
import {Box, Button, InputAdornment, styled, TextField} from "@mui/material";
import {purple} from "@mui/material/colors";
import {ChevronRight} from "@mui/icons-material";


const ColorButton = styled(Button)(({ theme }) => ({
    color: theme.palette.getContrastText(purple[500]),
    backgroundColor: theme.palette.moha.main,
    '&:hover': {
        backgroundColor: theme.palette.moha.main,
    },
}));

const Create = () => {
    return (
        <Box  sx={{ width: "380px"}} component="form">
            <TextField
                fullWidth
                label="With normal TextField"
                sx={{m: "22px", display: "block"}}
                InputProps={{
                    startAdornment: <InputAdornment position="start"><ChevronRight /></InputAdornment>,
                }}
                variant="filled"
            />

            <TextField
                fullWidth
                label="With normal TextField"
                sx={{m: "22px", display: "block"}}
                InputProps={{
                    startAdornment: <InputAdornment position="start">$</InputAdornment>,
                }}
                variant="filled"
            />
            <ColorButton  sx={{m: "22px"}} variant="contained">Submit <ChevronRight /></ColorButton>
        </Box>
    );
}

export default Create;