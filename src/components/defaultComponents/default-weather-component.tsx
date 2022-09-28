import React from "react";
import { GetDay } from "../../utils/helpers";
import defaultHomeStyles from "./home1-default.style.module.css"

interface defaultWeather {
    icon: string;
    temp: number;
    day: number;
}

const DWeatherComponent: React.FC<defaultWeather> = ({ icon, temp, day }) => {
    return (
        <>
            <div className={defaultHomeStyles.dayCard}>
                <img alt="" src={icon} />
                <div className={defaultHomeStyles.dayCardChild}>
                    <p>{GetDay(day)}</p>
                    <span>{temp}°C</span>
                </div>
            </div>
        </>
    )
}

export default DWeatherComponent