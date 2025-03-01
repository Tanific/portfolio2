import React from 'react';
import { AppBar, Toolbar, IconButton, Typography, useTheme } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

interface MobileAppBarProps {
  handleDrawerToggle: () => void;
}

const MobileAppBar: React.FC<MobileAppBarProps> = ({ handleDrawerToggle }) => {
  const theme = useTheme();
  
  return (
    <AppBar
      position="fixed"
      sx={{
        zIndex: theme.zIndex.drawer + 2,
        backgroundColor: theme.palette.background.default,
        boxShadow: 1,
      }}
    >
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="start"
          onClick={handleDrawerToggle}
          sx={{ mr: 2 }}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" noWrap component="div">
          Tonje Stensen
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default MobileAppBar;