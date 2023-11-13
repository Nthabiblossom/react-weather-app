import React from "react";

export default function WeatherSearch() {
  return (
    <div className="Form">
      <form>
        <input type="search" placeholder="enter a city" />
        <button type="submit">search</button>
      </form>
      <p>
        <a
          href="https://github.com/Nthabiblossom/react-weather-app"
          target="_blank"
          rel="noreferrer"
        >
          GitHub
        </a>
      </p>
    </div>
  );
}
