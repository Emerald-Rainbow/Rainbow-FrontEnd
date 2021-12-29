import {useRef, useState, useEffect} from "react";
import axios from 'axios';
import { MDBCard, MDBCardImage, MDBCardBody, MDBCardTitle, MDBCardText, MDBRow, MDBCol , MDBContainer} from 'mdb-react-ui-kit';
import Carousel from '../../components/home/carousel'
import Navbar from '../../components/home/navbar'
export default function feed(){
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
 getPosts();
 console.log(posts);
    },[]);

return(
    <div className = "feed-page-container">
    <Navbar/>
    <Carousel/>
    <MDBContainer breakpoint="lg">
    <MDBRow className='row-cols-1 row-cols-md-3 g-4' width={1000}>
    {posts.map(post => (
        <MDBCol>
              {  /* <div dangerouslySetInnerHTML={{__html: post.content}} />
                    </div> */ } 
        <MDBCard className="h-100">
          <MDBCardImage
            src='https://mdbcdn.b-cdn.net/img/new/standard/city/041.webp'
            alt='Hollywood Sign on The Hill'
            position='top'
          />
          <MDBCardBody>
            <MDBCardTitle>{post.title}</MDBCardTitle>
            <MDBCardText>
              nothing to show here
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


