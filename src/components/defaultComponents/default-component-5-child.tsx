import React from "react";
import ChildStyle from "./default-component5-child.style.module.css";

interface ChildInt {
  wind: string;
  hum: string;
  location?: string;
  temp?: string;
  bgColor?:string;
}

const DefaultComponent5Child: React.FC<ChildInt> = ({
  wind,
  hum,
  location,
  temp,
  bgColor
}) => {
  return (
    <div className={ChildStyle.Container} style={{backgroundColor:bgColor}}>
      <div className={ChildStyle.container}>
        <p>
          <img alt="" src="/wind.png" width="20px"/>
          Wind <span className={ChildStyle.line}></span>
          {wind}km/h
        </p>
        <p><img alt="" src="/drop.png" width="20px"/>Hum <span className={ChildStyle.line}></span>{hum}</p>
      </div>
      {
            location && temp &&
            <div className={ChildStyle.location_temp}>
                <h4><img alt="" src="/whitelocation.png" width="30px"/>{location} <img alt="" src="/arrowDownWhite.png" width="30px"/></h4>
                <h2>{temp}°C</h2>
            </div>
        }
    </div>
  );
};

export default DefaultComponent5Child;
