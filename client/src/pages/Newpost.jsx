import React from 'react'

import { useState,useContext } from 'react';
import { useNavigate } from "react-router-dom";
import userContext from '../context/userContext';
const Newpost = () => {
    const context = useContext(userContext);
    const { addPost } = context;
    const navigate = useNavigate();
    const [post, setPost] = useState({ title: "", summary: "", content: "" });


    // const change1 = (e) => {
    //     settitle(e.target.value)
    // }
    // const change2 = (e) => {
    //     setsummary(e.target.value)
    // }
    // const change3 = (newValue) => {
    //     setcontent(newValue.target.value)
    // }

    const submit = async (e) => {
        addPost(post.title,post.summary,post.content);

        // const data = new FormData();
        // data.set('title',title);
        // data.set('summary',summary);
        // data.set('content',content);
        // data.set('file',file[0]);
        e.preventDefault();
        // console.log(file)
    //    if(response.ok)
       navigate("/");
    }
    // const modules = {
    //     toolbar: [
    //         [{ 'header': [1, 2, false] }],
    //         ['bold', 'italic', 'underline', 'strike', 'blockquote'],
    //         [{ 'list': 'ordered' }, { 'list': 'bullet' }, { 'indent': '-1' }, { 'indent': '+1' }],
    //         ['link', 'image'],
    //         ['clean']
    //     ],
    // }

    // const formats = [
    //     'header',
    //     'bold', 'italic', 'underline', 'strike', 'blockquote',
    //     'list', 'bullet', 'indent',
    //     'link', 'image'
    // ]
    const onChange = (e) => {
        setPost({ ...post, [e.target.name]: e.target.value })
    }
    return (
        <div>
            <form onSubmit={submit}>
                <input type="title" name='title' placeholder="Title" value={post.title} onChange={onChange} />
                <input type="summary" name='summary' placeholder="Summary" onChange={onChange} value={post.summary} />
                <input type="file" name='file' onChange={onChange} />
                <input name="content" value={post.content}  onChange={onChange}  />
                <button className='pointer' disabled={post.title.length<5||post.summary.length<5||post.content.length<5} style={{ marginTop: "5px" }}>Create post</button>
            </form>
        </div>
    )
}

export default Newpost