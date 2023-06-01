import React, { useState, useEffect } from "react";
import axios from "axios";
import Search from "./components/Search/Search";
import WeatherInfo from "./components/Data/WeatherInfo";

function App() {
  const [data, setData] = useState({});
  const [location, setLocation] = useState("");

  useEffect(() => {
    // Retrieve last selected location from local storage
    const storedLocation = localStorage.getItem("selectedLocation");
    if (storedLocation) {
      setLocation(storedLocation);
      handleSearch();
    }
    // Trigger search when the app connects
  }, []);

  const handleSelectChange = (event) => {
    const selectedLocation = event.target.value;
    setLocation(selectedLocation);
    // Store selected location in local storage
    localStorage.setItem("selectedLocation", selectedLocation);
  };

  const handleSearch = () => {
    if (location) {
      // api
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=imperial&appid=361f9f7999dc3ed4a254719cb55ffa55`;

      // axios
      axios.get(url).then((response) => {
        setData(response.data);
        console.log(response.data);
      });
    }
  };

  return (
    <div className="app">
      <Search
        location={location}
        handleSelectChange={handleSelectChange}
        handleSearch={handleSearch}
      />
      <WeatherInfo data={data} />
      <footer style={{ textAlign: "center", marginTop: "20px" }}>
        &copy; {new Date().getFullYear()} Khaled All rights reserved.
      </footer>
    </div>
  );
}

export default App;
