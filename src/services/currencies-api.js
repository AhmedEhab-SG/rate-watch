import axios from "axios";
import currenciesDb from "../database/currencies-db";

const currUrl = `https://test-api.currencyfreaks.com/v2.0/rates/latest?apikey=${process.env.REACT_APP_CURRENCY_KEY}`;

// currencies-api logic checking before fetching

const date = new Date();

const formatDate = (date) => {
  const month = ("0" + (date.getMonth() + 1)).slice(-2);
  const year = date.getFullYear();
  const day = ("0" + date.getDate()).slice(-2);
  const currentDate = `${year}-${month}-${day}`;
  return currentDate;
};

const onPromise = async (backUp) => {
  const output = await Promise.resolve(backUp);
  return output;
};

const currenciesApi = async () => {
  if (
    localStorage.getItem("currenciesData") !== null &&
    localStorage.getItem("currenciesData") !== "undefined"
  ) {
    const currStorage = JSON.parse(localStorage.getItem("currenciesData"));
    if (currStorage.data.date.slice(0, 10) === formatDate(date)) {
      return onPromise(currStorage);
    } else {
      const currenciesLink = axios.get(currUrl).catch(() => {
        return onPromise(currenciesDb);
      });
      return currenciesLink;
    }
  } else {
    const currenciesLink = axios.get(currUrl).catch(() => {
      return onPromise(currenciesDb);
    });
    return currenciesLink;
  }
};

export default currenciesApi;
