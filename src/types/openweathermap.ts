export interface OpenWeatherMapDataRead {
  coord: OpenWeatherMapCoord;
  weather: OpenWeatherMapWeather[];
  base: string;
  main: OpenWeatherMapMain;
  visibility: number;
  wind: OpenWeatherMapWind;
  rain?: OpenWeatherMapRain;
  snow?: OpenWeatherMapSnow;
  clouds: OpenWeatherMapClouds;
  dt: number; // Data receiving time UTC
  sys: OpenWeatherMapSys;
  timezone: number;
  id: number; // City identification
  name: string; // City name
  cod: number;
}

export interface OpenWeatherMapCoord {
  lon: number; // City geo location, longitude
  lat: number; // City geo location, latitude
}

export interface OpenWeatherMapWeather {
  id: number; //Weather condition id
  main: string; // Group of weather parameters (Rain, Snow, Extreme etc.)
  description: string; // Weather condition within the group
  icon: string; // Weather icon id
}

export interface OpenWeatherMapMain {
  temp: number; // Temperature
  feels_like: number;
  temp_min: number; // Kelvin. Minimum temperature at the moment. This is deviation from current temp that is possible for large cities and megalopolises geographically expanded
  temp_max: number; // Kelvin. Maximum temperature at the moment. This is deviation from current temp that is possible for large cities and megalopolises geographically expanded
  pressure: number; // hPa. Atmospheric pressure (on the sea level, if there is no sea_level or grnd_level data)
  sea_level?: number; // hPa. Atmospheric pressure on the sea level
  grnd_level?: number; // hPa. Atmospheric pressure on the ground level
  humidity: number; // %
}

export interface OpenWeatherMapWind {
  speed: number; // Meter/sec, Wind speed
  deg: number; // Degrees, Wind direction
  gust?: number; // Meter/sec, meter/sec
}

export interface OpenWeatherMapRain {
  "1h"?: number; // mm, Precipitation volume for last hour
  "3h"?: number; // mm, Precipitation volume for last 3 hours
}

export interface OpenWeatherMapSnow {
  "1h"?: number; // mm, Snow volume for last hour
  "3h"?: number; // mm, Snow volume for last 3 hours
}

export interface OpenWeatherMapClouds {
  all: number; // %, Cloudiness
}

export interface OpenWeatherMapSys {
  type: number;
  id: number;
  country: string; // Country code (GB, JP etc.)
  sunrise: number; // Sunrise time UTC
  sunset: number; // Sunset time UTC
}
