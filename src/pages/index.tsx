import React from "react";
import {
  Typography,
  Container,
  Box,
  Divider,
  Chip,
  Stack,
} from "@mui/material";
import SchoolIcon from "@mui/icons-material/School";
import CodeIcon from "@mui/icons-material/Code";
import WorkIcon from "@mui/icons-material/Work";
import BrushIcon from "@mui/icons-material/Brush";

const HomePage: React.FC = () => {
  const technologies = [
    "HTML",
    "CSS/SCSS",
    "JavaScript",
    "TypeScript",
    "React",
    "Material UI",
    "Bootstrap",
    "Redux",
    "Git",
    "REST API",
    "Wordpress",
  ];
  const designTools = [
    "Figma",
    "Adobe XD",
    "Adobe Photoshop",
    "Adobe Illustrator",
  ];

  return (
    <Container maxWidth="lg">
      <Box sx={{ mt: { xs: "80px", md: "70px" }, mb: 8 }}>
        {/* Introduction */}
        <Box sx={{ mb: 8 }}>
          <Typography variant="h2" component="h1">
            Hi, I'm Tonje
          </Typography>
          <Typography variant="h5" color="secondary.main" sx={{ mb: 4, mt: 1 }}>
            Front-end Developer | UI / UX Designer
          </Typography>
          <Typography
            variant="body1"
            sx={{ maxWidth: "800px", lineHeight: 1.8 }}
          >
            I'm 24 years old and based in Frøya, Norway. Fluent in English and
            Norwegian. I develop responsive web applications with clean code and
            thoughtful design, prioritizing accessibility through WCAG
            compliance and user experience.
          </Typography>
        </Box>
        {/* Education and Experience Section */}
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            gap: 6,
            mb: 8,
          }}
        >
          {/* Education */}
          <Box sx={{ flex: { xs: "1 1 100%", md: "1 1 calc(50% - 24px)" } }}>
            <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
              <SchoolIcon sx={{ mr: 1, color: "primary.main" }} />
              <Typography variant="h4" component="h2">
                Education
              </Typography>
            </Box>
            <Divider sx={{ mb: 3 }} />

            <Box sx={{ mb: 4 }}>
              <Typography variant="h6">
                Higher Professional Degree in Front-end Development
              </Typography>
              <Typography
                variant="subtitle1"
                color="primary"
                fontWeight="medium"
              >
                Noroff School of Technology and Digital Media
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
                2021 - 2025
              </Typography>
              <Typography variant="body1" sx={{ mt: 2 }}>
                Comprehensive education in modern front-end development focusing
                on responsive design, JavaScript frameworks, and industry best
                practices.
              </Typography>
            </Box>
          </Box>

          {/* Work Experience */}
          <Box sx={{ flex: { xs: "1 1 100%", md: "1 1 calc(50% - 24px)" } }}>
            <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
              <WorkIcon sx={{ mr: 1, color: "primary.main" }} />
              <Typography variant="h4" component="h2">
                Experience
              </Typography>
            </Box>
            <Divider sx={{ mb: 3 }} />

            <Box sx={{ mb: 4 }}>
              <Typography variant="h6">Service & IT Coordinator</Typography>
              <Typography
                variant="subtitle1"
                color="primary"
                fontWeight="medium"
              >
                Maxtrim AS
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
                2022 - Present
              </Typography>
              <Typography variant="body1" sx={{ mt: 2 }}>
                Responsible for the company's IT infrastructure and customer
                service. Created designs for marketing materials, employee
                uniforms and web displays.
              </Typography>
            </Box>
          </Box>
        </Box>

        {/* Skills Section - Technologies and Design Tools Side by Side */}
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            gap: 6,
            mt: 8,
          }}
        >
          {/* Technologies Column */}
          <Box sx={{ flex: { xs: "1 1 100%", md: "1 1 calc(50% - 24px)" } }}>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                mb: 2,
              }}
            >
              <CodeIcon sx={{ mr: 1, color: "secondary.main" }} />
              <Typography variant="h4" component="h2">
                Technologies
              </Typography>
            </Box>
            <Divider sx={{ mb: 3 }} />

            <Stack
              direction="row"
              sx={{
                flexWrap: "wrap",
                gap: 1,
                mt: 4,
              }}
            >
              {technologies.map((tech) => (
                <Chip
                  key={tech}
                  label={tech}
                  variant="outlined"
                  color="secondary"
                  sx={{
                    fontSize: "1rem",
                    py: 2.5,
                    borderRadius: 2,
                    margin: 0,
                  }}
                />
              ))}
            </Stack>
          </Box>

          {/* Design Tools Column */}
          <Box sx={{ flex: { xs: "1 1 100%", md: "1 1 calc(50% - 24px)" } }}>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                mb: 2,
              }}
            >
              <BrushIcon sx={{ mr: 1, color: "secondary.main" }} />
              <Typography variant="h4" component="h2">
                Design Tools
              </Typography>
            </Box>
            <Divider sx={{ mb: 3 }} />

            <Stack
              direction="row"
              sx={{
                flexWrap: "wrap",
                gap: 1,
                mt: 4,
                ml: 0,
              }}
            >
              {designTools.map((tool) => (
                <Chip
                  key={tool}
                  label={tool}
                  variant="outlined"
                  color="secondary"
                  sx={{
                    fontSize: "1rem",
                    py: 2.5,
                    borderRadius: 2,
                    margin: 0,
                  }}
                />
              ))}
            </Stack>
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

export default HomePage;
