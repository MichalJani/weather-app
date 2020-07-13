import axios from 'axios';

const WEATHER_API_KEY = `<paste_your_api_key_here>`;
const WEATHER_API_URL = `https://api.openweathermap.org/data/2.5/onecall?lat=51.107883&lon=17.038538&exclude=minutely,hourly&appid=${WEATHER_API_KEY}&units=metric`;

export const apiCaller = async () => {
  try {
    const response = await axios.get(WEATHER_API_URL);

    return response.data;
  } catch (err) {
    if (err) console.error('Cannot fetch Weather Data from API, ', err);
  }
};
