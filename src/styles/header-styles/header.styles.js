import layoutStyles from "../layout-styles/main-layout.styles";

const headerStyles = {
  headerAppbar: { backgroundColor: layoutStyles.paperColor },
  container: {
    justifyContent: "space-between",
    alignItems: "center",
    margin: "0.4rem",
  },
  linkLogo: {
    display: "flex",
    alignItems: "center",
    gap: "1rem",
    textDecoration: "none",
    marginLeft: "3%",
    cursor: "pointer",
  },
  logo: {
    height: { lg: "4rem", md: "4rem", sm: "3rem", xs: "2.5rem" },
  },
  logoHover: {
    "&:hover": {
      color: layoutStyles.goldColor,
    },
  },
  scrollUpPosition: { position: "fixed", bottom: 16, right: 16 },
  scrollUp: {
    backgroundColor: layoutStyles.lightSilver,
    "&:hover": {
      backgroundColor: layoutStyles.goldColor,
    },
  },
};

const navStyles = {
  buttons: {
    color: layoutStyles.darkWhite,
    "&:hover": {
      color: layoutStyles.goldColor,
    },
  },
  stack: {
    display: "flex",
    justifyContent: "space-around",
    width: "20%",
  },
  paperDrwaer: {
    sx: {
      background: layoutStyles.paperColor,
      width: "60%",
    },
  },
  smallStack: { gap: "5rem", width: "100%", alignItems: "center" },
};

export default headerStyles;
export { navStyles };
