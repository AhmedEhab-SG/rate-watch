import layoutStyles from "../layout-styles/main-layout.styles";

const currStyles = {
  currContianer: {
    display: "flex",
    alignItems: "center",
    gap: "3%",
    paddingLeft: "1%",
  },
  countryFlags: { height: "1rem", width: "1.5rem" },
  titleContainer: {
    display: "flex",
    width: "fit-content",
    alignItems: "center",
    justifyContent: "center",
    gap: "1rem",
    margin: "5rem auto 1rem",
  },
  titleImgFlag: {
    height: {
      xl: "3.5rem",
      lg: "3.5rem",
      md: "3rem",
      sm: "3rem",
      xs: "2rem",
    },
  },
  titleImgCoin: {
    height: {
      xl: "2.5rem",
      lg: "2.5rem",
      md: "2.5rem",
      sm: "2rem",
      xs: "2rem",
    },
  },
  tableContainer: {
    border: "2px solid #0e0e2b",
    borderRadius: ".8rem",
    boxShadow: layoutStyles.boxShadow,
  },
  tableBtn: {
    display: "flex",
    margin: "3rem auto 8rem",
    width: { sm: "8rem", xs: "7rem" },
    height: { sm: "3.1rem", xs: "3rem" },
    color: layoutStyles.silverColor,
    "&:hover": {
      color: layoutStyles.goldColor,
    },
  },
};

export default currStyles;
