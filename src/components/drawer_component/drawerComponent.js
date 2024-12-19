import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';

export default function TemporaryDrawer() {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const DrawerList = (
    <Box sx={{ 
        
        width: 'fit-content', 
        color: 'white',
        '& .css-20bmp1-MuiSvgIcon-root': {fill:'rgb(255, 255, 255);'},

        }} role="presentation" onClick={toggleDrawer(false)} disableRipple>
      <List style={{backgroundColor:'#0E0E0E'}}>
        {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
          <ListItem key={text} style={{backgroundColor:'#0E0E0E'}} disablePadding>
            
            <ListItemButton style={{backgroundColor:'#0E0E0E'}} disableRipple >
              <ListItemIcon sx={{fill:'rgb(255, 255, 255)', backgroundColor: '#0E0E0E'}}>
                {index % 2 === 0 ? <InboxIcon style={{backgroundColor:'#0E0E0E'}}/> : <MailIcon style={{backgroundColor:'#0E0E0E'}}/>}
              </ListItemIcon>
              <ListItemText primary={text} style={{backgroundColor:'#0E0E0E'}}/>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider style={{backgroundColor:'#0E0E0E'}} />
      <List style={{backgroundColor:'#0E0E0E'}}>
        {['All mail', 'Trash', 'Spam'].map((text, index) => (
          <ListItem key={text} style={{backgroundColor:'#0E0E0E'}} disablePadding>
            <ListItemButton style={{backgroundColor:'#0E0E0E'}} disableRipple>
              <ListItemIcon style={{backgroundColor:'#0E0E0E'}}>
                {index % 2 === 0 ? <InboxIcon style={{backgroundColor:'#0E0E0E'}} /> : <MailIcon style={{backgroundColor:'#0E0E0E'}} />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <div>
      <Button onClick={toggleDrawer(true)} disableRipple>Open drawer</Button>
      <Drawer open={open} anchor='right' onClose={toggleDrawer(false)} 
      
      sx={{
        '& .css-eydqou-MuiPaper-root-MuiDrawer-paper': {backgroundColor: '#0E0E0E'},
        '& .css-1edfpdg-MuiTypography-root': {backgroundColor: '#0E0E0E'}
        }}
      >
        {DrawerList}
      </Drawer>
    </div>
  );
}
