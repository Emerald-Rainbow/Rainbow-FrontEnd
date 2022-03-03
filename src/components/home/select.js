import { AppBar, Box, Tab, Tabs } from "@mui/material";
import * as React from 'react';
import {  ThemeProvider, createTheme } from '@mui/material/styles';




const theme = createTheme({
    //createTheme is a function that takes in a theme object and returns a ThemeProvider
    palette: {
      primary: {
        light: "#ffffff",
        main: "#f8f8ff",
        dark: "#ffffff",
        contrastText: "#000000"
      },
      secondary: {
        light: "#ffffff",
        main: "#ffffff",
        dark: "#ffffff",
        contrastText: "#000000"
      }
    }
  });
  


  const profileTabs  = ['All', 'Popular', 'latest', 'following'];

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}

const handleChange = (event, newValue) => {
   
  };

function HomeSelect() {
  return (
    <ThemeProvider theme={theme}>
    <Box sx={{ flexGrow: 1 }}>
    <AppBar position="static" >
        <Tabs
        
          onChange={handleChange}
          indicatorColor="secondary"
          textColor="inherit"
          variant="scrollable"
          aria-label="full width tabs example"
          scrollButtons
          allowScrollButtonsMobile
          centered
        >
          {profileTabs.map((c, index) => (
            <Tab key={index} label={c}  {...a11yProps(index)} />
          ))}
        </Tabs>
      </AppBar>
      
    
    </Box>
    </ThemeProvider>
    )
}

export default HomeSelect;