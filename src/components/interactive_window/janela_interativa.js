import React from 'react';
import { useTranslation } from 'react-i18next'; // Importe o useTranslation
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { createTheme } from '@mui/material/styles';
import '../../JetBrains_fonte/static/JetBrainsMono-Regular.ttf';

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
  const { t } = useTranslation(); // Use o useTranslation para acessar as traduções
  const [value, setValue] = React.useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  
  return (
    <Box sx={{ 
      width: '80%', 
      typography: 'body1', 
      border: '1px solid #1EF1A5B3', 
      borderRadius: '10px', 
      paddingTop: '10px',
      boxShadow: '0px 4px 8px rgba(30, 241, 165, 0.7)'
    }}>
      <TabContext value={value} >
        <Box sx={{ 
          display:'flex',
          borderBottom: 1,
          borderColor: 'divider',
          position: 'relative', 
          paddingTop: '35px', 
          justifyContent: 'center'
        }}>
          <TabList 
            onChange={handleChange} 
            aria-label="lab API tabs example"
            sx={{
              display: 'flex',
              width: '60%', 
              '& .css-heg063-MuiTabs-flexContainer': {justifyContent: 'space-around',},
              '& .css-1ir7qwo-MuiButtonBase-root-MuiTab-root':{textTransform: 'none', fontSize: '1.4rem', fontFamily: 'JetBrains Mono, monospace'},
              '& .css-1vrhaxv-MuiTabs-root .css-1ir7qwo-MuiButtonBase-root-MuiTab-root':{fontFamily: 'JetBrains Mono, sans-serif'},
              '& .MuiTabs-indicator': { bottom: '5px', backgroundColor: '#1EF1A5'},
            }}
          >
            {/* Tradução aplicada nas labels */}
            <Tab label={t('About')} value="1" sx={{color: '#FFFFFF'}} disableRipple/>
            <Tab label={t('Projects')} value="2" sx={{color: '#FFFFFF'}} disableRipple/>
            <Tab label={t('Technologies')} value="3" sx={{color: '#FFFFFF'}} disableRipple/>
            <Tab label={t('Certificates')} value="4" sx={{color: '#FFFFFF'}} disableRipple/>
          </TabList>
        </Box>

        {/* Tradução aplicada nos conteúdos das abas */}
        <TabPanel value="1" sx={{color: '#FFFFFF', fontFamily: 'JetBrains Mono, monospace', fontSize: '1.3rem', justifyContent: 'start', display: 'flex'}}>
          {t('About me:')}
        </TabPanel>
        <TabPanel value="2" sx={{color: '#FFFFFF', fontFamily: 'JetBrains Mono, monospace', fontSize: '1.3rem', justifyContent: 'start', display: 'flex',}}>Item Two</TabPanel>
        <TabPanel value="3" sx={{color: '#FFFFFF', fontFamily: 'JetBrains Mono, monospace', fontSize: '1.3rem', justifyContent: 'start', display: 'flex'}}>Item Three</TabPanel>
        <TabPanel value="4" sx={{color: '#FFFFFF', fontFamily: 'JetBrains Mono, monospace', fontSize: '1.3rem', justifyContent: 'start', display: 'flex'}}>Item Four</TabPanel>
      </TabContext>
    </Box>
  );
}
