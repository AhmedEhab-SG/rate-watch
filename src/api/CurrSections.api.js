import { Fragment } from "react";
import { useQuery } from "react-query";
import CurrSection from "../components/Sections/Section/CurrSection/CurrSection";
import {
  Australia,
  Bahrain,
  Canada,
  China,
  Denmark,
  EU,
  Japan,
  Jordan,
  Kuwait,
  Malaysia,
  NewZealand,
  Norway,
  Oman,
  Qatar,
  Russia,
  SaudiArabia,
  Sudan,
  Sweden,
  Switzerlan,
  Tunisia,
  Turkey,
  UK,
  USA,
  Ukrainian,
  UnitedArabEmirates,
  Yemen,
} from "../scripts/images.script";
import currenciesApi from "../services/currencies-api";
import { Box } from "@mui/material";
import styles from "../styles/styles.module.css";

const CurrSectionsApi = () => {
  const { status, data } = useQuery("currencies-api", currenciesApi, {
    refetchOnMount: false,
    refetchInterval: false,
    refetchOnReconnect: false,
    refetchOnWindowFocus: false,
  });

  if (status === "loading") {
    return <Box className={styles.loader}></Box>;
  } else {
    localStorage.setItem("currenciesData", JSON.stringify(data));
    const rates = data.data.rates;
    const egpRate = rates.EGP;
    const actualEgpRate = (Math.round(egpRate * 1000) / 1000).toFixed(2);
    const lastUpdate = data.data.date.slice(0, 10);

    const objectMap = (obj, fn) =>
      Object.fromEntries(
        Object.entries(obj).map(([k, v], i) => [k, fn(v, k, i)])
      );

    const rateToEGP = objectMap(rates, (eachCur) =>
      ((1 / eachCur) * egpRate).toFixed(2)
    );

    // selected arr

    const rateAllToEgp = [
      {
        img: USA,
        country: "United States Dollar",
        currencyToEgp: actualEgpRate,
      },
      {
        img: EU,
        country: "European Union Euro",
        currencyToEgp: rateToEGP.EUR,
      },
      {
        img: UK,
        country: "Pound Sterling",
        currencyToEgp: rateToEGP.GBP,
      },
      {
        img: SaudiArabia,
        country: "Saudi Arabia Riyal",
        currencyToEgp: rateToEGP.SAR,
      },
      {
        img: Kuwait,
        country: "Kuwait Dinar",
        currencyToEgp: rateToEGP.KWD,
      },
      {
        img: Qatar,
        country: "Qatari Riyal",
        currencyToEgp: rateToEGP.QAR,
      },
      {
        img: Tunisia,
        country: "Tunisian Dinar",
        currencyToEgp: rateToEGP.TND,
      },
      {
        img: UnitedArabEmirates,
        country: "UA Emirates Dirham",
        currencyToEgp: rateToEGP.AED,
      },
      {
        img: Japan,
        country: "Japanese Yen",
        currencyToEgp: rateToEGP.JPY,
      },
      {
        img: China,
        country: "Chinese Yuan",
        currencyToEgp: rateToEGP.CNY,
      },
      {
        img: Canada,
        country: "Canadian Dollar",
        currencyToEgp: rateToEGP.CAD,
      },
      {
        img: Switzerlan,
        country: "Swiss Franc",
        currencyToEgp: rateToEGP.CHF,
      },
      {
        img: Turkey,
        country: "Turkish Lira",
        currencyToEgp: rateToEGP.TRY,
      },
      {
        img: Sudan,
        country: "Sudanese Pound",
        currencyToEgp: rateToEGP.SDG,
      },
      {
        img: Yemen,
        country: "Yemeni Riyal",
        currencyToEgp: rateToEGP.YER,
      },
      {
        img: Russia,
        country: "Russian Ruble",
        currencyToEgp: rateToEGP.RUB,
      },
      {
        img: Ukrainian,
        country: "Ukrainian Hryvnia",
        currencyToEgp: rateToEGP.UAH,
      },
      {
        img: NewZealand,
        country: "New Zeland Dollar",
        currencyToEgp: rateToEGP.NZD,
      },
      {
        img: Malaysia,
        country: "Malaysian Ringgit",
        currencyToEgp: rateToEGP.MYR,
      },
      {
        img: Denmark,
        country: "Denmark Krone",
        currencyToEgp: rateToEGP.DKK,
      },
      {
        img: Norway,
        country: "Norway Krone",
        currencyToEgp: rateToEGP.NOK,
      },
      {
        img: Sweden,
        country: "Swedish Krona",
        currencyToEgp: rateToEGP.SEK,
      },
      {
        img: Australia,
        country: "Australian Dollar",
        currencyToEgp: rateToEGP.AUD,
      },
      {
        img: Bahrain,
        country: "Bahrain Dinar",
        currencyToEgp: rateToEGP.BHD,
      },
      {
        img: Oman,
        country: "Omani Rial",
        currencyToEgp: rateToEGP.OMR,
      },
      {
        img: Jordan,
        country: "Jordanian Dinar",
        currencyToEgp: rateToEGP.JOD,
      },
    ];

    return (
      <Fragment>
        <CurrSection
          onCurrArr={rateAllToEgp}
          onCurrUpdate={lastUpdate}
          onEgpRate={egpRate}
        />
      </Fragment>
    );
  }
};

export default CurrSectionsApi;
