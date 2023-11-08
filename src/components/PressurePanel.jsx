import { SvgIcon, Box, Typography } from "@mui/material";

const BarometerIcon = () => {
  return (
    <SvgIcon sx={{ fontSize: '5rem' }}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><circle cx="32" cy="32" r="18" fill="none" stroke="#e5e7eb" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3"/><path fill="none" stroke="#e5e7eb" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M32 25v-6m13.5 13h-6M25 32h-6m22.5-8.5l-3 3m-13 0l-3-3m16 14l3 3m-19 0l3-3"/><circle cx="32" cy="32" r="3" fill="#374151"/><path fill="none" stroke="#374151" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="2" d="M32 35.5v-15"><animateTransform attributeName="transform" dur="9s" repeatCount="indefinite" type="rotate" values="30 32 32; 55 32 32; 45 32 32; 55 32 32; 30 32 32"/></path></svg>
    </SvgIcon>
  );
}

const PressurePanel = (props) => {
  return(

    <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>

    <BarometerIcon />

    <Typography variant="body1" sx={{ textAlign: 'center', fontFamily: 'Rubik' }} >

      {`${props.value} hPa`}

    </Typography>

    </Box>
  );
};

export default PressurePanel;