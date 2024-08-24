import React from "react";
import { Container, Typography, Box } from "@mui/material";

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: "#1B262C",
        color: "#fff",
        padding: "1rem",
        textAlign: "center",
      }}
    >
      <Container>
        <Typography variant="body2" sx={{ padding: "5px", fontWeight: "500" }}>
          © 2024 All rights Reserved, Sagar's web cafè,
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
