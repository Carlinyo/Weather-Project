declare global{
    interface Weather{
        ClimateAverages:ClimateAverages[];
        current_condition:current_condition[];
        request:Request[];
        weather:weather[];
    }
    interface ClimateAverages{
        month:Month[];
    }
    interface Month{
        index:string;
        absMaxTemp:string;
        absMaxTemp_F:string;
        avgDailyRainfall:string;
        avgMinTemp:string;
        avgMinTemp_F:string;
        name:string;
    }
    interface current_condition{
        FeelsLikeC:string;
        FeelsLikeF:string;
        cloudcover:string;
        humidity:string;
        observation_time:string;
        precipInches:string;
        precipMM:string;
        pressure:string;
        pressureInches:string;
        temp_C:string;
        temp_F:string;
        uvIndex:string;
        visibility:string;
        visibilityMiles:string;
        weatherCode:string;
        weatherDesc:weatherDesc[];
        weatherIconUrl:weatherIconUrl[]
        winddir16Point:string;
        winddirDegree:string;
        windspeedKmph:string;
        windspeedMiles:string;
    }
    interface weatherDesc{
        value:string;
    }
    interface weatherIconUrl{
        value:string;
    }
    interface Request{
        query:string;
        type:string;
    }
    interface weather{
        astronomy:Astronomy[];
        avgtempC:string;
        avgtempF:string;
        date:string;
        hourly:Hourly[];
        maxtempC:string;
        maxtempF:string;
        mintempC:string;
        mintempF:string;
        sunHour:string;
        totalSnow_cm:string;
        uvIndex:string;
    }
    interface Astronomy{
        moon_illumination:string;
        moon_phase:string;
        moonrise:string;
        moonset:string;
        sunrise:string;
        sunset:string;
    }
    interface Hourly{
        DewPointC:string;
        DewPointF:string;
        FeelsLikeC:string;
        FeelsLikeF:string;
        HeatIndexC:string;
        HeatIndexF:string;
        WindChillC:string;
        WindChillF:string;
        WindGustKmph:string;
        WindGustMiles:string;
        chanceoffog:string;
        chanceoffrost:string;
        chanceofhightemp:string;
        chanceofovercast:string;
        chanceofrain:string;
        chanceofremdry:string;
        chanceofsnow:string;
        chanceofsunshine:string;
        chanceofthunder:string;
        chanceofwindy:string;
        cloudcover:string;
        humidity:string;
        precipInches:string;
        precipMM:string;
        pressure:string;
        pressureInches:string;
        tempC:string;
        tempF:string;
        time:string;
        uvIndex:string;
        visibility:string;
        visibilityMiles:string;
        weatherCode:string;
        weatherDesc:weatherDesc[];
        weatherIconUrl:weatherIconUrl[];
        winddir16Point:string;
        winddirDegree:string;
        windspeedKmph:string;
        windspeedMiles:string;
    }
    interface State{
        WeatherData:Weather[];
        Rainly:Weather[];
        sunData:number[];
        rainlyData:number[];
        Liverpool:Weather[];
        Bristol:Weather[];
        CurrentData:any[];
        active:number;
        searchItem:string;
    }
}

export {}