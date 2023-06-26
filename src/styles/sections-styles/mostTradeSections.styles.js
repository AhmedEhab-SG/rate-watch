import layoutStyles from "../layout-styles/main-layout.styles";

const mostTradeStyles = {
  swiperSilde: {
    display: "flex",
    flexDirection: "column",
    boxShadow: layoutStyles.boxShadow,
    padding: "2rem",
    justifyContent: "center",
    alignItems: "center",
    gap: "1rem",
    textAlign: "center",
    borderRadius: "1rem",
  },
  swiperImg: { width: "2.5rem", height: "2rem" },
  updateTitle: { textAlign: "center", marginTop: "5rem" },
  headerContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "1rem",
  },
  flagImg: {
    height: {
      xl: "3.5rem",
      lg: "3.5rem",
      md: "3rem",
      sm: "3rem",
      xs: "2rem",
    },
  },
  headerTypo: { textAlign: "center", marginTop: "1rem" },
  coinImg: {
    height: {
      xl: "2.5rem",
      lg: "2.5rem",
      md: "2rem",
      sm: "2rem",
      xs: "1.5rem",
    },
  },
  swiperContainer: {
    display: "flex",
    gap: "3rem",
    justifyContent: "center",
    padding: "3rem",
    margin: "0 auto",
  },
};

export default mostTradeStyles;
