import React from "react";
import {
  Box,
  Avatar,
  Typography,
  IconButton,
  Divider,
  useTheme,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import logoImage from "../../../assets/logo.png";

interface NavHeaderProps {
  isDesktop: boolean;
  handleDrawerToggle: () => void;
}

const NavHeader: React.FC<NavHeaderProps> = ({
  isDesktop,
  handleDrawerToggle,
}) => {
  const theme = useTheme();

  return (
    <>
      <Box
        sx={{
          padding: 2,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          mt: !isDesktop ? 7 : 2,
          position: "relative",
        }}
      >
        {!isDesktop && (
          <IconButton
            onClick={handleDrawerToggle}
            sx={{
              position: "absolute",
              right: 8,
              top: 8,
              color: theme.palette.text.secondary,
            }}
          >
            <CloseIcon />
          </IconButton>
        )}

        <Avatar
          src={logoImage}
          alt="Tonje Stensen"
          sx={{
            width: 70,
            height: 70,
            mb: 1,
          }}
        />
        <Typography
          variant={isDesktop ? "h5" : "h6"}
          sx={{ fontWeight: "bold", mb: 1 }}
        >
          Tonje Stensen
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Front-end Developer
        </Typography>
        <Typography variant="body2" color="text.secondary">
          UI / UX Designer
        </Typography>
      </Box>

      <Divider />
    </>
  );
};

export default NavHeader;
