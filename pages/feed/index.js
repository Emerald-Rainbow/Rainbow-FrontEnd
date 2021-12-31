import {useRef, useState, useEffect} from "react";
import axios from 'axios';
import { MDBCard, MDBCardImage, MDBCardBody, MDBCardTitle, MDBCardText, MDBRow, MDBCol , MDBContainer} from 'mdb-react-ui-kit';
import Carousel from '../../components/home/carousel'
import Navbar from '../../components/home/Navbar'
import {useRouter} from "next/router";
import { CheckCircleOutlineSharp } from "@mui/icons-material";
import { db, auth } from "../../utils/firebase";
import { collection, addDoc, query, where , getDocs } from "firebase/firestore"


export default function feed(){
  const router = useRouter();
  const [userSignedIn, setUserSignedIn] = useState(false);
  async function checkUser(){
    console.log("hi"+auth.currentUser);
    if(auth.currentUser){
      console.log(auth.currentUser.uid);
      const userRef =  collection(db,"users");
       const q = query(userRef, where("id", "==", auth.currentUser.uid));
       const querySnapshot = await getDocs(q);
        if(querySnapshot.empty){
          router.push("/signup");
        }
        else{
          setUserSignedIn(true);
        }
    }
  }

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
    const [posts,setPosts]= useState([]);
    async function getPosts(){
        try{
        
        const res = await axios.get('api/getBlogs');
         console.log(res.data);
          setPosts(res.data);
           }catch(err){
               console.log(err);
               }
       }

    useEffect(()=>{
 checkUser();    
 getPosts();
 console.log(posts);
    },[auth]);

return(
    <div className = "feed-page-container">
    <Navbar userSignedIn={userSignedIn} setUserSignedIn = {setUserSignedIn}/>
    <Carousel/>
    <MDBContainer breakpoint="lg">
    <MDBRow className='row-cols-1 row-cols-md-3 g-4' width={1000}>
    {posts.map(post => (
        <MDBCol>
              {  /*  */ } 
        <MDBCard className="h-100" onClick={()=>{
           
            router.push(`/posts/${post.blogId}`);
        }}>
          <MDBCardImage
            src={extractImage(post.content)}
            alt='Hollywood Sign on The Hill'
            position='top'
            height= {200}
          />
          <MDBCardBody>
            <MDBCardTitle>{post.title}</MDBCardTitle>
            <MDBCardText>
            <div dangerouslySetInnerHTML={{__html:htmlToLength(post.content.replace(/<img[^>]*>/g,""),30)}} />
                    
            </MDBCardText>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
        
       
))}
    </MDBRow>
    </MDBContainer>
    </div>
)

}


