import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../store/store";

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const makeDate = (date: string): string => {
  return (
    date.substring(0, 3) +
    "," +
    date.substring(4, 10) +
    "," +
    date.substring(10, 16)
  );
};
export const sayHello = (): string => {
  let date = new Date().getHours() + "";
  let helloWords = "";
  if (+date > 6 && +date < 12) {
    helloWords = "Good Morning";
  } else if (+date > 12 && +date < 19) {
    helloWords = "Good Day";
  } else {
    helloWords = "Good Night";
  }
  return helloWords;
};

export const getDay = (day: number) => {
  return new Date(day * 1000) + "";
};

export const GetDay = (day: number) => {
  if (day === 0) {
    return "Mon";
  } else if (day === 1) {
    return "Tue";
  } else if (day === 2) {
    return "Wed";
  } else if (day === 3) {
    return "Thu";
  } else if (day === 4) {
    return "Fri";
  } else if (day === 5) {
    return "Sat";
  } else if (day === 6) {
    return "Sun";
  }
};

export const KelvinToCelcius = (kelvin: number) => {
  return kelvin - 273.15
};

export const getFullDay = (day: number) => {
  if (day === 0) {
    return "Monday";
  } else if (day === 1) {
    return "Tuesday";
  } else if (day === 2) {
    return "Wednesday";
  } else if (day === 3) {
    return "Thursday";
  } else if (day === 4) {
    return "Friday";
  } else if (day === 5) {
    return "Saturday";
  } else if (day === 6) {
    return "Sunday";
  }
};

export const getLocation = (location: any) => {
  let test;
  if (location) {
    test = location.split(" ");
  } else {
    return false;
  }

  if (test.length === 0) {
    return test.join(" ");
  } else {
    location = location.split(", ");
    return location[0];
  }
};


export const GetLocation = (data:any) =>{
    let Data: Array<any> = [];
    for (let i = 0; i < data.data.list.length; i++) {
      if (
        i === 0 ||
        i === 3 ||
        i === 11 ||
        i === 19 ||
        i === 28 ||
        i === 36
      ) {
        Data.push(data.data.list[i]);
      }
    }
    let AllData = { data: Data, all: data.data };
    return AllData;
}