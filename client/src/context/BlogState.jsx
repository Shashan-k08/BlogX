import React from "react";
import UserContext from "./Usercontext";
// import { useState } from "react";

const BlogState = (props) => {
  return (
    <UserContext.Provider value={{  }}>
        {props.children}
    </UserContext.Provider>
  )
}

export default BlogState
