import { useEffect, useState } from "react";
import { makeDate, sayHello } from "../../utils/helpers";
import Home1Styles from "./home-component1.style.module.css";

const Home1Time = () => {
  const [time, setTime] = useState(
    new Date().getMinutes() < 10
      ? new Date().getHours() + ":" + "0" + new Date().getMinutes()
      : new Date().getHours() + ":" + new Date().getMinutes()
  );
  let date = new Date() + "";
  useEffect(() => {
    setInterval(() => {
      setTime(
        new Date().getMinutes() < 10
          ? new Date().getHours() + ":" + "0" + new Date().getMinutes()
          : new Date().getHours() + ":" + new Date().getMinutes()
      );
    }, 40000);
  }, [time]);

  return (
    <div className={Home1Styles.Times}>
      <h1 style={{ color: "#5C92FF", fontSize: "40px", paddingTop: "30px" }}>
        {time}
      </h1>
      <h3>{makeDate(date)}</h3>
      <h2 style={{ color: "#5C92FF" }}>{sayHello()}</h2>
    </div>
  );
};
export default Home1Time;
