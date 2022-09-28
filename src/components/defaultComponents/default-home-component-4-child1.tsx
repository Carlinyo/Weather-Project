import React from "react";
import { getLocation } from "../../utils/helpers";
import child1Styles from "./default-child1.style.module.css"


interface Child1 {
  location: string;
  sunrise: string;
  sunset: string;
}

const DefaultHomeComponent4child1: React.FC<Child1> = ({
  location,
  sunrise,
  sunset,
}) => {
  return (
    <div className={child1Styles.container}>
      <div className={child1Styles.title}>
      <h3>
        <img alt="" src="/location.png" width='20px'/>
        { getLocation(location)}
      </h3>
      <input alt="" type="image" src="/menu.png" width="35px" height="35px"/>
      </div>
      <div className={child1Styles.sunrise_sunset}>
        <div className={child1Styles.Sunrise_Sunset}>
          <img alt="" src="/sun.png"  width="50px"/>
          <div className={child1Styles.child}>
            <span>Sunrise</span>
            <p>{sunrise}</p>
          </div>
        </div>
        <div className={child1Styles.Sunrise_Sunset}>
            <img alt="" src="/moon.png" width="50px"/>
          <div className={child1Styles.child}>
            <span>Sunset</span>
            <p>{sunset}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default DefaultHomeComponent4child1;
