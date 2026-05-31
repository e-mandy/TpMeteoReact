import { createContext } from "react";
import type { WeatherInfo } from "../types/weatherInfo..types";

interface MeteoContextType {
  value: WeatherInfo | null;
  setValue: (value: WeatherInfo) => void;
}

export const MeteoContext = createContext<MeteoContextType>({
  value: null,
  setValue: () => {},
});
