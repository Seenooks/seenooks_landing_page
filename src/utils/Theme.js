import { createTheme } from "@mui/material";

export const lightTheme = createTheme({
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        // Style for the scrollbar
        // "*::-webkit-scrollbar": {
        //   width: "0.5em",
        //   height: "0.5em",
        //   backgroundColor: "#ecf0f1",
        // },
        // "*::-webkit-scrollbar-thumb": {
        //   backgroundColor: "#3A506B", //#5BC0BE
        //   borderRadius: "0.2em",
        // },
        // "*": {
        //   boxSizing: "unset",
        // },
      },
    },
    MuiButtonBase: {
      defaultProps: {
        disableRipple: true,
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          color: "#FEFFFF",
          "&:hover": {
            backgroundColor: "transparent",
          },
        },
      },
    },
  },
  typography: {
    fontFamily: "'Anton SC', sans-serif",
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
  palette: {
    background: {
      primary: "#ecf0f1",
      secondary: "#bdc3c7",
      gradient: "linear-gradient(to bottom right, rgba(0, 0, 0, 0.1) 10%, rgba(0, 0, 0, 0.78) 70%)",
    },
    button: {
      backgroundPrimary: "#53739A", // blue
      backgroundSecondary: "#018786", //green
      foregroundPrimary: "#fff",
      foregroundSecondary: "#fff",
      shadowPrimary: "",
      shadowSecondary: ""
    },
    text: {
      primary: "#0B132B",
      secondary: "#53739A"
    }
  }
});

export const darkTheme = createTheme({
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        // Style for the scrollbar
        // "*::-webkit-scrollbar": {
        //   width: "0.4em",
        //   height: "0.4em",
        //   backgroundColor: "#212121",
        // },
        // "*::-webkit-scrollbar-thumb": {
        //   backgroundColor: "#000000",
        //   borderRadius: "0.2em",
        // },
        // "*": {
        //   boxSizing: "unset",
        // },
      },
    },
    MuiButtonBase: {
      defaultProps: {
        disableRipple: true,
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          color: "#FEFFFF",
          "&:hover": {
            backgroundColor: "transparent",
          },
        },
      },
    },
  },
  typography: {
    fontFamily: "'Roboto', sans-serif",
    // fontFamily: "'Anton SC', sans-serif",
    // fontFamily: "'Rubik Wet Paint', system-ui",
    // fontFamily: "'Concert One', sans-serif",
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
  palette: {
    background: {
      primary: "#212121",
      secondary: "#3A506B",
      gradient: "linear-gradient(to bottom right, #192a56 10%, #273c75 50%, #192a56 80%)",
    },
    button: {
      backgroundPrimary: "#03DAC6", //green
      backgroundSecondary: "#3700B3", //blue
      foregroundPrimary: "#000",
      foregroundSecondary: "#fff",
      shadowPrimary: "",
      shadowSecondary: ""
    },
    text: {
      primary: "#FFFFFF",
      secondary: "#2e86de" //#6FFFE9
    }
  },
});
