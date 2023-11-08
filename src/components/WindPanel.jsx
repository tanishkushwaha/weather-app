import { SvgIcon, Box, Typography } from "@mui/material";

const WindIcon = () => {
  return (
    <SvgIcon sx={{ fontSize: '5rem' }}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><path fill="none" stroke="#e5e7eb" strokeDasharray="35 22" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="3" d="M43.64 20a5 5 0 113.61 8.46h-35.5"><animate attributeName="stroke-dashoffset" dur="2s" repeatCount="indefinite" values="-57; 57"/></path><path fill="none" stroke="#e5e7eb" strokeDasharray="24 15" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="3" d="M29.14 44a5 5 0 103.61-8.46h-21"><animate attributeName="stroke-dashoffset" begin="-1.5s" dur="2s" repeatCount="indefinite" values="-39; 39"/></path></svg>
    </SvgIcon>
  );
};

const WindPanel = (props) => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>

    <WindIcon />

    <Typography variant="h6" sx={{ textAlign: 'center', fontFamily: 'Rubik' }} >

      {`${props.value} m/s`}

    </Typography>

    </Box>
  );
};

export default WindPanel;