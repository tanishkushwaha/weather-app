import { useEffect, useState } from 'react';
import './App.css';
import SearchBar from './components/SearchBar';
import HumidityPanel from './components/HumidityPanel';
import PressurePanel from './components/PressurePanel';
import WindPanel from './components/WindPanel';

import { 
  Box, 
  Container,
  Card, 
  CardMedia, 
  CardContent, 
  Typography
} from '@mui/material';

const App = () => {

  const [inputCity, setInputCity] = useState('New Delhi');
  const [weatherData, setWeatherData] = useState(null);
  const [isNight, setIsNight] = useState(false);

  const icons = {
    Clear: isNight ? 'Clear-Night.svg' : 'Clear.svg',
    Clouds: 'Clouds.svg',
    Drizzle: 'Drizzle.svg',
    Dust: 'Dust.svg',
    Fog: 'Fog.svg',
    Haze: 'Haze.svg',
    Mist: 'Mist.svg',
    NA: 'NA.svg',
    Rain: 'Rain.svg',
    Smoke: 'Smoke.svg',
    Snow: 'Snow.svg',
    Thunderstorm: 'Thunderstorm.svg',
    Tornado: 'Tornado.svg'
  };

  useEffect(() => {
    if(weatherData != null) {
      const timezoneOffset = weatherData.timezone;

      const date = new Date();
      const utcTimeSeconds = date.getUTCHours()*60*60 + date.getUTCMinutes()*60 + date.getUTCSeconds();
      const currentCityTimeSeconds = utcTimeSeconds + timezoneOffset;
      const currentCityHour = Math.round(currentCityTimeSeconds / 3600);

      if(currentCityHour >= 6 && currentCityHour < 18)
        setIsNight(false);
      else  
        setIsNight(true);

    }
  }, [weatherData]);

  return (
    <>
      <Box sx={{ bgcolor: 'background.default', minHeight: '100vh' }}>
        
        <Container maxWidth='md'>

          <SearchBar 
            states={{inputCity: inputCity, weatherData: weatherData}} 
            stateSetters={{
              setInputCity: setInputCity, 
              setWeatherData: setWeatherData,
              setIsNight: setIsNight
            }} 
          />

          <Card sx={{ pt: '1rem' }}>

            <Box sx={{ width: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>

              <Typography variant="h4" sx={{ fontFamily: 'Rubik' }}>
                {weatherData != null && weatherData.name}
              </Typography>

              <CardMedia 
                title="Weather Icon" 
                image={`src/assets/weather_icons/${weatherData != null ? icons[weatherData.weather[0].main] : icons['NA']}`} 
                sx={{ width: '18rem', height: '18rem' }} 
              />

            </Box>

            <CardContent>

              <Typography variant="h5" sx={{ textAlign: 'center', mb: '1rem', fontFamily: 'Rubik' }}>
                {weatherData != null && weatherData.weather[0].main}
              </Typography>

              <Typography gutterBottom variant="h2" sx={{ textAlign: 'center', fontFamily: 'Rubik' }}>
                {weatherData != null && `${Math.round(weatherData.main.temp)}°`}
              </Typography>

              <Box sx={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center', mt: '1rem' }}>

                {weatherData != null &&
                  <>
                    <HumidityPanel value={weatherData.main.humidity} />
                    <WindPanel value={weatherData.wind.speed} />
                    <PressurePanel value={weatherData.main.pressure} />
                  </>
                }

              </Box>

            </CardContent>

          </Card>

        </Container>

      </Box>

    </>
  );
}

export default App;