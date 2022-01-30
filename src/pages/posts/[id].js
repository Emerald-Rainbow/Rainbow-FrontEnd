import {useRouter} from 'next/router'
import {useEffect, useState} from 'react'
import axios from 'axios';
import { MDBCard, MDBCardImage, MDBCardBody, MDBCardTitle, MDBCardText, MDBRow, MDBCol , MDBContainer} from 'mdb-react-ui-kit';
export default function Post() {
const [post, setPost] = useState('');
const router = useRouter();
const {id} = router.query; 


async function getPost(){
       
       const ref =  await axios.get(`/api/blog/${id}`);
        setPost(ref.data);
        console.log(ref.data);
}

useEffect(()=>{
  if(id!==undefined){
    getPost();
  }
},[id]); 

return (
  <div>
    
    <MDBContainer breakpoint="lg">
    <h1>{post.title}</h1>
    <div dangerouslySetInnerHTML={{__html:post.content}} />
    </MDBContainer>
  </div>
)
}