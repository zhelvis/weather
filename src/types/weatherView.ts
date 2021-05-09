export interface WeatherView {
  weather_state_name: string; // Text description of the weather state
  min_temp: number | string; //Celsius, string if no data
  max_temp: number | string; //Celsius, string if no data
  wind_speed: number | string; // meter/sec, string if no data
}
