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
import { useMediaQuery } from '@mui/material';
import { Masonry } from '@mui/lab';
import HomeCard from '@components/home/card';
import Footer from '@components/Footer';
export default function ProfilePage() {
const [profile, setProfile] = useState({});
const [tabStatus, setTabStatus] = useState(0);
const [masonryRow, setMasonryRow] = useState(2);
const [posts, setPosts] = useState([]);
const [loading,setLoading]= useState(true);

const router = useRouter();
const {id} = router.query; 
const {user, userLoading, userError, logout} = useContext(UserContext);
const matches = useMediaQuery('(max-width:600px)');

async function getUserPosts(){
  try{
  
  const res = await axios.get(`/api/getBlogsByUser/${id}`);
   console.log(res.data);
    setPosts(res.data);
    setLoading(false);
    console.log(posts);
     }catch(err){
         console.log(err);
         }
 }

useEffect(()=>{
    getUserPosts();
},[id]);

useEffect(()=>{
  if(matches)
  {
    setMasonryRow(1);
  }
  else{
    setMasonryRow(2);
  }
},[matches]);
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
            columns={{ xs: 2, sm: 8, md: 8 }}
          >
            <Grid item xs={2} sm={8} md={3.5} key={1}>
      <Banner profile={profile} profileId = {id}/>
            </Grid>
            <Grid item xs={2} sm={8} md={4.5} key={2}>
      <Tabs profile={profile} status = {tabStatus} setStatus ={setTabStatus}/>
      {   tabStatus === 0 &&
      <Masonry columns={masonryRow} spacing={1} sx ={{ml : 0.1, mt : 1}}  >
    {posts.map(post => (
        
    
        <HomeCard post={post} loading = {loading} authorIsUser = {1}/>


    ))}
        
       
        </Masonry>
            }           
             </Grid>
          </Grid>
        </Box>

    </Container>

  </div>
)
}