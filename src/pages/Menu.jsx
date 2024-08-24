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
  const [notificationMsg, setNotificationMsg] = useState(false);

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
          <Card key={menu.id} sx={{ maxWidth: 300, minHeight: 250 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                src={menu.image}
                sx={{
                  height: 300, // Adjust height as needed
                  objectFit: "cover", // Ensure images cover the container
                  width: "100%",
                }}
              />
              <CardContent
                sx={{ display: "flex", flexDirection: "column", gap: 1 }}
              >
                <Typography
                  sx={{ fontWeight: "bold" }}
                  variant="h5"
                  gutterBottom
                >
                  {menu.name}
                </Typography>
                <Typography variant="body2" sx={{ fontWeight: "bold" }}>
                  {menu.description}
                </Typography>
                <Button
                  onClick={() => setNotificationMsg(true)}
                  variant="outlined"
                  sx={{ mt: 1 }} // Add margin-top for spacing
                >
                  rs. {menu.price} /-
                </Button>
              </CardContent>
            </CardActionArea>
          </Card>
        ))}
      </Box>
      <Snackbar 
        open={notificationMsg} 
        autoHideDuration={3000} // Increased duration for better visibility
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right', // Adjust positioning if needed
        }}
      >
        <Alert onClose={handleClose} severity="success">
          Order placed
        </Alert>
      </Snackbar>
    </Layout>
  );
};

export default Menu;

 