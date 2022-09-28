import { useEffect } from "react";
import { GetBristolData } from "../../../actions/weather-actions";
import { getLocation, useAppDispatch, useAppSelector } from "../../../utils/helpers";
import DefaultComponent5Child from "../../defaultComponents/default-component-5-child";
import ChildStyles from "./home-component-5-child4.style.module.css";

const HomeComponent5Child4 = () => {
  const { Bristol } = useAppSelector((state) => state.weatherReducer);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(GetBristolData());
  }, []);
  return (
    <>
      <div className={ChildStyles.Container}>
        <div className={ChildStyles.child}>
        {Bristol?.current_condition?.map(
          (data: current_condition, index: number) => {
            return (
              <DefaultComponent5Child
                key={index}
                bgColor={"#F4B267"}
                wind={data.windspeedKmph}
                hum={data.humidity}
                location={getLocation(Bristol.request[0].query)}
                temp={data.temp_C}
              />
            );
          }
        )}
        </div>
      </div>
    </>
  );
};
export default HomeComponent5Child4;
