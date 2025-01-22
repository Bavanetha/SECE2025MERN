import { useState,useEffect } from "react";
import axios from "axios";

const UseEffectAPI = () =>{
    var [post,setPost] = useState([]);
    var [album,setAlbum] = useState([]);

    useEffect(() =>{
         var  response = axios.get("https://jsonplaceholder.typicode.com/posts/") 
         .then((res) => {
            setPost(res.data)
            console.log(res)
         })
         .catch((err) => {
            console.log(err);
         })
        
    },[]);

    useEffect(() =>{
        var  response = axios.get("https://jsonplaceholder.typicode.com/albums/") 
        .then((res) => {
           setAlbum(res.data)
           console.log(res)
        })
        .catch((err) => {
           console.log(err);
        })
       
   },[]);

    
    return(
        <div>
            <h1>This page is ment for useEffect with API</h1>
            <h2>The contents inside my JSON post are</h2>
            {/*Posts API*/}
            <h1>Posts</h1>
            <h4 style={{fontWeight:"200"}}>
                {post.map((e)=>(
                    <li key={e.id} style={{listStyleType:"number"}}>{e.title}</li>
                ))}
            </h4>
            {/*Albums API*/}
            <h1>Albums</h1>
            <h4 style={{fontWeight:"200"}}>
                {album.map((e)=>(
                    <li key={e.id} style={{listStyleType:"number"}}>{e.title}</li>
                ))}
            </h4>
        </div>
    );
}

export default UseEffectAPI;