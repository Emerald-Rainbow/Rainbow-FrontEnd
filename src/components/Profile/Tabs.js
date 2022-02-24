import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { ThemeProvider, createTheme } from '@mui/material';



const profileTabs  = ['Posts', 'Followers', 'Following'];

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}

export default function Options(props) {
  const theme = createTheme({
    //createTheme is a function that takes in a theme object and returns a ThemeProvider
    palette: {
      primary: {
        light: '#ffffff',
        main: '#f8f8ff',
        dark: '#ffffff',
        contrastText: '#000000',
      },
      secondary: {
        light: '#ffffff',
        main: '#000000',
        dark: '#ffffff',
        contrastText: '#000000',
      },
    },
  });

  const handleChange = (event, newValue) => {
    props.setStatus(newValue);
  };


  return (
    <ThemeProvider theme={theme}>
      <AppBar position="static" >
        <Tabs
          value={props.status}
          onChange={handleChange}
          indicatorColor="secondary"
          textColor="inherit"
          variant="fullWidth"
          aria-label="full width tabs example"
        >
          {profileTabs.map((c, index) => (
            <Tab key={index} label={c} {...a11yProps(index)} />
          ))}
        </Tabs>
      </AppBar>
    </ThemeProvider>
  );
}
