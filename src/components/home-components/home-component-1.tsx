import { useEffect } from "react";
import { GetWeatherDataA } from "../../actions/weather-actions";
import {
  KelvinToCelcius,
  useAppDispatch,
  useAppSelector,
} from "../../utils/helpers";
import DWeatherComponent from "../defaultComponents/default-weather-component";
import Home1Time from "./home1-component-time";
import Home1Styles from "./home-component1.style.module.css";
import MapComponent from "../MapComponent/map-component";

const HomeComponent1 = () => {
  const dispatch = useAppDispatch();
  const { WeatherData, searchItem } = useAppSelector(
    (state) => state.weatherReducer
  );
  useEffect(() => {
    dispatch(GetWeatherDataA(searchItem));
  }, []);
  console.log(WeatherData)
  return (
    <>
      <div className={Home1Styles.Container}>
        <div>
          <Home1Time />
          {/* <MapComponent lat={WeatherData?.all?.city?.coord?.lat} lng={WeatherData?.all?.city?.coord?.lon}/> */}
        </div>
        <div className={Home1Styles.datas}>
          {WeatherData?.data?.map((data: any, index: number) => {
            return (
              <DWeatherComponent
                key={index}
                icon={`http://openweathermap.org/img/wn/${data.weather[0].icon}.png`}
                temp={Math.round(KelvinToCelcius(data.main.temp))}
                day={new Date(data.dt_txt).getDay()}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};
export default HomeComponent1;
