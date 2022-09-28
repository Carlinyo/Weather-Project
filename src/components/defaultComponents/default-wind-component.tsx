import React from "react";
import { GetDay } from "../../utils/helpers";
import Home1DefaultStyles from "./home1-default.style.module.css"
interface DefaultWindComponentInt {
    speed: string;
    date: number;
}

const DefaultWindComponent: React.FC<DefaultWindComponentInt> = ({ speed, date }) => {
    return (
        <>
            <div className={Home1DefaultStyles.wind}>
                <p style={{margin:'0'}}>Day:{GetDay(date)}</p>
                <p style={{margin:'0'}}>Speed:{speed}km/h</p>
            </div>
        </>
    )
}
export default DefaultWindComponent