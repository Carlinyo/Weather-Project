import axios from "axios";
import { GetLocation } from "../utils/helpers";

const getWeatherData = async (searchItem: string) => {
  if (searchItem) {
    return await axios
      .get(
        `https://api.openweathermap.org/data/2.5/forecast?q=${searchItem}&appid=8b838370aee60470a360fbbe0f263032`
      )
      .catch((err) => {
        console.log(err);
      })
      .then(async (data) => {
        if (data) {
          return await GetLocation(data);
        } else {
          return await axios
            .get(
              "https://api.openweathermap.org/data/2.5/forecast?q=London&appid=8b838370aee60470a360fbbe0f263032"
            )
            .then(async (data) => {
              return await GetLocation(data);
            });
        }
      });
  } else {
    return await axios
      .get(
        "https://api.openweathermap.org/data/2.5/forecast?q=London&appid=8b838370aee60470a360fbbe0f263032"
      )
      .then(async (data) => {
        return await GetLocation(data);
      });
  }
};

const Rainly = async () => {
  return await axios
    .get(
      "https://api.worldweatheronline.com/premium/v1/weather.ashx?key=9c1e101873c442fcbcf62131222908 &q=London&format=json&num_of_days=12"
    )
    .then((data) => {
      let Data: { rainData: Array<number>; SunData: Array<number> } = {
        rainData: [],
        SunData: [],
      };
      let RainlyData: Array<number> = [];
      let SunData: Array<number> = [];
      data.data.data.ClimateAverages.map((data: ClimateAverages) =>
        data.month.map((monthelement: Month) => {
          RainlyData.push(+monthelement.avgDailyRainfall);
          SunData.push(+monthelement.absMaxTemp);
        })
      );
      Data.rainData = RainlyData;
      Data.SunData = SunData;

      return { data: Data, allData: data.data.data };
    });
};

const sunsetData_Liverpool = async () => {
  return await axios
    .get(
      "https://api.worldweatheronline.com/premium/v1/weather.ashx?key=9c1e101873c442fcbcf62131222908&q=Liverpool&format=json&num_of_days=1"
    )
    .then((data) => data.data.data);
};

const sunsetData_Bristol = async () => {
  return await axios
    .get(
      "https://api.worldweatheronline.com/premium/v1/weather.ashx?key=9c1e101873c442fcbcf62131222908&q=Bristol&format=json&num_of_days=1"
    )
    .then((data) => data.data.data);
};

const getCurrentData = async (location: string) => {
  if (location) {
    return await axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=8b838370aee60470a360fbbe0f263032`
      )
      .catch((err) => {
        console.log(err);
      })
      .then(async (data) => {
        if (data) {
          return data.data;
        } else {
          return await axios
            .get(
              "https://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=8b838370aee60470a360fbbe0f263032"
            )
            .then((data) => {
              return data.data;
            });
        }
      });
  } else {
    return await axios
      .get(
        "https://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=8b838370aee60470a360fbbe0f263032"
      )
      .then((data) => {
        return data.data;
      });
  }
};

export const weatherServices = {
  getWeatherData,
  Rainly,
  sunsetData_Liverpool,
  sunsetData_Bristol,
  getCurrentData,
};
