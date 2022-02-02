import React, {useState} from 'react';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import { styled, useTheme } from '@mui/material/styles';
import HomeIcon from '@mui/icons-material/Home';
import AddBoxIcon from '@mui/icons-material/AddBox';
import ConfirmationNumberIcon from '@mui/icons-material/ConfirmationNumber';
import ApartmentIcon from '@mui/icons-material/Apartment';
import {useRouter} from 'next/router';
const drawerWidth = 240;


 
const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  }));
  

const Appdrawer = (props) => {
  let drawerElementColor = [];
  const router = useRouter();
  ["/", "/addBlog", "/Booking", "/hosuing"].map((path,index) => {
    if (router.asPath === path) 
     { drawerElementColor[index] =  "Black";}
    else { drawerElementColor[index] =  "primary";}
  });
 
 console.log(router.asPath);
 const theme = useTheme();
  return (
       <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="persistent"
        anchor="left"
        open={props.drawerOpen}
      >
        <DrawerHeader>
          <IconButton onClick={()=> {props.setDrawerOpen(false)}}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          
            <ListItem button key= "Home" sx = {{color: drawerElementColor[0]}} onClick= {()=>router.push('/')}>
              <ListItemIcon sx = {{color: drawerElementColor[0]}}>
                <HomeIcon />
              </ListItemIcon>
              <ListItemText primary= "Home" />
            </ListItem>

            <ListItem button key= "Create Post" sx = {{color: drawerElementColor[1]}} onClick= {()=>router.push('/addBlog')}>
              <ListItemIcon sx = {{color: drawerElementColor[1]}}>
                <AddBoxIcon />
              </ListItemIcon>
              <ListItemText primary= "Create Post" />
            </ListItem>

            <ListItem button key="Book Tickets" sx = {{color: drawerElementColor[2]}} onClick= {()=>router.push('/booking')}>
              <ListItemIcon sx = {{color: drawerElementColor[2]}}>
                <ConfirmationNumberIcon />
              </ListItemIcon>
              <ListItemText primary= "Book Tickets" />
            </ListItem>

            <ListItem button key="Housing" sx = {{color: drawerElementColor[3]}} onClick= {()=>router.push('/housing')}>
              <ListItemIcon sx = {{color: drawerElementColor[3]}}>
                <ApartmentIcon />
              </ListItemIcon>
              <ListItemText primary= "Housing" />
            </ListItem>
          
        </List>
        <Divider />
        <List>
         
        </List>
      </Drawer>
  );
};

export default Appdrawer;
