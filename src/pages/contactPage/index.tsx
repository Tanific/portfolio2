import React from "react";
import {
  Typography,
  Container,
  Box,
  Link,
  Divider,
  Stack,
} from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";

const ContactPage: React.FC = () => {
  return (
    <Container maxWidth="lg">
      <Box sx={{ mt: { xs: "80px", md: "150px" }, mb: 8 }}>
        <Box sx={{ textAlign: "center", mb: 6 }}>
          <Typography variant="h3" component="h1" gutterBottom>
            Get in touch!
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" sx={{ mb: 4 }}>
            Feel free to reach out through any of these platforms
          </Typography>
        </Box>

        <Box
          sx={{
            maxWidth: "600px",
            mx: "auto",
            p: 4,
            borderRadius: 2,
            bgcolor: "background.paper",
            boxShadow: 1,
          }}
        >
          <Box sx={{ mb: 4 }}>
            <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
              <LinkedInIcon sx={{ mr: 2, color: "primary.main" }} />
              <Typography variant="h6">LinkedIn</Typography>
            </Box>
            <Divider sx={{ mb: 2 }} />
            <Link
              href="https://linkedin.com/in/tonje-stensen"
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                display: "block",
                color: "text.secondary",
                textDecoration: "none",
                "&:hover": {
                  textDecoration: "underline",
                },
              }}
            >
              linkedin.com/in/tonje-stensen
            </Link>
          </Box>

          <Box>
            <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
              <EmailIcon sx={{ mr: 2, color: "primary.main" }} />
              <Typography variant="h6">Email</Typography>
            </Box>
            <Divider sx={{ mb: 2 }} />
            <Link
              href="mailto:stensentonje@gmail.com"
              sx={{
                display: "block",
                color: "text.secondary",
                textDecoration: "none",
                "&:hover": {
                  textDecoration: "underline",
                },
              }}
            >
              stensentonje@gmail.com
            </Link>
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

export default ContactPage;
