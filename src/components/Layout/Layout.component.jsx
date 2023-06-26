import { Grid } from "@mui/material";
import { layoutStyles } from "../../scripts/layout.script";
import { createTheme, ThemeProvider, CssBaseline } from "@mui/material";
import styles from "../../styles/styles.module.css"

const LayoutTheme = createTheme({
  palette: {
    mode: "dark",
  },
  typography: {
    fontFamily: layoutStyles.mainFontFamily,
    button: {
      fontFamily: layoutStyles.mainFontFamily,
      textTransform: "none",
    },
    h1: {
      fontSize: `clamp(23px, 3.5vw, 75px)`,
      background: layoutStyles.h1Gradient,
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
      fontWeight: "800",
    },
    h2: {
      fontSize: `clamp(16px, 3.5vw, 30px)`,
      background: layoutStyles.gradient,
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
      fontWeight: "600",
    },
    h3: {
      fontSize: `clamp(22px, 3.5vw, 30px)`,
      background: layoutStyles.gradient,
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
      fontWeight: "600",
    },
    h4: {
      fontSize: `clamp(20px, 3.5vw, 30px)`,
    },
    h5: {
      fontSize: `clamp(10px, 3.2vw, 18px)`,
      color: layoutStyles.lighterSliver,
    },
    h6: {
      fontSize: `clamp(14px, 3.5vw, 22px)`,
      color: layoutStyles.darkWhite,
    },
    body1: {
      fontSize: `clamp(12px, 3vw, 18px)`,
      color: layoutStyles.lightSilver,
    },
    body2: {
      fontSize: `clamp(12px, 3vw, 18px)`,
      color: layoutStyles.lightSilver,
      fontFamily: "Federant",
    },
    p: {
      fontSize: `clamp(14px, 3vw, 18px)`,
      color: layoutStyles.lightSilver,
    },
    caption: {
      fontSize: `clamp(14px, 3vw, 18px)`,
      color: layoutStyles.goldColor,
    },
    subtitle1: {
      fontSize: `clamp(12px, 3vw, 16px)`,
      color: layoutStyles.goldColor,
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
      overSize: 1700,
    },
  },
});

const Layout = (props) => {
  return (
    <ThemeProvider theme={LayoutTheme}>
      <CssBaseline />
      <Grid className={styles.bg} position="relative">
        {props.children}
      </Grid>
    </ThemeProvider>
  );
};

export default Layout;
