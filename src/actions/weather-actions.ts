import { weatherServices } from "../services/weather-service";
import {
  AgetRainData,
  AgetSunData,
  getBristolData,
  getCurrentData,
  getLiverpoolData,
  getWeatherData,
  RainRequest,
  setActiveNumber,
  setSearchItem,
} from "../store/reducers/weather-reducers/weather-redcer";

export const GetWeatherDataA = (searchItem:string) => (dispatch: (xxx: any) => Weather) => {
  weatherServices
    .getWeatherData(searchItem)
    .then((data) => dispatch(getWeatherData(data)));
};

export const getRainData = () => (dispatch: (xxx: any) => any) => {
  weatherServices.Rainly().then((data) => {
    dispatch(RainRequest(data.allData));
    dispatch(AgetRainData(data.data.rainData))
    dispatch(AgetSunData(data.data.SunData))
  });
};

export const GetLiverpoolData = () => (dispatch : (xxx:any) =>Weather)=>{
  weatherServices.sunsetData_Liverpool().then((data)=>dispatch(getLiverpoolData(data)))
}

export const GetBristolData = () => (dispatch : (xxx:any) => Weather) =>{
  weatherServices.sunsetData_Bristol().then((data)=>dispatch(getBristolData(data)))
}

export const GetCurrentData = (location:string) => (dispatch : (xxx:any) =>any) =>{
  weatherServices.getCurrentData(location).then((data)=>dispatch(getCurrentData(data)))
}

export const SetActiveNumber = (number:number) => (dispatch : (xxx:any) => any )=>{
  dispatch(setActiveNumber(number))
}

export const SetSearchData = (data:string) => (dispatch : (xxx:any) =>any) =>{
  dispatch(setSearchItem(data))
}