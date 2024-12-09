  import React from 'react';
  import { useTranslation } from 'react-i18next'; // Importe o useTranslation
  import Box from '@mui/material/Box';
  import Tab from '@mui/material/Tab';
  import TabContext from '@mui/lab/TabContext';
  import TabList from '@mui/lab/TabList';
  import TabPanel from '@mui/lab/TabPanel';
  import { createTheme } from '@mui/material/styles';
  import '../../JetBrains_fonte/static/JetBrainsMono-Regular.ttf';
  import AboutMe from './aboutMeTab'
  import ProjectTab from './projectTab';
  import TechnologiesTab from './technologiesTab';
  import CertificatesTab from './certificatesTab';

  export const Theme = createTheme({
    palette: {
      primary: {
        main: '#FFFFFF',
      },
      background: {
        default: '#FFFFFF',
      },
      text: {
        primary: '#FFFFFF',
      },
    },
    typography: {
      fontSize: 16,
      fontFamily: 'JetBrains Mono, monospace',
    },
    components: {
      MuiTab: {
        styleOverrides: {
          root: {
            textTransform: 'none',
            fontSize: '1.4rem',
            fontFamily: 'JetBrains Mono, monospace',
          },
        },
      },
      MuiTabs: {
        styleOverrides: {
          indicator: {
            backgroundColor: '#1EF1A5',
          },
        },
      },
    },
  });
  

  export default function LabTabs({ onTabChange }) {
    const { t } = useTranslation(); // Traduções
    const [value, setValue] = React.useState('1');
  
    const handleChange = (event, newValue) => {
      setValue(newValue);
      if (onTabChange) {
        onTabChange(newValue); // Chama a função do App.js quando a aba muda
      }
    }

    return (
      <Box sx={{ 
        overflowY: 'auto',  
        overflowX: 'hidden',
        width: '80%', 
        typography: 'body1', 
        border: '1px solid #1EF1A5B3', 
        borderRadius: '10px', 
        paddingTop: '10px',
        boxShadow: '0px 4px 8px rgba(30, 241, 165, 0.7)',
        zIndex: '2',
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
          <div style={{display:'flex', justifyContent:'center'}} className='HeaderComponent'>
          <TabList 
              onChange={handleChange} 
              aria-label="lab API tabs example"
              sx={{
                display: 'flex',
                width: '100%', 
                '& .css-heg063-MuiTabs-flexContainer': {justifyContent: 'space-around',},
                '& .css-1ir7qwo-MuiButtonBase-root-MuiTab-root':{textTransform: 'none', fontSize: '1.4rem', fontFamily: 'JetBrains Mono, monospace'},
                '& .css-1vrhaxv-MuiTabs-root .css-1ir7qwo-MuiButtonBase-root-MuiTab-root':{fontFamily: 'JetBrains Mono, sans-serif'},
                '& .MuiTabs-indicator': { bottom: '5px', backgroundColor: '#1EF1A5'},
                '& .css-1t3768g':{textTransform: 'none', fontSize: '1.4rem', fontFamily: 'JetBrains Mono, monospace'},
                '& .css-1jzev9b': {textTransform: 'none', fontSize: '1.4rem', fontFamily: 'JetBrains Mono, monospace'},
                '& .css-mkx4pv-MuiTabs-root': {textTransform: 'none', fontSize: '1.4rem', fontFamily: 'JetBrains Mono, monospace'},
              }}
            >
              {/* Tradução aplicada nas labels */}
              <Tab label={t('About')} value="1" sx={{color: '#FFFFFF'}} disableRipple/>
              <Tab label={t('Projects')} value="2" sx={{color: '#FFFFFF'}} disableRipple/>
              <Tab label={t('Technologies')} value="3" sx={{color: '#FFFFFF'}} disableRipple/>
              <Tab label={t('Certificates')} value="4" sx={{color: '#FFFFFF'}} disableRipple/>
            </TabList> 
          </div>
        
          </Box>

          {/* Tradução aplicada nos conteúdos das abas */}
          <div className='bodyAbout' style={{display:'flex', justifyContent:"center"}}>
          <TabPanel 
            value="1" 
            sx={{ 
              overflowX: 'hidden',
              marginTop: '40px',
              color: '#FFFFFF', 
              fontFamily: 'JetBrains Mono, monospace', 
              fontSize: '1.3rem', 
              display: value === '1' ? 'flex' : 'none', // Condicional para display
              flexDirection: 'column',
              width: '1000px',
              height: 'auto'
            }}
          >

            <div style={{display:'flex', justifyContent: 'center'}}>
              <AboutMe/>  
            </div>
          </TabPanel>
          </div>
          
          <div className='bodyProjects' style={{display:'flex',justifyContent:'center', flexDirection:'row', marginTop:'40px'}} >
          <TabPanel 
            value="2" 
            sx={{ 
              width:'1200px',
              color: '#FFFFFF', 
              fontFamily: 'JetBrains Mono, monospace', 
              fontSize: '1.3rem', 
              justifyContent: 'center', 
              display: value === '2' ? 'flex' : 'none' // Condicional para display
            }}
          >
            
            <ProjectTab style={{}}>

            </ProjectTab>

          </TabPanel>
          </div>
        

          <TabPanel 
            value="3" 
            sx={{ 
              color: '#FFFFFF', 
              fontFamily: 'JetBrains Mono, monospace', 
              fontSize: '1.3rem', 
              justifyContent: 'center', 
              display: value === '3' ? 'flex' : 'none' // Condicional para display
            }}
          >

            <TechnologiesTab>

            </TechnologiesTab>

          </TabPanel> 

          <TabPanel 
            value="4" 
            sx={{ 
              color: '#FFFFFF', 
              fontFamily: 'JetBrains Mono, monospace', 
              fontSize: '1.3rem', 
              justifyContent: 'start', 
              display: value === '4' ? 'flex' : 'none' // Condicional para display
            }}
          >
            <CertificatesTab>

            </CertificatesTab>
            
          </TabPanel>
        </TabContext>
      </Box>
    );
  }
