import {useRouter} from 'next/router'
import {useEffect, useState, useContext} from 'react'
import axios from 'axios';
import Container from '@mui/material/Container'
import UserContext from '@context/user/UserContext';
import {getUserById} from 'src/firebase/userControl';
import Banner from '@components/Profile/Banner';
import Navbar from "@components/home/Navbar";
import FullPageLoader from "@components/Loader/FullPageLoader/FullPageLoader";
import Tabs from '@components/Profile/Tabs';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';




export default function ProfilePage() {
const [profile, setProfile] = useState({});
const [tabStatus, setTabStatus] = useState(0);
const router = useRouter();
const {id} = router.query; 
const {user, userLoading, userError, logout} = useContext(UserContext);



useEffect(async ()=>{
  if(id!==undefined){
    setProfile(await getUserById(id));
  }
},[id]); 

if(userLoading)
      return <FullPageLoader/>

return (
  <div className='profilePage'>
    <Navbar />
    <Container maxWidth = "lg" sx = {{mt : 2}}>
    <Box sx={{ flexGrow: 1 }}>
          <Grid
            container
            spacing={{ xs: 2, md: 3 }}
            columns={{ xs: 2, sm: 4, md: 8 }}
          >
            <Grid item xs={2} sm={3} md={3.5} key={1}>
      <Banner profile={profile} profileId = {id}/>
            </Grid>
            <Grid item xs={2} sm={3} md={4.5} key={2}>
      <Tabs profile={profile} status = {tabStatus} setStatus ={setTabStatus}/>
            </Grid>
          </Grid>
        </Box>
    </Container>
       

    
  </div>
)
}