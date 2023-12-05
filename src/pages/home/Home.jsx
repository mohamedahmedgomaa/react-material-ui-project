import React, {useEffect, useState} from "react";
import "./Home.css";
import {Box, IconButton, Paper, Typography} from "@mui/material";
import {Close} from "@mui/icons-material";

const Home = () => {
    const [myData, setMyData] = useState([])
    useEffect(() => {
        fetch("http://127.0.0.1:8077/api/post")
            .then((responce) => responce.json())
            .then((data) => setMyData(data.data));
    }, [myData]);

    return (
        <Box>
            {
                myData.map((item) => {
                    return (
                        <Paper key={item.id} sx={{
                            position: "relative",
                            width: "366px", display: "flex",
                            justifyContent: "space-between", mt: "22px", pt: "27px", pb: "7px"
                        }}>
                            <Typography variant="h6" sx={{ml: "16px", fontSize: "1.3em"}}>{item.title}</Typography>
                            <Typography variant="h6"
                                        sx={{
                                            mr: "33px",
                                            fontSize: "1.4em",
                                            fontWeight: 500,
                                            opacity: "0.8"
                                        }}>${item.details}</Typography>
                            <IconButton sx={{position: "absolute", top: "0", right: "0"}}>
                                <Close sx={{fontSize: "20px"}}/>
                            </IconButton>
                        </Paper>
                    );
                })
            }

        </Box>
    );
}

export default Home;