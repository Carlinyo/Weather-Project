import React from "react";
import { getLocation } from "../../utils/helpers";
import DefaultChild2Styles from "./default-child2Styles.style.module.css"

interface DefaultChild2Int {
  location: string;
  sunset: string;
  sunrise: string;
}

const DefaultChild2: React.FC<DefaultChild2Int> = ({
  location,
  sunset,
  sunrise,
}) => {
  return (
    <>
        <div className={DefaultChild2Styles.container}>
            <span><img alt="" src="/orangeLocation.png" width="15px" />{getLocation(location)}</span>
            <p><img alt="" src="/sun.png" width="20px"/>{sunset}</p>
            <p><img alt="" src="/moon.png" width="25px"/>{sunrise}</p>
        </div>
    </>
  )
};
export default DefaultChild2;
