import HomeComponent1 from "../../components/home-components/home-component-1";
import HomeComponent2 from "../../components/home-components/home-component-2";
import HomeComponent3 from "../../components/home-components/home-component-3";
import HomeComponent4 from "../../components/home-components/home-component-4";
import HomeComponent5 from "../../components/home-components/home-component-5";
import MenuComponent from "../../components/home-components/menu-component";
import { MenuIcons } from "../../mocks/MenuIcons";
import { useAppSelector } from "../../utils/helpers";
import Homestyles from "./style.module.css";

const Home = () => {
  const { active } = useAppSelector((state) => state.weatherReducer);
  return (
    <div className={Homestyles.container}>
      <div className={Homestyles.Container}>
        <HomeComponent1 />
        <div className={Homestyles.three_divs_container}>
          <div className={Homestyles.three_divs_container_child}>
            <HomeComponent2 />
            <HomeComponent3 />
          </div>
          <HomeComponent4 />
          <div className={Homestyles.menu}>
            <div className={Homestyles.menuDiv}>
              {
                active === 0 &&
                <div className={Homestyles.FirstmenudivChild1}></div>
              }
              {
              active !== 0 &&
              <div className={Homestyles.menudivChild1}></div>
              }
              <MenuComponent />
              {
                active === MenuIcons.length-1 &&
              <div className={Homestyles.EndmenudivChild2}></div>
              }
              {
                active !==MenuIcons.length -1 &&
                <div className={Homestyles.menudivChild2}></div>
              }
            </div>
          </div>
        </div>
      </div>
      <HomeComponent5 />
    </div>
  );
};
export default Home;
