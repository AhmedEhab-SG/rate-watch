import { useQuery } from "react-query";
import goldSilverApi from "../services/goldSilver-api";
import {
  gold12,
  gold14,
  gold18,
  gold21,
  gold24,
  ounce,
  silver800,
  silver875,
  silver916,
  silver925,
  silver958,
  silver999,
} from "../scripts/images.script";
import { GoldSilverSection } from "../scripts/section.script";
import { Fragment } from "react";
import { Box } from "@mui/material";
import styles from "../styles/styles.module.css";

const GoldSilverSectionsApi = () => {
  const { status, data } = useQuery("goldSilver-api", goldSilverApi, {
    refetchOnMount: false,
    refetchInterval: false,
    refetchOnReconnect: false,
    refetchOnWindowFocus: false,
  });
  if (status === "loading") {
    return <Box className={styles.loader}></Box>;
  } else {
    // using local Storage
    localStorage.setItem("goldSilverData", JSON.stringify(data));
    const currStorage = JSON.parse(localStorage.getItem("currenciesData"));

    //f(x) converts currents ounce to gram and from USD to EGP
    const PriceEGP = (convPrice) => {
      const oneGramOfOunce = 1 / 28.3495;
      const egpRate = currStorage.data.rates.EGP;
      const usdPrice = convPrice;
      const fullPrice = oneGramOfOunce * egpRate * usdPrice;
      const priceEGP = (Math.round(fullPrice * 1000) / 1000).toFixed(2);
      return priceEGP;
    };

    const usdGoldBuyPrice = data.data.GSJ.Gold.USD.Ask;
    const usdGoldSellPrice = data.data.GSJ.Gold.USD.Bid;

    const egpGoldBuyPrice = PriceEGP(usdGoldBuyPrice);
    const egpGoldSellPrice = PriceEGP(usdGoldSellPrice);

    //f(x) calc carat over max purity
    const PercenOfCarat = (carat, purity, purePrice) => {
      const preOfCarat = (
        Math.round((carat / purity) * purePrice * 1000) / 1000
      ).toFixed(2);
      return preOfCarat;
    };

    const ounceBuyPriceUSD = data.data.GSJ.Gold.USD.Ask;
    const ounceSellPriceUSD = data.data.GSJ.Gold.USD.Bid;

    //calc ounce
    const ounceBuyPriceEGP = (
      Math.round(ounceBuyPriceUSD * currStorage.data.rates.EGP * 1000) / 1000
    ).toFixed(2);
    const ounceSellPrice = (
      Math.round(ounceSellPriceUSD * currStorage.data.rates.EGP * 1000) / 1000
    ).toFixed(2);

    const lastUpdate = data.data.GSJ.date;

    //gold array
    const goldElementArr = [
      {
        img: gold24,
        text: "Gold 24 Carat",
        buyPrice: egpGoldBuyPrice,
        sellPrice: egpGoldSellPrice,
      },
      {
        img: gold21,
        text: "Gold 21 Carat",
        buyPrice: PercenOfCarat(21, 24, egpGoldBuyPrice),
        sellPrice: PercenOfCarat(21, 24, egpGoldSellPrice),
      },
      {
        img: gold18,
        text: "Gold 18 Carat",
        buyPrice: PercenOfCarat(18, 24, egpGoldBuyPrice),
        sellPrice: PercenOfCarat(18, 24, egpGoldSellPrice),
      },
      {
        img: gold14,
        text: "Gold 14 Carat",
        buyPrice: PercenOfCarat(14, 24, egpGoldBuyPrice),
        sellPrice: PercenOfCarat(14, 24, egpGoldSellPrice),
      },
      {
        img: gold12,
        text: "Gold 12 Carat",
        buyPrice: PercenOfCarat(12, 24, egpGoldBuyPrice),
        sellPrice: PercenOfCarat(12, 24, egpGoldSellPrice),
      },
      {
        img: ounce,
        text: "Ounce",
        buyPrice: ounceBuyPriceEGP,
        sellPrice: ounceSellPrice,
      },
    ];
    /// end of gold logic

    const usdSilverBuyPrice = data.data.GSJ.Silver.USD.Ask;
    const usdSilverSellPrice = data.data.GSJ.Silver.USD.Bid;

    const egpSilverBuyPrice = PriceEGP(usdSilverBuyPrice);
    const egpSilverSellPrice = PriceEGP(usdSilverSellPrice);

    //silver array
    const silverElementArr = [
      {
        img: silver999,
        text: "Silver 99.9 Carat (Pure Silver)",
        buyPrice: egpSilverBuyPrice,
        sellPrice: egpSilverSellPrice,
      },
      {
        img: silver958,
        text: "British Silver 95.8 Carat",
        buyPrice: PercenOfCarat(958, 1000, egpSilverBuyPrice),
        sellPrice: PercenOfCarat(958, 1000, egpSilverSellPrice),
      },
      {
        img: silver925,
        text: "Sterling Silver 92.5 Carat",
        buyPrice: PercenOfCarat(925, 1000, egpSilverBuyPrice),
        sellPrice: PercenOfCarat(925, 1000, egpSilverSellPrice),
      },
      {
        img: silver916,
        text: "Silver 916 Carat",
        buyPrice: PercenOfCarat(916, 1000, egpSilverBuyPrice),
        sellPrice: PercenOfCarat(916, 1000, egpSilverSellPrice),
      },
      {
        img: silver875,
        text: "Silver 875 Carat",
        buyPrice: PercenOfCarat(875, 1000, egpSilverBuyPrice),
        sellPrice: PercenOfCarat(875, 1000, egpSilverSellPrice),
      },
      {
        img: silver800,
        text: "Silver 800 Carat",
        buyPrice: PercenOfCarat(800, 1000, egpSilverBuyPrice),
        sellPrice: PercenOfCarat(800, 1000, egpSilverSellPrice),
      },
    ];
    //end of silver logic

    return (
      <Fragment>
        <GoldSilverSection
          onGold={goldElementArr}
          onSilver={silverElementArr}
          onCurrUpdate={lastUpdate}
        />
      </Fragment>
    );
  }
};

export default GoldSilverSectionsApi;
