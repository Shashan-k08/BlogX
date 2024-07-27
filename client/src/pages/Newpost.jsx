import React from 'react'

import { useState, useContext } from 'react';
import { useNavigate } from "react-router-dom";
//import userContext from '../context/userContext';
const host = "https://blogx-y6xc.onrender.com";
const Newpost = () => {

    const navigate = useNavigate();
    const [title, settitle] = useState('')
    const [summary, setsummary] = useState('')
    const [content, setcontent] = useState('')
    const [file, setfile] = useState('');

    const onChange1 = (e) => {
        settitle(e.target.value)
       
    }
    const onChange2 = (e) => {
      
        setsummary(e.target.value)
        
    }
    const onChange3 = (e) => {
       
        setcontent(e.target.value)
    }

    // const change3 = (newValue) => {
    //     setcontent(newValue.target.value)
    // }

    const submit = async (e) => {
        const data = new FormData();
        data.set('title', title);
        data.set('summary', summary);
        data.set('content', content);
        data.set('file', file[0]);
        e.preventDefault();
         console.log(data);

        const response = await fetch('https://blogx-y6xc.onrender.com/api/post/newpost',
            {
                method: "POST",
                body: data,

            }
        )

        console.log(response)

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




    return (
        <div className='new-postbox'>
            <div className="quote-box">Conversation is king. Content is just something to talk about <br></br> ~Cory Doctorow </div>
            <form className='new-post' onSubmit={submit}>
                <input type="title" name='title' placeholder="Title" value={title} onChange={onChange1} />
                <input type="summary" name='summary' placeholder="Summary" onChange={onChange2} value={summary} />
                <input type="file" onChange={ev => setfile(ev.target.files)} />
                <input name="content" value={content} onChange={onChange3} />
                <button className='pointer' disabled={title.length < 5 || summary.length < 5 || content.length < 5} style={{ marginTop: "5px" }}>Create post</button>
            </form>
        </div>
    )
}

export default Newpost