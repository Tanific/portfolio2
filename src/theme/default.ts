import { createTheme, ThemeOptions } from "@mui/material/styles";

const darkBackground = "#121212";
const darkPaper = "#1E1E1E";
const lightText = "#FFFFFF";
const primaryPurple = "#8E00E0";
const lightPurple = "#BB6BC9";
const darkPurple = "#8E00E0";

// Create the theme
const themeOptions: ThemeOptions = {
  palette: {
    mode: "dark",
    primary: {
      main: primaryPurple,
      light: lightPurple,
      dark: darkPurple,
      contrastText: lightText,
    },
    secondary: {
      main: "#03DAC5",
      light: "#3AEFE0",
      dark: "#018786",
      contrastText: darkBackground,
    },
    background: {
      default: darkBackground,
      paper: darkPaper,
    },
    text: {
      primary: lightText,
      secondary: "rgba(255, 255, 255, 0.7)",
      disabled: "rgba(255, 255, 255, 0.5)",
    },
    divider: "rgba(255, 255, 255, 0.12)",
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          textTransform: "none",
          fontWeight: 600,
        },
        containedPrimary: {
          "&:hover": {
            backgroundColor: lightPurple,
          },
        },
      },
    },
    MuiDrawer: {
      styleOverrides: {
        paper: {
          backgroundColor: darkPaper,
          borderRight: `1px solid rgba(255, 255, 255, 0.12)`,
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: darkBackground,
        },
      },
    },
    MuiListItemButton: {
      styleOverrides: {
        root: {
          "&.Mui-selected": {
            backgroundColor: `${primaryPurple}33`,
            "&:hover": {
              backgroundColor: `${primaryPurple}4D`,
            },
          },
          "&:hover": {
            backgroundColor: "rgba(255, 255, 255, 0.08)",
          },
        },
      },
    },
  },
  typography: {
    fontFamily: [
      "Outfit",
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
    ].join(","),
    h1: {
      fontWeight: 700,
    },
    h2: {
      fontWeight: 700,
    },
    h3: {
      fontWeight: 600,
    },
    h4: {
      fontWeight: 600,
    },
    h5: {
      fontWeight: 500,
    },
    h6: {
      fontWeight: 500,
    },
    button: {
      fontWeight: 600,
    },
  },
  shape: {
    borderRadius: 8,
  },
};

const theme = createTheme(themeOptions);

export default theme;
