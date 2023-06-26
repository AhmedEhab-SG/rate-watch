import { Scrollbar, A11y, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Box, Typography, Grid, useMediaQuery, useTheme } from "@mui/material";
import { Fragment } from "react";
import {
  egyptionSmallStack,
  emptyFlag,
} from "../../../../../scripts/images.script";
import mostTradeStyles from "../../../../../styles/sections-styles/mostTradeSections.styles";

const MostTrade = (props) => {
  const theme = useTheme();
  const isXSamll = useMediaQuery(theme.breakpoints.up("sm"));
  const isSamll = useMediaQuery(theme.breakpoints.up("md"));
  const mostTradeData = props.onCurrArr.slice(0, 15);

  const mostTradeElement = mostTradeData.map((mostTradeItems) => {
    return (
      <SwiperSlide
        key={mostTradeItems.country}
        style={mostTradeStyles.swiperSilde}
      >
        <Box
          component="img"
          src={mostTradeItems.img}
          alt="mostTrade-img"
          sx={mostTradeStyles.swiperImg}
        />
        <Typography variant="body1">{mostTradeItems.country}</Typography>
        <Typography variant="body2">
          {mostTradeItems.currencyToEgp} .LE
        </Typography>
      </SwiperSlide>
    );
  });
  return (
    <Fragment>
      <Typography variant="h5" sx={mostTradeStyles.updateTitle}>
        <i>Currencies Latest Update: {props.onCurrUpdate}</i>
      </Typography>
      <Grid sx={mostTradeStyles.headerContainer}>
        <Box
          component="img"
          src={emptyFlag}
          alt="empty-flag"
          sx={mostTradeStyles.flagImg}
        />
        <Typography variant="h2" sx={mostTradeStyles.headerTypo}>
          The Average Prices of the Most Traded Currencies
        </Typography>
        <Box
          component="img"
          src={egyptionSmallStack}
          alt="empty-flag"
          sx={mostTradeStyles.coinImg}
        />
      </Grid>
      <Swiper
        modules={[Scrollbar, A11y, Autoplay]}
        spaceBetween={50}
        slidesPerView={isXSamll ? (isSamll ? 5 : 3) : 2}
        loop={true}
        autoplay={{ delay: "3000", disableOnInteraction: false }}
        style={mostTradeStyles.swiperContainer}
      >
        {mostTradeElement}
      </Swiper>
    </Fragment>
  );
};
export default MostTrade;
