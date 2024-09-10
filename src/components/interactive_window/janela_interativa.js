import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { createTheme } from '@mui/material/styles';


export const Theme = createTheme({
  palette:{
    primary:{
      main: '#FFFFFF',
    },
    background:{
      default:'#FFFFFF',
    },
    text:{
      primary: '#FFFFFF'
    },
  },
  typography:{
    fontSize: 16,
  },

  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1920,
    },
  },

}); 

export default function LabTabs() {
  const [value, setValue] = React.useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  
  return (
    <Box sx={{ width: '100%', typography: 'body1' }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example" >
            <Tab label="Item One" value="1" sx={{color: '#FFFFFF'}}/>
            <Tab label="Item Two" value="2" sx={{color: '#FFFFFF'}}/>
            <Tab label="Item Three" value="3" sx={{color: '#FFFFFF'}}/>
          </TabList>
        </Box>
        <TabPanel value="1" sx={{color: '#FFFFFF'}}>Item One</TabPanel>
        <TabPanel value="2" sx={{color: '#FFFFFF'}}>Item Two</TabPanel>
        <TabPanel value="3" sx={{color: '#FFFFFF'}}>Item Three</TabPanel>
      </TabContext>
    </Box>
  );
}
