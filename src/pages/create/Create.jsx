import React, {useState} from "react";
import "./Create.css";
import {Box, Button, InputAdornment, styled, TextField} from "@mui/material";
import {purple} from "@mui/material/colors";
import {ChevronRight} from "@mui/icons-material";
import {useNavigate} from "react-router-dom";


const ColorButton = styled(Button)(({theme}) => ({
    color: theme.palette.getContrastText(purple[500]),
    backgroundColor: theme.palette.moha.main,
    '&:hover': {
        backgroundColor: theme.palette.moha.main,
    },
}));

const Create = () => {
    const navigate = useNavigate();
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState(0);

    return (
        <Box autocomplete="off" sx={{width: "380px"}} component="form">
            <TextField
                fullWidth
                onChange={(e) => {
                    setTitle(e.target.value)
                }}
                label=" Title"
                sx={{m: "22px", display: "block"}}
                InputProps={{
                    startAdornment: <InputAdornment position="start"><ChevronRight/></InputAdornment>,
                }}
                variant="filled"
            />
            <TextField
                fullWidth
                onChange={(e) => {
                    setPrice(Number(e.target.value))
                }}
                label=" Amount"
                sx={{m: "22px", display: "block"}}
                InputProps={{
                    startAdornment: <InputAdornment position="start">$</InputAdornment>,
                }}
                variant="filled"
            />
            <ColorButton onClick={(params) => {
                fetch("http://127.0.0.1:8077/api/post", {
                    method: "POST",
                    headers: {
                        "Content-type": "application/json; charset=UTF-8"
                    },
                    body: JSON.stringify({title, 'details': price})
                }).then(() => {
                    navigate("/");
                });
            }} sx={{m: "22px"}} variant="contained">Submit <ChevronRight/></ColorButton>
        </Box>
    );
}

export default Create;