import {useRouter} from 'next/router'
import {useEffect, useState, useContext} from 'react'
import axios from 'axios';
import { MDBCard, MDBCardImage, MDBCardBody, MDBCardTitle, MDBCardText, MDBRow, MDBCol , MDBContainer} from 'mdb-react-ui-kit';
import Container from '@mui/material/Container'
import UserContext from '@context/user/UserContext';
import {getUserById} from 'src/firebase/userControl';
import Banner from '@components/Profile/Banner';
import Navbar from "@components/home/Navbar";







export default function ProfilePage() {
const [profile, setProfile] = useState({});
const router = useRouter();
const {id} = router.query; 
const {user, userLoading, userError, logout} = useContext(UserContext);



useEffect(async ()=>{
  if(id!==undefined){
    setProfile(await getUserById(id));
  }
},[id]); 

return (
  <div className='profilePage'>
    <Navbar />
    <Container maxWidth = "lg" sx = {{mt : 2}}>
      <Banner profile={profile} profileId = {id}/>
    </Container>
       

    
  </div>
)
}