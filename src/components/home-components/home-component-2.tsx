import { useAppDispatch, useAppSelector } from "../../utils/helpers";
import { useEffect } from "react";
import { GetWeatherDataA } from "../../actions/weather-actions";
import DefaultWindComponent from "../defaultComponents/default-wind-component";
import home_component2styles from "./home-component2.style.module.css";
const HomeComponent2 = () => {
  const dispatch = useAppDispatch();
  const { WeatherData,searchItem } = useAppSelector((state) => state.weatherReducer);
  useEffect(() => {
    dispatch(GetWeatherDataA(searchItem));
  }, []);
  return (
    <div className={home_component2styles.Container}>
      <div className={home_component2styles.child}>
        <h3>Air Quality Index</h3>
        <span>
          <img
            src="/location.png"
            width="22px"
            height="20px"
            alt=""
          />
          {WeatherData?.all?.city?.name}
          <input alt="" type="image" src="/arrowtoButtom.webp" width="15px" className={home_component2styles.arrow}/>
        </span>
      </div>
      <div className={home_component2styles.container}>
        {WeatherData?.data?.map((data: any, index: number) => {
          return (
            <DefaultWindComponent
              key={index}
              speed={data.wind.speed}
              date={new Date(data.dt_txt).getDay()}
            />
          );
        })}
      </div>
    </div>
  );
};
export default HomeComponent2;
