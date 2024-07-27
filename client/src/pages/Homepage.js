import React from 'react'
import Post from '../components/Post'
import { useEffect,useState } from 'react'
import Header from '../components/Header'

const Homepage = () => {
  const [posts, setposts] = useState([])
  useEffect(() => {
    fetch('https://blogx-y6xc.onrender.com/api/post/fetchpost').then(response=>{
      response.json().then(posts=>{
        console.log(posts)
        setposts(posts);
      });
    });
   
  }, [])
  
  return (
    <>
   
    <div className="post-box">
    
    {posts.length >0 && posts.map(post=>(
      <Post {...post}/>
    ))}
    </div>
    </>
       
  )
}

export default Homepage