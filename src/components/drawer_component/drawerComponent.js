import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import HomeApp from './Home/Home';
import BeenhereIcon from '@mui/icons-material/Beenhere';
import HomeIcon from '@mui/icons-material/Home';
import CodeIcon from '@mui/icons-material/Code';
import ComputerIcon from '@mui/icons-material/Computer';
import PersonIcon from '@mui/icons-material/Person';
import AboutMeMobile from './aboutMe/aboutMeMobile';
import ProjectsMobile from './Projects/ProjectsMobile';
import Technologies from './technologies/technologies';
import Certificates from './certificates/certificates';

export default function TemporaryDrawer() {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const choosingIcon = (text) => {
    switch(text){
      case 'Home':
        return <HomeIcon style={{fill:'white'}}/>
      case 'About Me':
        return <PersonIcon style={{fill:'white'}}/>
      case 'Projects':
        return <ComputerIcon style={{fill:'white'}}/>
      case 'Technologies':
        return <CodeIcon style={{fill:'white'}}/>
      case 'Certificates':
        return <BeenhereIcon style={{fill:'white'}}/>
      default:
        return null
    }
  }

  const [activeSection, setActiveSection] = React.useState('');
  React.useEffect(() => {
    const sections = document.querySelectorAll('section');
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id); // Atualiza a seção ativa
          }
        });
      },
      { threshold: 0.6 } // Define o quanto a seção precisa estar visível (50%)
    );
  
    sections.forEach((section) => observer.observe(section));
  
    return () => observer.disconnect();
  }, []);
  

  const DrawerList = (
    <Box sx={{ 
        width: 'fit-content', 
        color: 'white',
        '& .css-20bmp1-MuiSvgIcon-root': {fill:'rgb(255, 255, 255);'},
        '& .css-fh11cx-MuiListItemIcon-root': {color:'rgb(255,255,255);'},
        '& .css-1bfiel7': {color:'rgb(255,255,255);'},
        '& .css-1f8bwsm': {color:'rgb(255,255,255);'},
        '& .css-gjwoc1': {backgroundColor:'#0E0E0E'},
        '& .css-39bbo6': {borderColor: '#0E0E0E'},       

        }} role="presentation" onClick={toggleDrawer(false)} disableRipple>

      <List style={{backgroundColor:'#0E0E0E'}}>
        {['Home','About Me', 'Projects', 'Technologies', 'Certificates'].map((text, index) => (
          <ListItem key={text} style={{backgroundColor:'#0E0E0E'}} disablePadding>            
            <ListItemButton
                component="a"
                href={`#${text.replace(' ', '')}`}
                style={{
                  backgroundColor: '#0E0E0E',
                  textDecoration: activeSection === text.replace(' ', '') ? 'underline' : 'none',
                  color: activeSection === text.replace(' ', '') ? '#1EF1A5' : 'white',
                }}
                disableRipple
              >
                <ListItemText primary={text} style={{ backgroundColor: '#0E0E0E' }} />
                <ListItemIcon
                  sx={{
                    fill: 'rgb(255, 255, 255)',
                    backgroundColor: '#0E0E0E',
                    display: 'flex',
                    justifyContent: 'end',
                  }}
                >
                  {choosingIcon(text)}
                </ListItemIcon>
              </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <div>

      <header style={{
         display:'flex',
         justifyContent:'space-between',
         position:'fixed', 
         width:'100%',
         borderBottom:'rgba(30, 241, 165, 0.3) 0.2px solid',
         backgroundColor:'#0E0E0E',
         zIndex: 10,
         }}>
        
        <div style={{display:'flex', padding: '10px 8px', justifyContent:'space-around', width:'80px'}}>
            <div> <a href="https://www.instagram.com/natanaelbraga7/?next=%2F" target="_blank" rel="noopener noreferrer"><InstagramIcon style={{color:'white'}}/></a> </div>
            <div> <a href="https://github.com/NatanaelBraga-dev" target="_blank" rel="noopener noreferrer"><GitHubIcon style={{color:'white'}} /></a> </div>
            <div> <a href="https://www.linkedin.com/in/natanael-braga-2149092b6/" target="_blank" rel="noopener noreferrer"><LinkedInIcon style={{color:'white'}}/></a> </div>
        </div>
        
        <div>
          <Button onClick={toggleDrawer(true)} style={{padding:"8px 8px",}} disableRipple> <MenuIcon style={{width:'35px', height:'33px', color:'white'}} ></MenuIcon>  </Button >
        </div>
      
      </header>
      
      <body style={{display:"flex", justifyContent:'center', flexDirection: 'column' }}>
        
        <HomeApp>

        </HomeApp> 

        <AboutMeMobile>

        </AboutMeMobile>

         <ProjectsMobile >
          
         </ProjectsMobile>

         <Technologies>
          
         </Technologies>

         <Certificates>
          
         </Certificates>
      </body>

      <Drawer 
        open={open} 
        anchor='right' 
        onClose={toggleDrawer(false)}       

        sx={{
          '& .css-na684': {
            backgroundColor:'#0E0E0E',
            borderTopLeftRadius:"50px 30px",
            borderBottomLeftRadius: "50px 30px ",
            borderLeft:'rgba(30, 241, 165, 0.7) 1px solid'
          },

          '& .css-eydqou-MuiPaper-root-MuiDrawer-paper': {
            
            backgroundColor: '#0E0E0E',
            borderTopLeftRadius:"50px 30px",
            borderBottomLeftRadius: "50px 30px ",
            borderLeft:'rgba(30, 241, 165, 0.7) 1px solid'
          },

          '& .css-1edfpdg-MuiTypography-root': {backgroundColor: '#0E0E0E'}
          

          }}
      >
        {DrawerList}
      </Drawer>
    </div>
  );
}
