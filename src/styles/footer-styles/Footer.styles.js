import layoutStyles from "../layout-styles/main-layout.styles";

const footerStyles = {
  footerContainer: {
    boxSizing: "border-box",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgb(27, 27, 50)",
    minWidth: "100%",
    flexDirection: { xs: "column", md: "row" },
  },
  footerGrid: {
    display: "grid",
    justifyContent: "center",
    justifyItems: { xs: "center", md: "flex-start" },
    flexGrow: "1",
    textAlign: "center",
    flexBasis: "33.333%",
    padding: "0.5rem",
  },
  textDicrostions: { textDecoration: "underline" },
  linkStyles: {
    textDecoration: "none",
    fontStyle: "italic",
    color: layoutStyles.lightSilver,
    "&:hover": {
      color: layoutStyles.goldColor,
    },
  },
  footerMidGrid: {
    display: "grid",
    justifyContent: "center",
    justifyItems: "center",
    flexGrow: "1",
    textAlign: "center",
    flexBasis: "33.333%",
  },
  logo: {
    height: { lg: "3.5rem", md: "3rem", xs: "2.5rem" },
    margin: "0.5rem",
  },
  linkNotI: {
    textDecoration: "none",
    color: layoutStyles.lightSilver,
    "&:hover": {
      color: layoutStyles.goldColor,
    },
  },
  linkUnderline: {
    textDecoration: "underline",
    color: layoutStyles.lightSilver,
    "&:hover": {
      color: layoutStyles.goldColor,
    },
  },
  githubImg: {
    height: { md: "1.8rem", sm: "1.5rem", xs: "1rem" },
  },
};

export default footerStyles;
