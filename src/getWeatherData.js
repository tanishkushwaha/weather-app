import { key } from './keys/api-key.json';

const getWeatherData = async (city) => {
  const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&units=metric`)

  const data = await response.json();

  return data;
};

export default getWeatherData;