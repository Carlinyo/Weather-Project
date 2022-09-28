import { SetActiveNumber } from "../../actions/weather-actions";
import { MenuIcons } from "../../mocks/MenuIcons";
import { useAppDispatch, useAppSelector } from "../../utils/helpers";
import MenuStyles from "./menu.style.module.css";

const MenuComponent = () => {
  const {active} = useAppSelector((state)=>state.weatherReducer)
  const dispatch = useAppDispatch()
  return (
    <>
      <div className={MenuStyles.container}>
        {MenuIcons.map((data: string, index: number) => {
          return (
            <div key={index} className={MenuStyles.canvas}>
              {active === index && (
                <div
                  onClick={() => dispatch(SetActiveNumber(index))}
                  className={MenuStyles.active}
                >
                  <img alt="" src={data} width="30px" />
                </div>
              )}
              {active !== index && (
                <div
                  onClick={() => dispatch(SetActiveNumber(index))}
                  style={{ position: "relative" }}
                  className={MenuStyles.disabled}
                >
                  <img alt="" src={data} width="30px" />
                </div>
              )}
            </div>
          );
        })}
      </div>
    </>
  );
};
export default MenuComponent;
