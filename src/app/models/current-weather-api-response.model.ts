import { ICurrentWeather } from "./current-weather.model";
import { ILocation } from "./location.model";

export interface ICurrentWeatherApiResponse { 
    location: ILocation;
    current: ICurrentWeather;
}