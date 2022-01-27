import {useRouter} from 'next/router'
import {useEffect, useState} from 'react'
import axios from 'axios';

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
    <h1>{post.title}</h1>
    <div dangerouslySetInnerHTML={{__html:post.content}} />
  </div>
)
}