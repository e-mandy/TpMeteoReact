import { useContext, useState } from "react";
import { MeteoContext } from "../context/meteo.context";
import { weatherData } from "../constants/weather.constants";
import toast from "react-hot-toast";
import { refreshPromise } from "../api/refresh.api";

export type Country = "Cotonou" | "Paris" | "Tokyo" | "Montreal";

export const useMeteo = () => {
  const meteo = useContext(MeteoContext);
  const [error, setError] = useState<null | string>(null);
  const [isLoading, setIsLoading] = useState(false);

  const setMeteoValue = async (currentCountry: Country) => {
    setIsLoading(true);
    await setTimeout(() => {
      const countriesValue = Object.entries(weatherData);

      const targetCountry = countriesValue.find(
        (country) => country[0] == currentCountry,
      );

      if (!targetCountry) {
        setError("Ce pays n'apparaît pas dans la liste !!");
        return;
      }

      meteo.setValue(targetCountry[1]);
      setIsLoading(false);
    }, 2000);
  };

  const refresh = async () => {
    setIsLoading(true);
    toast.promise(refreshPromise, {
      loading: "Chargement des données",
    });
    await setTimeout(() => {
      console.log("Rechargement");
      setIsLoading(false);
      toast.success("Données chargées avec succès");
    }, 2000);
  };

  return { data: meteo.value, setMeteoValue, error, isLoading, refresh };
};
