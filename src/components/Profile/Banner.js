import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';

const FlexBox =  (props) => {  
  return (
    <Box
    sx={{
      display: 'flex',
      justifyContent: 'center',
      m :  props.m,
      bgcolor: 'background.paper',
      borderRadius: 1,
    }}
  >
    {props.children}
  </Box>
)}


export default function Banner({profile}) {
   console.log("hello friend yo")
  return (
    <>
    <Box sx = {{flexGrow:1}}>
      <Card style={{ backGround: 'rgb(255,255,255)' }}>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          p: 1,
          m: 1,
          bgcolor: 'background.paper',
          borderRadius: 1,
        }}
      >
         <Avatar
        alt={profile.Username}
        src="/static/images/avatar/1.jpg"
        sx={{ width: 50, height: 50 }}
      />
      </Box>
      <FlexBox m = {0}>
           <Typography variant='h5'> 
              {profile.Username}
              </Typography>
      </FlexBox>
     
       <FlexBox m = {1}>      
            <Typography variant='body2' >
              <em>  {profile.Bio} </em> 
            </Typography>
       </FlexBox>    
      
       
      </Card>
      </Box> 
    </>
  );
}
