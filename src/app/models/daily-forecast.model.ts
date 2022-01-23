import { IBaseWeatherState, ICondition } from "./current-weather.model";

export interface IFullDailyForecast {
    date: string;
    date_epoch: number;
    day: IDayWeatherCondition,
    astro: IDayAstroCondition,
    hour: IHourForecast[]
}

interface IDayWeatherCondition {
    maxtemp_c: number;
    maxtemp_f: number;
    mintemp_c: number;
    mintemp_f: number;
    avgtemp_c: number;
    avgtemp_f: number;
    maxwind_mph: number;
    maxwind_kph: number;
    totalprecip_mm: number;
    totalprecip_in: number;
    avgvis_km: number;
    avgvis_miles: number;
    avghumidity: number;
    daily_will_it_rain: number;
    daily_chance_of_rain: number;
    daily_will_it_snow: number;
    daily_chance_of_snow: number;
    condition: ICondition,
    uv: number;
};

interface IDayAstroCondition {
    sunrise: string;
    sunset: string;
    moonrise: string;
    moonset: string;
    moon_phase: string;
    moon_illumination: number;
}

interface IHourForecast extends IBaseWeatherState {
    time_epoch: number;
    time: string;
    windchill_c: number;
    windchill_f: number;
    heatindex_c: number;
    heatindex_f: number;
    dewpoint_c: number;
    dewpoint_f: number;
    will_it_rain: number;
    chance_of_rain: number;
    will_it_snow: number;
    chance_of_snow: number;
}