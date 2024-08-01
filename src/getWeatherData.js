// const key = process.env.OPEN_WEATHER_API_KEY;
const key = import.meta.env.VITE_OPENWEATHER_API_KEY;

const getWeatherData = async (city) => {
  const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&units=metric`)

  const data = await response.json();

  return data;
};

export default getWeatherData;