import React from 'react'

import { useState, useContext } from 'react';
import { useNavigate } from "react-router-dom";
import userContext from '../context/userContext';
const host = "http://localhost:5000";
const Newpost = () => {

    const navigate = useNavigate();
    const [post, setPost] = useState({ title: "", summary: "", content: "" });
    const [file, setfile] = useState(null)
    const submit = async (e) => {
        console.log(file)
        //Api call    
        e.preventDefault()
        const response = await fetch(`${host}/api/post/newpost`, {
            method: "POST",
            headers: {

                'Content-Type': 'application/json',
                "auth-token": localStorage.getItem('token')
            },
            body:  JSON.stringify({ title: post.title, summary: post.summary, content: post.content},formData)
        })
        // eslint-disable-next-line
        const json = await response.json();
        console.log(json);
        console.log("Adding a new note")
    }

    const modules = {
        toolbar: [
            [{ 'header': [1, 2, false] }],
            ['bold', 'italic', 'underline', 'strike', 'blockquote'],
            [{ 'list': 'ordered' }, { 'list': 'bullet' }, { 'indent': '-1' }, { 'indent': '+1' }],
            ['link', 'image'],
            ['clean']
        ],
    }

    const formats = [
        'header',
        'bold', 'italic', 'underline', 'strike', 'blockquote',
        'list', 'bullet', 'indent',
        'link', 'image'
    ]
    const onChange = (e) => {
        setPost({ ...post, [e.target.name]: e.target.value })
    }
    const formData = new FormData();
    const handleImageSelect = (event) => {
        setfile(event.target.files[0]);


        // Append the image file to the FormData object
        formData.append('image', file);
    };



    return (
        <div className='new-postbox'>
            <div className="quote-box">Conversation is king. Content is just something to talk about <br></br> ~Cory Doctorow </div>
            <form className='new-post' onSubmit={submit}>
                <input type="title" name='title' placeholder="Title" value={post.title} onChange={onChange} />
                <input type="summary" name='summary' placeholder="Summary" onChange={onChange} value={post.summary} />
                <input type="file" name='file' accept="image/*" onChange={handleImageSelect} />
                <input name="content" value={post.content} onChange={onChange} />
                <button className='pointer' disabled={post.title.length < 5 || post.summary.length < 5 || post.content.length < 5} style={{ marginTop: "5px" }}>Create post</button>
            </form>
        </div>
    )
}

export default Newpost