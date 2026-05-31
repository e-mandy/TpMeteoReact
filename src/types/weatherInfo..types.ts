export interface WeatherInfo {
  temp: number;
  humidity: number;
  condition: "sunny" | "cloudy" | "rainy" | "snowy";
}
