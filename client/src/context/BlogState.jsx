import React from "react";
import UserContext from "./userContext";
// import { useState } from "react";

const BlogState = (props) => {
  const host = "http://localhost:5000";

  const addPost = async (title, summary, content) => {

    //Api call
    const response = await fetch(`${host}/api/post/newpost`, {
      method: "POST",
      headers: {

        'Content-Type': 'application/json',
        "auth-token": localStorage.getItem('token')
      },
      body: JSON.stringify({ title, summary, content })
    })
    // eslint-disable-next-line
    const json = await response.json();
    console.log(json);
    console.log("Adding a new note")



  }
  return (
    <UserContext.Provider value={{ addPost }}>
      {props.children}
    </UserContext.Provider>
  )
}

export default BlogState
