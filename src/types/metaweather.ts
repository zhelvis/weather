export interface MetaWeatherSearchRead {
  title: string;
  location_type: string; // (City|Region / State / Province|Country|Continent)
  latt_long: string; // Comma separated
  woeid: number; // Where On Earth ID
  distance?: number; // Metres. Only returned on a lattlong search
}

export interface MetaWeatherDataRead {
  consolidated_weather: MetaWeatherConsolidatedWeather[];
  time: Date; // Time in location
  sun_rise: Date;
  sun_set: Date;
  timezone_name: string; //	Name of the timezone that the location is in
  parent: MetaWeatherParent;
  sources: MetaWeatherSource[];
  title: string; // Name of the location
  location_type: string; // (City|Region / State / Province|Country|Continent)
  woeid: number; // Where On Earth ID
  latt_long: string; // Comma separated
  timezone: string;
}

export interface MetaWeatherConsolidatedWeather {
  id: number; // Internal identifier for the forecast
  weather_state_name: string; // Text description of the weather state
  weather_state_abbr: string; // One or two letter abbreviation of the weather state
  wind_direction_compass: string; // Compass point of the wind direction
  created: Date;
  applicable_date: string; // Date that the forecast or observation pertains to
  min_temp: number; // Celsius
  max_temp: number; // Celsius
  the_temp: number; // Celsius
  wind_speed: number; // Mph
  wind_direction: number; // Degrees
  air_pressure: number; // Mbar
  humidity: number; // Percentage
  visibility: number; // Miles
  predictability: number; // Percentage. Interpretation of the level to which the forecasters agree with each other - 100% being a complete consensus.
}

export interface MetaWeatherParent {
  title: string; // Name of the parent location
  location_type: string; // (City|Region / State / Province|Country|Continent)
  woeid: number; // Where On Earth ID
  latt_long: string; // Comma separated
}

export interface MetaWeatherSource {
  title: string; // Name of the source
  slug: string;
  url: string; // URL of the source
  crawl_rate: number;
}
