import { RefreshCcw } from "lucide-react";
import StatsCard from "../components/StatsCard";
import { weatherData } from "../constants/weather.constants";
import { useMeteo, type Country } from "../hooks/useMeteo";
import { useEffect, useState } from "react";
import { ClipLoader } from "react-spinners";

const Dashboard = () => {
  const { data, setMeteoValue, isLoading, refresh } = useMeteo();
  const [currentCountry, setCurrentCountry] = useState<Country>("Cotonou");

  const handleChange = (event) => {
    const country = event.target.value;
    setCurrentCountry(country);
    setMeteoValue(country);
  };

  const countryData = Object.entries(weatherData);

  useEffect(() => {
    setMeteoValue("Cotonou");
  }, []);

  return (
    <div className=" bg-[#fcfcfc] h-full">
      <div className="flex flex-col m-auto md:w-2/3 pt-10">
        <div className="flex justify-between mb-8 items-center">
          <div>
            <p>{currentCountry}</p>
          </div>
          <div className="flex items-center gap-8">
            <div>
              <button
                className="flex items-center gap-2 cursor-pointer bg-[#2b8ac9] py-1 px-2 rounded-lg text-white text-sm"
                onClick={refresh}
              >
                Refresh <RefreshCcw size={18} />
              </button>
            </div>
            <div>
              <select name="country" id="country" onChange={handleChange}>
                <option disabled selected>
                  Select a country
                </option>
                {countryData.map((country, index) => {
                  return (
                    <option
                      value={country[0]}
                      key={index}
                      className="text-black"
                    >
                      {country[0]}
                    </option>
                  );
                })}
              </select>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-6 justify-between">
          <StatsCard
            title="Temp"
            value={isLoading ? <ClipLoader /> : data?.temp}
          />
          <StatsCard
            title="Humidity"
            value={isLoading ? <ClipLoader /> : data?.humidity}
          />
          <StatsCard
            title="Condition"
            value={isLoading ? <ClipLoader /> : data?.condition}
          />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
