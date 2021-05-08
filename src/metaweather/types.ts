export interface WeatherView {
  weather_state_name: string;
  min_temp: number;
  max_temp: number;
  wind_speed: number;
}

export interface LocationSearchRead {
  title: string; // Name of the location
  location_type: string; // (City|Region / State / Province|Country|Continent)
  latt_long: string; // Comma separated
  woeid: number; // Where On Earth ID
  distance?: number; // Metres. Only returned on a lattlong search
}

export interface LocationDataRead {
  consolidated_weather: ConsolidatedWeather[];
  time: Date;
  sun_rise: Date;
  sun_set: Date;
  timezone_name: string;
  parent: Parent;
  sources: Source[];
  title: string;
  location_type: string;
  woeid: number;
  latt_long: string;
  timezone: string;
}

export interface ConsolidatedWeather {
  id: number;
  weather_state_name: string;
  weather_state_abbr: string;
  wind_direction_compass: string;
  created: Date;
  applicable_date: string;
  min_temp: number;
  max_temp: number;
  the_temp: number;
  wind_speed: number;
  wind_direction: number;
  air_pressure: number;
  humidity: number;
  visibility: number;
  predictability: number;
}

export interface Parent {
  title: string;
  location_type: string;
  woeid: number;
  latt_long: string;
}

export interface Source {
  title: string;
  slug: string;
  url: string;
  crawl_rate: number;
}
