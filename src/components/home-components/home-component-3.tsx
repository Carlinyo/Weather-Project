import { useAppDispatch, useAppSelector } from "../../utils/helpers";
import { useEffect } from "react";
import { Bar } from "react-chartjs-2";
import home3Styles from "./home-component3.style.module.css";
import { getRainData } from "../../actions/weather-actions";

import { Chart as ChartJS, registerables } from "chart.js";
ChartJS.register(...registerables);

const HomeComponent3 = () => {
  const dispatch = useAppDispatch();
  const { rainlyData, sunData } = useAppSelector(
    (state) => state.weatherReducer
  );
  useEffect(() => {
    dispatch(getRainData());
  }, []);
  const options = {
    type:'line',
    plugins: {
      title: {
        display: true,
        text: "Monthly Rainfall",
      },
    },
    responsive: true,
    interaction: {
      mode: "index" as const,
      intersect: false,
    },
    scales: {
      x: {
        grid: {
          display:false
      },
      ticks:{
        display:false
      },
        stacked: true,
      },
      y: {
        grid: {
          display:false
      },
      ticks:{
        display:false
      },
        stacked: true,
      },
    },
  };
  const climateData: any = {
    labels: ["", "", "", "", "", "", "", "", "", "", "", ""],
    datasets: [
      {
        label: "Sun",
        data: sunData,
        backgroundColor: "orange",
        borderRadius: 15,
        borderWidth: {
          top: 3,
          bottom: 3,
          left: 8,
          right: 8,
        },
        borderColor: "rgba(0,0,0,0)",
      },
      {
        label: "Rain",
        data: rainlyData,
        backgroundColor: "rgb(124,167,255)",
        borderRadius: 15,
        borderWidth: {
          top: 3,
          bottom: 3,
          left: 8,
          right: 8,
        },
        borderColor: "rgba(0,0,0,0)",
      },
    ],
  };
  return (
    <>
      <div className={home3Styles.canvas}>
        <Bar options={options} data={climateData} />
      </div>
    </>
  );
};
export default HomeComponent3;
