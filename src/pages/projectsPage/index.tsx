import React from "react";
import { Typography, Container, Box } from "@mui/material";
import ProjectCard from "../../components/project-card";
import holidazeImage from "../../assets/holidaze.png";
import auctionImage from "../../assets/auction.png";
import ecomImage from "../../assets/ecom.png";

const ProjectPage: React.FC = () => {
  const projects = [
    {
      title: "Holidaze",
      description:
        "A vacation rental booking platform where users can book accommodations and manage own venues.",
      imageUrl: holidazeImage,
      githubUrl: "https://github.com/Tanific/project-exam2",
      liveUrl: "https://pe2-tonjestensen.netlify.app/",
      technologies: [
        "TypeScript",
        "React",
        "MUI",
        "Redux Toolkit",
        "API",
        "User Authentication",
      ],
    },
    {
      title: "Auction House",
      description:
        "An auction platform where users can list items for sale and bid on listings with given 1000 currency.",
      imageUrl: auctionImage,
      githubUrl: "https://github.com/Tanific/SemesterProject2",
      liveUrl: "https://sp2tonjestensen.netlify.app/",
      technologies: [
        "JavaScript",
        "HTML",
        "Bootstrap / SCSS",
        "API",
        "User Authentication",
      ],
    },
    {
      title: "eCom Store",
      description:
        "An e-commerce platform with product browsing, cart functionality and checkout.",
      imageUrl: ecomImage,
      githubUrl: "https://github.com/Tanific/frontend-frameworks-ca",
      liveUrl: "https://fe-frameworks-stensen.netlify.app/",
      technologies: ["JavaScript", "React", "CSS Modules", "API"],
    },
  ];

  return (
    <Container maxWidth="lg">
      <Box sx={{ mt: { xs: "80px", md: "150px" }, mb: 8 }}>
        <Typography variant="h3" component="h1" gutterBottom>
          Front-end Projects
        </Typography>
        <Typography variant="subtitle1" color="text.secondary" sx={{ mb: 6 }}>
          A collection of my school projects from Noroff - School of Technology
          and Digital Media.
        </Typography>

        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            gap: 4,
            justifyContent: "center",
          }}
        >
          {projects.map((project) => (
            <Box
              key={project.title}
              sx={{
                minWidth: "300px",
                flexGrow: 1,
                flexBasis: "300px",
                maxWidth: {
                  xs: "100%",
                  sm: "450px",
                },
              }}
            >
              <ProjectCard {...project} />
            </Box>
          ))}
        </Box>
      </Box>
    </Container>
  );
};

export default ProjectPage;
