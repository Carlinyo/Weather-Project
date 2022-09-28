import { createSlice, Slice } from "@reduxjs/toolkit";
import { WeatherTypes } from "../../../constants/weather-types";
import { WeaterState } from "../../states/weather-state/weather-state";

const weatherReducer: Slice = createSlice({
  name: WeatherTypes.Weather,
  initialState: WeaterState,
  reducers: {
    getWeatherData(state, action) {
      state.WeatherData = action.payload;
    },
    RainRequest(state, action) {
      state.Rainly = action.payload;
    },
    AgetRainData(state, action) {
      state.rainlyData = action.payload;
    },
    AgetSunData(state, action) {
      state.sunData = action.payload;
    },
    getLiverpoolData(state, action) {
      state.Liverpool = action.payload;
    },
    getBristolData(state,action){
      state.Bristol = action.payload
    },
    getCurrentData(state,action){
      state.CurrentData=action.payload
    },
    setActiveNumber(state,action){
      state.active = action.payload
    },
    setSearchItem(state,action){
      state.searchItem = action.payload
    }
  },
});

export const {
  getWeatherData,
  RainRequest,
  AgetRainData,
  AgetSunData,
  getLiverpoolData,
  getBristolData,
  getCurrentData,
  setActiveNumber,
  setSearchItem
} = weatherReducer.actions;
export default weatherReducer.reducer;
