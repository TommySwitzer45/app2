const url = `https://api.weather.gov/points/39.7456,-97.0892`;

fetch(url)
  .then(response => {
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json();
  })
  .then(data => {
    const city = data.properties.relativeLocation.properties.city;
    const state = data.properties.relativeLocation.properties.state;
    const forecastGridData = data.properties.forecastGridData;

// Update the displayed data in your app
const cityElem = document.getElementById('city');
const stateElem = document.getElementById('state');
const forecastGridDataElem = document.getElementById('forecastGridData');

cityElem.textContent = city;
stateElem.textContent = state;
forecastGridDataElem.textContent = forecastGridData;
  })
  .catch(error => {
    console.error("Error fetching data from api.weather.gov:", error);
  });




