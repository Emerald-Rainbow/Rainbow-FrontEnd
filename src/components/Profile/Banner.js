import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import { Button} from '@mui/material';



const Controls = () => {
  return (
    <Box 
    sx = {{ 
      mt : 3,
      mb : 3,
      display : 'flex',
      justifyContent : 'center'
    }}
  >
      <Button 
        variant = "contained"
        color = "primary"
        sx = {{
          mr : 2
        }}
      >
          FOLLOW
      </Button>
      <Button 
        variant = "contained"
        color = "error"
       
      >
          add friend
      </Button>
  </Box>
  )}



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
        className = "profile-banner"
        sx={{
          display: 'flex',
          justifyContent: 'center',
          p: 1,
         
         
          borderRadius: 1,
         
        }}
      >
         <Avatar
        alt={profile.Username}
        src={profile.ProfilePic}
        sx={{ width: 75, height: 75 }}
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
      
      <Controls /> 
      </Card>
      </Box> 
    </>
  );
}
