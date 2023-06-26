import { Box, Typography, Grid } from "@mui/material";
import {
  SilverCoin,
  goldCoin,
  setOfGoldSilver,
} from "../../../../scripts/images.script";
import heroStyles from "../../../../styles/sections-styles/heroSection.styles";

const HeroSection = () => {
  return (
    <Grid sx={heroStyles.heroContainer}>
      <Grid sx={heroStyles.heroFlex}>
        <Box
          component="img"
          src={goldCoin}
          alt="gold-coin"
          sx={heroStyles.goldCoin}
        />
        <Typography variant="h1" textAlign="center">
          Real-Time Exchange Rates in EGP
        </Typography>
        <Box
          component="img"
          src={SilverCoin}
          alt="gold-coin"
          sx={heroStyles.silverCoin}
        />
      </Grid>
      <Box
        component="img"
        src={setOfGoldSilver}
        alt="set-of-gold-silver"
        sx={heroStyles.setOfGoldSilver}
      />
    </Grid>
  );
};

export default HeroSection;
