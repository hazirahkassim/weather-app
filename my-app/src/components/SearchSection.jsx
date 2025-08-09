import React from "react";

const SearchSection = ({getWeatherDetails,searchInputRef}) => {
    const API_KEY = import.meta.env.VITE_API_KEY;

    //Handles city search
    const handleCitySearch = (e) => {
        e.preventDefault();
        const searchInput = e.target.querySelector(".search-input");
        const API_URL = `http://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${searchInput.value}&days=2`;
        getWeatherDetails(API_URL); //Fetche weather details
        console.log(searchInput.value)
    }

    const handleLocationSearch = () => {
      navigator.geolocation.getCurrentPosition(
        position => {
          const{latitude, longitude} = position.coords;
          const API_URL = `http://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${latitude},${longitude}&days=2`;
        getWeatherDetails(API_URL); //Fetche weather details
        window.innerWidth >=768 && searchInputRef.current.focus();
        },
        () => {
          alert("Location access denied. Please enable permissions to use this feature");
        }
      )
    }
  return (
    <div className="search-section">
      <form action="#" className="search-form" onSubmit={handleCitySearch}>
        <span className="material-symbols-rounded">search</span>
        <input
          type="search"
          placeholder="Enter a city name"
          className="search-input" ref={searchInputRef}
          required
        />
      </form>
      <button className="location-button" onClick={handleLocationSearch}>
        <span className="material-symbols-rounded">my_location</span>
      </button>
    </div>
  );
};

export default SearchSection;
