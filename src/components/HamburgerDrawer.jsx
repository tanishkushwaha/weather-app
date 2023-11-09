import { useState } from "react";
import { Box, TextField, Drawer, List, ListItem } from "@mui/material";
import getWeatherData from "../getWeatherData";

const SearchBar = ({ states, stateSetters }) => {

  const [cityNotFound, setCityNotFound] = useState(false);

  const handleInput = (e) => {
    stateSetters.setInputCity(e.target.value);
  };

  const handleSearch = () => {

    getWeatherData(states.inputCity)
      .then(data => {

        console.log(`Get Weather: ${data.cod}`);

        if(data.cod == '200') {
          setCityNotFound(false);
          stateSetters.setWeatherData(data);
          stateSetters.setDrawerOpen(false);
        }

        else
          setCityNotFound(true);
      });
  };

  return (

    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'flex-start', gap: {xs: '5%', sm: '2%'}, py: '2rem' }}>

      <TextField
        error={cityNotFound ? true : false}
        helperText={cityNotFound && 'City not found!'}
        id="search"
        label="Search City"
        value={states.inputCity}
        onChange={handleInput}
        onKeyDown={(e) => e.key == 'Enter' && handleSearch()}
        sx={{ height: '3.5rem' }}
      />

    </Box>
  );
};

const HamburgerDrawer = ({ states, stateSetters }) => {

  return (
    
    <Drawer
      variant="temporary"
      anchor="left"
      open={states.drawerOpen}
      onClose={() => stateSetters.setDrawerOpen(false)}
    >

      <List>
        <ListItem>
          <SearchBar states={states} stateSetters={stateSetters}/>
        </ListItem>
      </List>

    </Drawer>
  );
};

export default HamburgerDrawer;