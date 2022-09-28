import { useEffect } from "react";
import {
  GetBristolData,
  GetLiverpoolData,
  GetWeatherDataA,
} from "../../actions/weather-actions";
import { useAppDispatch, useAppSelector } from "../../utils/helpers";
import DefaultChild2 from "../defaultComponents/default-child2";
import DefaultHomeComponent4child1 from "../defaultComponents/default-home-component-4-child1";
import HomeComponent4Styles from "./home-component-4.style.module.css";

const HomeComponent4 = () => {
  const { Liverpool, Bristol, WeatherData,searchItem } = useAppSelector(
    (state) => state.weatherReducer
  );
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(GetWeatherDataA(searchItem));
    dispatch(GetLiverpoolData());
    dispatch(GetBristolData());
  }, []);
  return (
    <div className={HomeComponent4Styles.container}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <h2 style={{ marginTop: "0", fontSize: "16px", letterSpacing: "1px" }}>
          Sunrise & Sunset
        </h2>
        <input type="image" src="/plus.png" width="20px" alt=""/>
      </div>
      <div className={HomeComponent4Styles.first_second}>
        <div>
          <DefaultHomeComponent4child1
            location={WeatherData?.all?.city.name}
            sunrise={
              new Date(WeatherData?.all?.city.sunrise).getHours() +
              ":" +
              new Date(WeatherData?.all?.city.sunrise).getMinutes() +
              " AM"
            }
            sunset={
              new Date(WeatherData?.all?.city.sunset).getHours() +
              ":" +
              new Date(WeatherData?.all?.city.sunset).getMinutes() +
              " PM"
            }
          />

          {Bristol?.weather?.map((data: weather, index: number) => {
            return (
              <DefaultHomeComponent4child1
                key={index}
                location={Bristol.request[0].query}
                sunrise={data.astronomy[0].sunrise}
                sunset={data.astronomy[0].sunset}
              />
            );
          })}
        </div>
      </div>
      <div>
        <div>
          <DefaultChild2
            location={WeatherData?.all?.city.name}
            sunset={
              new Date(WeatherData?.all?.city.sunrise).getHours() +
              ":" +
              new Date(WeatherData?.all?.city.sunrise).getMinutes() +
              " AM"
            }
            sunrise={
              new Date(WeatherData?.all?.city.sunset).getHours() +
              ":" +
              new Date(WeatherData?.all?.city.sunset).getMinutes() +
              " PM"
            }
          />
        </div>
        <div>
          {Liverpool?.weather?.map((data: weather, index: number) => {
            return (
              <DefaultChild2
                key={index}
                location={Liverpool.request[0].query}
                sunset={data.astronomy[0].sunset}
                sunrise={data.astronomy[0].sunrise}
              />
            );
          })}
        </div>
        <div>
          {Bristol?.weather?.map((data: weather, index: number) => {
            return (
              <DefaultChild2
                key={index}
                location={Bristol.request[0].query}
                sunset={data.astronomy[0].sunset}
                sunrise={data.astronomy[0].sunrise}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};
export default HomeComponent4;
