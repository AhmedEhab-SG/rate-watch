import goldSilverDb from "../database/goldSilver-db";
import axios from "axios";

const goldUrl = `https://test-api.freegoldprice.org/request.cfm?key=${process.env.REACT_APP_GOLD_KEY}`;

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

const goldSilverApi = async () => {
  if (
    localStorage.getItem("goldSilverData") !== null &&
    localStorage.getItem("goldSilverData") !== "undefined"
  ) {
    const goldSilverStorage = JSON.parse(
      localStorage.getItem("goldSilverData")
    );
    if (goldSilverStorage.data.GSJ.date.slice(0, 10) === formatDate(date)) {
      return onPromise(goldSilverStorage);
    } else {
      const goldSilverLink = axios.get(goldUrl).catch(() => {
        return onPromise(goldSilverDb);
      });
      return goldSilverLink;
    }
  } else {
    const goldSilverLink = axios.get(goldUrl).catch(() => {
      return onPromise(goldSilverDb);
    });
    return goldSilverLink;
  }
};

export default goldSilverApi;
