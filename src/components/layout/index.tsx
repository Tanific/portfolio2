import React from "react";
import Navigation from "../navigation";
import { Box, Toolbar, useMediaQuery, useTheme } from "@mui/material";
import { Outlet } from "react-router";

const Layout: React.FC = () => {
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up("md"));
  return (
    <Box sx={{ display: "flex" }}>
      <Navigation />
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          width: { sm: `calc(100% - ${isDesktop ? "280px" : "0px"})` },
        }}
      >
        {!isDesktop && <Toolbar />}
        <Outlet />
      </Box>
    </Box>
  );
};

export default Layout;
