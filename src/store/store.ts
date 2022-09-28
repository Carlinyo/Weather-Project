import { configureStore } from "@reduxjs/toolkit";
import weatherRedcer from "./reducers/weather-reducers/weather-redcer";

export const store = configureStore({
    reducer:{
        weatherReducer:weatherRedcer
    },
    middleware:getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    })
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch