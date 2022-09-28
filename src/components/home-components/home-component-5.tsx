import HomeComponent5Child1 from "./home-component-5-childs/home-component-5-child1";
import HomeComponent5Child2 from "./home-component-5-childs/home-component-5-child2";
import HomeComponent5Child3 from "./home-component-5-childs/home-component-5-child3";
import HomeComponent5Child4 from "./home-component-5-childs/home-component-5-child4";
import HomeComponent5Styles from "./home-component-5.style.module.css";

const HomeComponent5 = () => {
  return (
    <div className={HomeComponent5Styles.container}>
      <HomeComponent5Child1 />
      <HomeComponent5Child2 />
      <HomeComponent5Child3/>
      <HomeComponent5Child4/>
    </div>
  );
};

export default HomeComponent5;
