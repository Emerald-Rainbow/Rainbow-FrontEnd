import * as React from 'react';
import {useContext, useState} from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import { Button} from '@mui/material';
import UserContext from '@context/user/UserContext';
import {useRouter} from 'next/router';
import axios from 'axios';


const UserControls = () => {
  const router = useRouter();
  return (
    <Box 
    sx = {{ 
      mt : 3,
      mb : 3,
      display : 'flex',
      justifyContent : 'center'
    }}
  >
    <Button variant="contained" color="primary" onClick = {()=>{router.push('/editProfile')}}>
      Edit Profile
    </Button>
    </Box>
  )
}


const Controls = ({profileData, followerId, profileId, followerData}) => {

const followUser = () => {
  axios.post('/api/follow', {
    userData : {...profileData,id: profileId},
    followerData : {...followerData, id: followerId}
  }).then(res => {
    console.log(res.data)
  })
}   

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
       onClick = {()=>{
           followUser();
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


export default function Banner({profile, profileId}) {
  const {user, userData} = useContext(UserContext);
  
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
    {profileId === user?.uid ? <UserControls /> : <Controls profileData = {profile} profileId = {profileId} followerId = {user.uid} followerData ={userData} />}
      </Card>
      </Box> 
    </>
  );
}
