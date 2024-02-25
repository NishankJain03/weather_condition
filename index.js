// index.js
const axios = require('axios');

async function fetchWeatherData(latitude, longitude, apiKey) {
  const apiUrl = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${latitude},${longitude}?key=${apiKey}`;
  
  try {
    const response = await axios.get(apiUrl);
    const weatherData = response.data;
    const dailyConditions = weatherData.days.map(day => day.conditions);
    const currentConditions = weatherData.currentConditions.conditions;
    return { currentConditions, dailyConditions };
  } catch (error) {
    throw new Error('Unable to fetch weather data');
  }
}

module.exports = { fetchWeatherData };
