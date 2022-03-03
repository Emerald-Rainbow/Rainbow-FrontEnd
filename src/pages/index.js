import {useRef, useState, useEffect} from "react";
import axios from 'axios';
import { MDBCard, MDBCardImage, MDBCardBody, MDBCardTitle, MDBCardText, MDBRow, MDBCol , MDBContainer} from 'mdb-react-ui-kit';
import Carousel from '../components/home/carousel'
import Navbar from '../components/home/Navbar'
import {useRouter} from "next/router";
import { CheckCircleOutlineSharp } from "@mui/icons-material";
import { db, auth } from "../../utils/firebase";
import { collection, addDoc, query, where , getDocs } from "firebase/firestore"
import { getAuth, onAuthStateChanged } from "firebase/auth";
import Masonry from '@mui/lab/Masonry';
import Skeleton from '@mui/material/Skeleton';
import Container from '@mui/material/Container';
import useMediaQuery from '@mui/material/useMediaQuery';
import HomeCard from '../components/home/card';
import Select from '@components/home/select';


export default function feed(){
  const router = useRouter();
  const [userSignedIn, setUserSignedIn] = useState(false);
  const [currentUser, setUser] = useState(null);
  const [masonryRow, setMasonryRow] = useState(3);
  const matches = useMediaQuery('(max-width:600px)');
 
    onAuthStateChanged(auth, async (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
          
        setUser(user);
        setUserSignedIn(true);
        // const uid = user.uid;
        // const userRef =  collection(db,"users");
        // const q = query(userRef, where("id", "==", auth.currentUser.uid));
        // const querySnapshot = await getDocs(q);
        // if(querySnapshot.empty){
        //   // router.push("/signup");
        // }
        // else{
        // }
        // ...
      } else {
        // User is signed out
        // ...
      }
    });
    
  
    const [posts,setPosts]= useState([0,0,0,0,0,0]);
    const [loading,setLoading]= useState(true);
    async function getPosts(){
        try{
        
        const res = await axios.get('api/getBlogs');
         console.log(res.data);
          setPosts(res.data);
          setLoading(false);
           }catch(err){
               console.log(err);
               }
       }

    useEffect(()=>{
     
 getPosts();
 console.log(posts);
    },[]);

  useEffect(()=>{
    
    if(matches){
      setMasonryRow(1);
    }
    else{
      setMasonryRow(3);
    }
  },[matches]);

return(
    <div className = "feed-page-container">
    <Navbar userSignedIn={userSignedIn} setUserSignedIn = {setUserSignedIn} user = {currentUser}/>
    <Carousel/>
    <MDBContainer breakpoint="lg">
    

        <Masonry columns={masonryRow} spacing={1} sx ={{ml : 0.1, mt : 1}}  >
    {posts.map(post => (
        
    
        <HomeCard post={post} loading = {loading}/>

    ))}
        
       
        </Masonry>
        </MDBContainer>
    
    </div>
)

}


  
