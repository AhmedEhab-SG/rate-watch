import layoutStyles from "../layout-styles/main-layout.styles";

const silverRateStyles = {
  silverContainer: {
    display: "flex",
    alignItems: "center",
    gap: "2%",
    marginLeft: "-1%",
  },
  silverImg: {
    height: {
      xl: "2rem",
      lg: "2rem",
      md: "2rem",
      sm: "2rem",
      xs: "1.5rem",
    },
  },
  titleContainer: {
    display: "flex",
    width: "fit-content",
    alignItems: "center",
    justifyContent: "center",
    gap: "1rem",
    margin: "5rem auto 1rem",
  },
  setOfSilverImg: {
    height: {
      xl: "4rem",
      lg: "4rem",
      md: "3.5rem",
      sm: "3.5rem",
      xs: "2.5rem",
    },
  },
  silverBarsImg: {
    height: {
      xl: "3.5rem",
      lg: "3.5rem",
      md: "3rem",
      sm: "3rem",
      xs: "2.5rem",
    },
  },
  tableContianer: {
    border: "2px solid #0e0e2b",
    margin: "1rem auto 10rem",
    borderRadius: ".8rem",
    boxShadow: layoutStyles.boxShadow,
  },
};
export default silverRateStyles;
