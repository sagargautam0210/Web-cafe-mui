import React, { useState } from "react";
import Layout from "../components/layout/Layout";
import { MenuList } from "../data/Data";
import {
  Alert,
  Box,
  Button,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Snackbar,
  Typography,
} from "@mui/material";

const Menu = () => {
let[notificationMsg, setNotificationMsg] = useState(false);

const handleClose = (event, reason) => {
  if (reason === 'clickaway') {
    return;
  }
  setNotificationMsg(false);
};

  return (
    <Layout>
      <h2 className="menu-heading">What's on your mind?</h2>
      <Box
        sx={{
          m: 2,
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-evenly",
          gap: 3,
        }}
      >
        {MenuList.map((menu) => (
          <Card sx={{ maxWidth: "300px", minHeight: "250px" }}>
            <CardActionArea>
              <CardMedia
                sx={{ minHeight: "fit-content", backgroundSize: "cover" }}
                component={"img"}
                src={menu.image}
              />
              <CardContent
                sx={{ display: "flex", flexDirection: "column", gap: 1 }}
              >
                <Typography
                  sx={{ fontWeight: "bold" }}
                  variant="h5"
                  gutterBottom
                  component={"div"}
                >
                  {menu.name}
                </Typography>
                <Typography variant="p" sx={{ fontWeight: "bold" }}>
                  {menu.description}
                </Typography>
                <Button onClick={()=>setNotificationMsg(true)} variant="outlined">rs. {menu.price} /-</Button>
              </CardContent>
            </CardActionArea>
          </Card>
        ))}
      </Box>
      <Snackbar 
      open={notificationMsg} 
      autoHideDuration={1000}
      onClose={handleClose}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'left',
      }}
    >
      <Alert severity="success">Order placed</Alert>
    </Snackbar>
    </Layout>
  );
};

export default Menu;
