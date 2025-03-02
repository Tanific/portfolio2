import React from "react";
import {
  Typography,
  Container,
  Box,
  Divider,
  Stack,
  Tooltip,
} from "@mui/material";
import SchoolIcon from "@mui/icons-material/School";
import CodeIcon from "@mui/icons-material/Code";
import WorkIcon from "@mui/icons-material/Work";
import BrushIcon from "@mui/icons-material/Brush";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiBootstrap,
  SiRedux,
  SiMui,
  SiGit,
  SiWordpress,
  SiFigma,
  SiAdobexd,
  SiAdobephotoshop,
  SiAdobeillustrator,
} from "react-icons/si";

const HomePage: React.FC = () => {
const iconSize = 33;

  const technologies = [
    { name: "HTML5", icon: <SiHtml5 size={iconSize} color="#E34F26" /> },
    { name: "CSS3", icon: <SiCss3 size={iconSize} color="#1572B6" /> },
    { name: "JavaScript", icon: <SiJavascript size={iconSize} color="#F7DF1E" /> },
    { name: "TypeScript", icon: <SiTypescript size={iconSize} color="#3178C6" /> },
    { name: "React", icon: <SiReact size={iconSize} color="#61DAFB" /> },
    { name: "Material UI", icon: <SiMui size={iconSize} color="#0081CB" /> },
    { name: "Bootstrap", icon: <SiBootstrap size={iconSize} color="#7952B3" /> },
    { name: "Redux", icon: <SiRedux size={iconSize} color="#764ABC" /> },
    { name: "Git", icon: <SiGit size={iconSize} color="#F05032" /> },
    { name: "WordPress", icon: <SiWordpress size={iconSize} color="#21759B" /> },
  ];

  const designTools = [
    { name: "Figma", icon: <SiFigma size={iconSize} color="#F24E1E" /> },
    { name: "Adobe XD", icon: <SiAdobexd size={iconSize} color="#FF61F6" /> },
    { name: "Adobe Photoshop", icon: <SiAdobephotoshop size={iconSize} color="#31A8FF" /> },
    { name: "Adobe Illustrator", icon: <SiAdobeillustrator size={iconSize} color="#FF9A00" /> },
  ];

  return (
    <Container maxWidth="lg">
      <Box sx={{ mt: { xs: "80px", md: "70px" }, mb: 8 }}>
        {/* Introduction */}
        <Box sx={{ mb: 8 }}>
          <Typography variant="h2" component="h1">
            Hi, I'm Tonje
          </Typography>
          <Typography variant="h5" color="text.secondary" sx={{ mb: 2, mt: 1 }}>
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
        {/* Education and Experience */}
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            gap: 6,
            mb: 6,
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

        {/* Skills Section - Technologies and Design*/}
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            gap: 6,
            mt: 6,
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
              <CodeIcon sx={{ mr: 1, color: "primary.main" }} />
              <Typography variant="h4" component="h2">
                Technologies
              </Typography>
            </Box>
            <Divider sx={{ mb: 3 }} />

            <Stack
              direction="row"
              sx={{
                flexWrap: "wrap",
                gap: 3,
                mt: 4,
                justifyContent: "flex-start",
              }}
            >
              {technologies.map((tech) => (
                <Tooltip key={tech.name} title={tech.name} arrow>
                  <Box sx={{ 
                    display: "flex", 
                    alignItems: "center", 
                    justifyContent: "center",
                    transition: "transform 0.2s",
                    "&:hover": {
                      transform: "scale(1.15)",
                    }
                  }}>
                    {tech.icon}
                  </Box>
                </Tooltip>
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
              <BrushIcon sx={{ mr: 1, color: "primary.main" }} />
              <Typography variant="h4" component="h2">
                Design Tools
              </Typography>
            </Box>
            <Divider sx={{ mb: 3 }} />

            <Stack
              direction="row"
              sx={{
                flexWrap: "wrap",
                gap: 3,
                mt: 4,
                justifyContent: "flex-start",
              }}
            >
              {designTools.map((tool) => (
                <Tooltip key={tool.name} title={tool.name} arrow>
                  <Box sx={{ 
                    display: "flex", 
                    alignItems: "center", 
                    justifyContent: "center",
                    transition: "transform 0.2s",
                    "&:hover": {
                      transform: "scale(1.15)",
                    }
                  }}>
                    {tool.icon}
                  </Box>
                </Tooltip>
              ))}
            </Stack>
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

export default HomePage;