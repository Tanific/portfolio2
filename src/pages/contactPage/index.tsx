import React from "react";
import { Typography, Container, Box } from "@mui/material";

const ContactPage: React.FC = () => {
  return (
    <Container maxWidth="lg">
      <Box sx={{ mt: { xs: "80px", md: "150px" }, mb: 8, textAlign: "center" }}>
        <Typography variant="h3" component="h1" gutterBottom>
          Get in touch!
        </Typography>
        <Typography variant="subtitle1" color="text.secondary" sx={{ mb: 6 }}>
          contact form coming soon
        </Typography>
      </Box>
    </Container>
  );
};

export default ContactPage;
