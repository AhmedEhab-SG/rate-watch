const heroStyles = {
  heroContainer: {
    display: "grid",
    textAlign: "center",
    alignContent: "center",
    justifyContent: "center",
    alignItems: "center",
    justifyItems: "center",
    marginTop: { lg: "15rem", md: "15rem", sm: "13rem", xs: "8rem" },
    marginBottom: { md: "2rem" },
  },
  heroFlex: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    margin: "0 auto 2rem",
  },
  goldCoin: {
    height: {
      xl: "10rem",
      lg: "8rem",
      md: "6rem",
      sm: "4rem",
      xs: "3rem",
    },
    transformOrigin: "center",
    transformBox: "fill-box",
    animation: "coinsMoving 6s ease-in-out infinite 0s",
    "@keyframes coinsMoving": {
      "0%": {
        transform: `translateY(0%) `,
      },
      "33.33%": {
        transform: `translateY(25%) )`,
      },
      "66.66%": {
        transform: `translateY(-25%) `,
      },
      "100%": {
        transform: `translateY(0%) `,
      },
    },
  },
  silverCoin: {
    height: {
      xl: "10rem",
      lg: "8rem",
      md: "6rem",
      sm: "4rem",
      xs: "3rem",
    },
    animation: "coinsMoving 6s ease-in-out infinite 0s",
  },
  setOfGoldSilver: {
    height: {
      xl: "15rem",
      lg: "10rem",
      md: "8rem",
      sm: "6rem",
      xs: "4rem",
    },
  },
};

export default heroStyles;
