import React, { useState } from "react";

//api
import { fetchWeather } from "../api/fetchWeather";

const Search = () => {
  const [query, setQuery] = useState(" ");
  const [weather, setWeather] = useState(" ");

  const queryHandler = (event) => {
    setQuery(event.target.value);
  };

  const search = async (event) => {
    if (event.key === "Enter") {
      const data = await fetchWeather(query);
      setWeather(data);
      setQuery(" ");
    }
  };

  return (
    <div className="flex flex-col gap-y-4 md:text-xl mt-8">
      <div className="">
        <input
          className="bg-white block pl-6 rounded-xl p-2 focus:ring-2 focus:ring-blue-300 font-bold placeholder:text-slate-400 placeholder:italic shadow-sm focus:outline-none "
          type="text"
          placeholder="Search the city ..."
          value={query}
          onChange={queryHandler}
          onKeyPress={search}
        />
      </div>
        {weather.main && (
          <div className="bg-white flex justify-center items-center rounded-xl pb-5 text-center">
          <div>
            <div className="pt-10">
              <span className="text-2xl pr-2 font-extrabold">
                {weather.name}
              </span>
              <sup className="p-1 bg-red-400 font-bold rounded-full">
                {weather.sys.country}
              </sup>
            </div>
            <div className="pt-2 font-bold italic">
              <span className="text-8xl font-extrabold font-serif ">
                {Math.round(weather.main.temp)}
              </span>
              <sup className="pl-4 text-2xl italic">&deg;C</sup>
            </div>
            <div className="">
              <img
                className="text-center"
                src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
                alt={weather.weather[0].description}
              />
              <p className="font-bold text-2xl">
                {weather.weather[0].description}
              </p>
            </div>
          </div>
          </div>
        )}
    </div>
  );
};

export default Search;
