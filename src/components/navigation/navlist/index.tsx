import React from "react";
import {
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  ListItemIcon,
  useTheme,
} from "@mui/material";
import { Link, useLocation } from "react-router";
import HomeIcon from "@mui/icons-material/Home";
import CodeIcon from "@mui/icons-material/Code";
import EmailIcon from "@mui/icons-material/Email";

interface NavListProps {
  isMobile: boolean;
  handleDrawerToggle?: () => void;
}

const NavList: React.FC<NavListProps> = ({ isMobile, handleDrawerToggle }) => {
  const theme = useTheme();
  const location = useLocation();

  const navItems = [
    { text: "Home", path: "/", icon: <HomeIcon /> },
    { text: "Projects", path: "/projects", icon: <CodeIcon /> },
    { text: "Contact", path: "/contact", icon: <EmailIcon /> },
  ];

  return (
    <List sx={{ mt: 2 }}>
      {navItems.map((item) => {
        const isActive = location.pathname === item.path;

        return (
          <ListItem key={item.text} disablePadding>
            <ListItemButton
              component={Link}
              to={item.path}
              onClick={isMobile ? handleDrawerToggle : undefined}
              sx={{
                borderRadius: "0 20px 20px 0",
                mr: 1,
                ml: 1,
                mb: 0.5,
                bgcolor: isActive ? "rgba(255, 255, 255, 0.08)" : "transparent",
                color: isActive ? theme.palette.primary.main : "inherit",
                "&:hover": {
                  bgcolor: "rgba(255, 255, 255, 0.12)",
                },
              }}
            >
              <ListItemIcon
                sx={{
                  color: isActive ? theme.palette.primary.main : "inherit",
                  minWidth: 40,
                }}
              >
                {item.icon}
              </ListItemIcon>
              <ListItemText
                primary={item.text}
                slotProps={{
                  primary: {
                    fontWeight: isActive ? "medium" : "regular",
                    variant: "body2",
                  },
                }}
              />
            </ListItemButton>
          </ListItem>
        );
      })}
    </List>
  );
};

export default NavList;
