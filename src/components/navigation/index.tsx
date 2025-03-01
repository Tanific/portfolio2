import React, { useState } from "react";
import { Drawer, Box, useTheme, useMediaQuery } from "@mui/material";
import NavHeader from "./navheader";
import NavList from "./navlist";
import NavFooter from "./navfooter";
import MobileAppBar from "./navmobile";

const drawerWidth = 260;

const Navigation: React.FC = () => {
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up("md"));
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  // Drawer content component
  const DrawerContent = () => (
    <>
      <NavHeader 
        isDesktop={isDesktop} 
        handleDrawerToggle={handleDrawerToggle} 
      />
      <NavList 
        isMobile={!isDesktop} 
        handleDrawerToggle={handleDrawerToggle} 
      />
      <Box sx={{ flexGrow: 1 }} />
      <NavFooter />
    </>
  );

  return (
    <>
      {/* Mobile AppBar */}
      {!isDesktop && <MobileAppBar handleDrawerToggle={handleDrawerToggle} />}

      {/* Desktop Drawer - Permanent */}
      {isDesktop && (
        <Drawer
          variant="permanent"
          anchor="left"
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            display: { xs: "none", md: "block" },
            "& .MuiDrawer-paper": {
              width: drawerWidth,
              boxSizing: "border-box",
              borderRight: `1px solid ${theme.palette.divider}`,
            },
          }}
          open
        >
          <DrawerContent />
        </Drawer>
      )}

      {/* Mobile Drawer - Temporary */}
      {!isDesktop && (
        <Drawer
          variant="temporary"
          anchor="left"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          sx={{
            display: { xs: "block", md: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
              backgroundColor: `${theme.palette.background.default} !important`,
              color: theme.palette.text.primary,
              zIndex: theme.zIndex.drawer + 1,
              "--Paper-overlay": "none !important",
            },
            "& .MuiBackdrop-root": {
              backgroundColor: "rgba(0, 0, 0, 0.7)",
            },
          }}
          ModalProps={{
            keepMounted: true,
          }}
        >
          <DrawerContent />
        </Drawer>
      )}
    </>
  );
};

export default Navigation;