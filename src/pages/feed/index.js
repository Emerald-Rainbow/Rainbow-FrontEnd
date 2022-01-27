import {useRef, useState, useEffect} from "react";
import axios from 'axios';
import { MDBCard, MDBCardImage, MDBCardBody, MDBCardTitle, MDBCardText, MDBRow, MDBCol , MDBContainer} from 'mdb-react-ui-kit';
import Carousel from '../../components/home/carousel'
import Navbar from '../../components/home/Navbar'
import {useRouter} from "next/router";
import { CheckCircleOutlineSharp } from "@mui/icons-material";
import { db, auth } from "../../../utils/firebase";
import { collection, addDoc, query, where , getDocs } from "firebase/firestore"
import { getAuth, onAuthStateChanged } from "firebase/auth";
import Masonry from '@mui/lab/Masonry';
import Skeleton from '@mui/material/Skeleton';
import Container from '@mui/material/Container';
import useMediaQuery from '@mui/material/useMediaQuery';

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
        const uid = user.uid;
        const userRef =  collection(db,"users");
       const q = query(userRef, where("id", "==", auth.currentUser.uid));
       const querySnapshot = await getDocs(q);
        if(querySnapshot.empty){
          router.push("/signup");
        }
        else{
          setUserSignedIn(true);
        }
        // ...
      } else {
        // User is signed out
        // ...
      }
    });
    
  

  function extractImage(string) {
    const imgRex = /<img.*?src="(.*?)"[^>]*>/g;
    const images = [];
      let img;
      while ((img = imgRex.exec(string))) {
         images.push(img[1]);
      }
      console.log(images);
    return images[0]?images[0]:"https://www.kalfound.org/Portals/0/Uploads/Images/Misc%20Graphics/LGBTQ_web_banner.png";
  }
  

  function htmlToLength(html, length) {
    const trimmedNode = htmlToNodeWithLength(html, length);
  
    const container = document.createElement("div");
    container.appendChild(trimmedNode);
    return container.innerHTML;
  }
  
  function htmlToNodeWithLength(html, length) {
    // Only for measurement. Never added to DOM.
    const container = document.createElement("div");
    container.innerHTML = html;
  
    const fullRange = document.createRange();
    fullRange.setStart(container, 0);
    fullRange.setEnd(container, 1);
  
    const range = findRangeWithLength(fullRange, length);
    return range.cloneContents();
  }
  
  function findRangeWithLength(range, length) {
    if (rangeLength(range) < length) return range;
  
    // Find the childNode with at least length content.
    for (const childNode of range.endContainer.childNodes) {
      range.setEnd(childNode, lastEndOffset(childNode));
      if (rangeLength(range) >= length) {
        return findRangeWithLength(range, length);
      }
    }
  
    // There are no child nodes long enough. It's a text node.
    const diff = length - rangeLength(range) + range.endOffset;
    range.setEnd(range.endContainer, diff);
    return range;
  }
  
  function lastEndOffset(node) {
    return node.childNodes.length || node.textContent.length;
  }
  
  function rangeLength(range) {
    return range.toString().length;
  }
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
        <Masonry columns={masonryRow} spacing={2} >
    {posts.map(post => (
        
        <MDBCard>
        
          {loading ? (
          <>
           <Skeleton variant="rectangular" height={200} />
            <MDBCardBody>
               <MDBCardTitle> <Skeleton /> </MDBCardTitle>
               <MDBCardText><Skeleton /> </MDBCardText>
            </MDBCardBody>
          </>
         ):
          ( <>
          <MDBCardImage
            src={extractImage(post.content)}
            alt='Hollywood Sign on The Hill'
            position='top'
            height= {200}
            onClick={()=>{
           
              router.push(`/posts/${post.blogId}`);
          }}
          />
          <MDBCardBody>
            <MDBCardTitle>{post.title}</MDBCardTitle>
            <MDBCardText className="text-truncate" style={{maxHeight: 150}}>
            <div dangerouslySetInnerHTML={{__html:post.content.replace(/<img[^>]*>/g,"")}} />
                    
            </MDBCardText>
          </MDBCardBody>
        
        </>)}
        </MDBCard>
    ))}
        
       
        </Masonry>
        </ MDBContainer>
    
    </div>
)

}


