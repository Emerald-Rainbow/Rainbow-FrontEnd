import {useRef, useState} from "react";
import axios from 'axios';



export default function feed(){
    const [posts, setPosts] =  useState([]);
    async function getPosts(){
        try{
       /*  const res = await axios.get('/api/getBlogs');
         console.log(res.data);
          setPosts(res.data);*/
           }catch(err){
               console.log(err);
               }
       }
 getPosts();
 console.log(posts);
return(
    <div>
    {posts.map(post => (
        <div>
            <h1>{post.title}</h1>
            <div dangerouslySetInnerHTML={{__html: post.content}} />
          </div>   
    ))}
    </div>
)

}


