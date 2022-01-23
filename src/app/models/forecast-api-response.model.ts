import { ICurrentWeather } from "./current-weather.model";
import { IFullDailyForecast } from "./daily-forecast.model";
import { ILocation } from "./location.model";

export interface IForecastApiResponse {
    location: ILocation;
    current: ICurrentWeather;
    forecast: {
        forecastday: IFullDailyForecast[];
    };
}