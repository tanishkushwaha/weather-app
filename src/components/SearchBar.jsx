import { useEffect, useState } from "react";
import { Box, TextField, Button, Autocomplete } from "@mui/material";
import { key } from '../keys/api-key.json';

const SearchBar = ({ states, stateSetters }) => {

  const [cityNotFound, setCityNotFound] = useState(false);

  const handleInput = (e) => {
    stateSetters.setInputCity(e.target.value);
  };

  const handleSearchButton = () => {

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${states.inputCity}&appid=${key}&units=metric`)
      .then(res => res.json())
      .then(data => {
        console.log(data);
        if(data.cod == '200') {
          setCityNotFound(false);
          stateSetters.setWeatherData(data);
        }
        else
          setCityNotFound(true);
      })
      .catch(err => {
        console.log(`Error Occured: ${err}`);
      });
  };

  useEffect(() => {
    handleSearchButton();
  }, []);


  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'flex-start', gap: '5%', py: '2rem' }}>

      <TextField
        error={cityNotFound ? true : false}
        helperText={cityNotFound && 'City not found!'}
        id="search"
        label="Search City"
        value={states.inputCity}
        onChange={handleInput}
        onKeyDown={(e) => e.key == 'Enter' && handleSearchButton()}
        sx={{ width: {xs: '65%', sm: '80%'}, height: '3.5rem' }}
      />

      <Button variant="contained" color="primary" onClick={handleSearchButton} sx={{ height: '3.5rem', width: {xs: '30%', sm: '15%'} }}>
        Search
      </Button>

    </Box>
  );
};

export default SearchBar;