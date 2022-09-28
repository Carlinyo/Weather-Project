import { useEffect } from "react";
import { GetLiverpoolData } from "../../../actions/weather-actions";
import { getLocation, useAppDispatch, useAppSelector } from "../../../utils/helpers";
import DefaultComponent5Child from "../../defaultComponents/default-component-5-child";
import Child3Styles from './home-component-5-child3.style.module.css'


const HomeComponent5Child3 = () => {
  const { Liverpool } = useAppSelector((state) => state.weatherReducer);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(GetLiverpoolData())
  }, []);
  return (
    <>
      {
        Liverpool?.current_condition?.map((data:current_condition,index:number)=>{
          return(
            <DefaultComponent5Child key={index} wind={data.windspeedKmph} hum={data.humidity} location={getLocation(Liverpool.request[0].query)} bgColor={'#FF75A5'} temp={data.temp_C}/>
          )
        })
      }
    </>
  );
};
export default HomeComponent5Child3;
