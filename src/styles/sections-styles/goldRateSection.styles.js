import layoutStyles from "../layout-styles/main-layout.styles";

const goldRateStyles = {
  goldContainer: {
    display: "flex",
    alignItems: "center",
    gap: "2%",
    marginLeft: "-1%",
  },
  goldImg: {
    height: {
      xl: "2rem",
      lg: "2rem",
      md: "2rem",
      sm: "2rem",
      xs: "1.5rem",
    },
  },
  updateContainer: {
    display: "flex",
    flexDirection: "column",
    margin: "5rem auto 4rem",
    gap: "0.5rem",
    width: "fit-content",
  },
  goldSilverImg: {
    height: {
      xl: "8rem",
      lg: "7rem",
      md: "6rem",
      sm: "5rem",
      xs: "4rem",
    },
    margin: "0 auto",
  },
  titleConttainer: {
    display: "flex",
    width: "fit-content",
    alignItems: "center",
    justifyContent: "center",
    gap: "1rem",
    margin: "1rem auto 1rem",
  },
  setOfGoldImg: {
    height: {
      xl: "4rem",
      lg: "4rem",
      md: "3.5rem",
      sm: "3.5rem",
      xs: "2.5rem",
    },
  },
  goldBarsImg: {
    height: {
      xl: "3.5rem",
      lg: "3.5rem",
      md: "3rem",
      sm: "2.5rem",
      xs: "2rem",
    },
  },
  tableContainer: {
    border: "2px solid #0e0e2b",
    margin: "1rem auto",
    borderRadius: ".8rem",
    boxShadow: layoutStyles.boxShadow,
  },
};

export default goldRateStyles;
