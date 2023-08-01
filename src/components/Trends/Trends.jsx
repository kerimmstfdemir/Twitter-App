import axios from "axios";
import { useState } from "react";

const Trends = () => {
  const [selectedCountry, setSelectedCountry] = useState("");
  const [trendTopics, setTrendTopics] = useState([]);

  const countries = [
    { code: "WW", name: "Worldwide", id: 1 },
    { code: "TR", name: "Turkey", id: 23424969 },
    { code: "US", name: "United States", id: 23424977 },
    { code: "GB", name: "United Kingdom", id: 23424975 },
  ];

  const handleCountryChange = (event) => {
    const selectedCountryCode = event.target.value;
    const selectedCountry = countries.find((country) => country.code === selectedCountryCode);
    setSelectedCountry(selectedCountry);
    getTrends(selectedCountry.id);
  };

  // Get Trend Topics
  const getTrends = (countryId) => {
    const bearerToken = process.env.REACT_APP_BEARER_TOKEN;

    axios
      .get(`https://api.twitter.com/1.1/trends/place.json?id=${countryId}`, {
        headers: {
          Authorization: `Bearer ${bearerToken}`,
        },
      })
      .then((response) => {
        setTrendTopics(response.data[0].trends);
      })
      .catch((error) => {
        console.error("Error fetching trends:", error);
      });
  };

  return (
    <div className="flow">
      <div className="flow__header">
        <h2>Trends</h2>
      </div>
      <div>
        <select className="form-select" style={{margin:"1rem", width:"95%"}} value={selectedCountry.code} onChange={handleCountryChange}>
          <option value="">Select Country</option>
          {countries.map((country) => (
            <option key={country.code} value={country.code}>
              {country.name}
            </option>
          ))}
        </select>
      </div>
      <div>
        <h4 style={{marginLeft:"1rem"}}>Trending Topics in {selectedCountry.name}</h4>
        <ul>
          {trendTopics.map((topic) => (
            <li key={topic.name}>{topic.name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Trends;
