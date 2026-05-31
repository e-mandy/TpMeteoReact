import { useState } from "react";
import { MeteoContext } from "../context/meteo.context";
import type { WeatherInfo } from "../types/weatherInfo..types";

const MeteoProvider = ({ children }: { children: React.ReactNode }) => {
  const [meteo, setMeteo] = useState<WeatherInfo | null>(null);

  const setValue = (meteo: WeatherInfo) => {
    setMeteo(meteo);
  };

  return (
    <MeteoContext.Provider value={{ value: meteo, setValue }}>
      {children}
    </MeteoContext.Provider>
  );
};

export default MeteoProvider;
