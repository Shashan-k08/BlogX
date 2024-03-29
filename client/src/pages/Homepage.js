import React from 'react'
import Post from '../components/Post'
import { useEffect,useState } from 'react'
import Header from '../components/Header'

const Homepage = () => {
  const [posts, setposts] = useState([])
  useEffect(() => {
    fetch('http://localhost:5000/api/post/fetchpost').then(response=>{
      response.json().then(posts=>{
        console.log(posts)
        setposts(posts);
      });
    });
   
  }, [])
  
  return (
    <>
    <Header/>
    <div className="post-box">
    
    {posts.length >0 && posts.map(post=>(
      <Post {...post}/>
    ))}
    </div>
    </>
       
  )
}

export default Homepage