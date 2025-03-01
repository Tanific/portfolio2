import React from 'react';
import { Box, Typography, useTheme } from '@mui/material';

const NavFooter: React.FC = () => {
  const theme = useTheme();
  
  return (
    <Box sx={{ p: 2, borderTop: `1px solid ${theme.palette.divider}` }}>
      <Typography variant="body2" color="text.secondary" align="center">
        ©{new Date().getFullYear()} Tonje Stensen
      </Typography>
    </Box>
  );
};

export default NavFooter;