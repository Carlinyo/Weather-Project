import { useEffect } from "react";
import { GetCurrentData, SetSearchData } from "../../../actions/weather-actions";
import {
  getFullDay,
  KelvinToCelcius,
  useAppDispatch,
  useAppSelector,
} from "../../../utils/helpers";
import DefaultComponent5Child from "../../defaultComponents/default-component-5-child";
import Child2Styles from "./home-component-5-child2.style.module.css";

const HomeComponent5Child2 = () => {
  const { CurrentData,searchItem } = useAppSelector((state) => state.weatherReducer);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(GetCurrentData(searchItem));
  }, []);

  return (
    <>
            <div className={Child2Styles.Container}>
              <h2 style={{color:'white'}}>
                <img src="/whitelocation.png" width="30px" alt=""/>
                {CurrentData?.name}
                <input
                  alt=""
                  type="image"
                  src="/arrowDownWhite.png"
                  name="arrow"
                  width="15px"
                />
              </h2>
              <div className={Child2Styles.about}>
                <img alt="" src={`http://openweathermap.org/img/wn/${CurrentData?.weather?.map((data:any)=>data.icon)}.png`} width="110px"/>
                <h3>Today, {new Date().getDate()} {getFullDay(new Date().getDay())}</h3>
                <h1>{Math.round(KelvinToCelcius(CurrentData?.main?.temp))}°</h1>
                <h3>{CurrentData?.weather?.map((data:any)=>data.main)}</h3>
                <DefaultComponent5Child wind={CurrentData?.wind?.speed} hum={CurrentData?.main?.humidity}/>
              </div>
              {
                CurrentData?.weather?.map((data:any)=>data.main)[0] === 'Sunny' &&
                <img alt="" src="/realSun.png" className={Child2Styles.realSun}/>
              }
              {
                CurrentData?.weather?.map((data:any)=>data.main)[0] === 'Clouds' &&
                <img alt="" src="/clouds.png"  className={Child2Styles.Clouds}/>
              }
            </div>
    </>
  );
};

export default HomeComponent5Child2;
