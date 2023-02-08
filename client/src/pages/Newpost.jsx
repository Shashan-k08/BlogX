import React from 'react'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css';
import { useState } from 'react';
import { useNavigate } from "react-router-dom";
const Newpost = () => {
    const navigate = useNavigate();
    const [title, settitle] = useState('')
    const [summary, setsummary] = useState('')
    const [content, setcontent] = useState('')
    const [file, setfile] = useState('');

    const change1 = (e) => {
        settitle(e.target.value)
    }
    const change2 = (e) => {
        setsummary(e.target.value)
    }
    // const change3 = (newValue) => {
    //     setcontent(newValue.target.value)
    // }

    const submit = async (e) => {
        const data = new FormData();
        data.set('title',title);
        data.set('summary',summary);
        data.set('content',content);
        data.set('file',file[0]);
        e.preventDefault();
        // console.log(file);

      const response= await  fetch('http://localhost:5000/api/post/newpost',
            {
                method: "POST",
                body:data,
                credentials:'include',
            }
        )
       if(response.ok)
       navigate("/");
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
        <div>
            <form onSubmit={submit}>
                <input type="title" placeholder="Title" value={title} onChange={change1} />
                <input type="summary" placeholder="Summary" onChange={change2} value={summary} />
                <input type="file"  onChange={ev => setfile(ev.target.files)} />
                <ReactQuill value={content} modules={modules} onChange={ newValue=>setcontent(newValue)} formats={formats} />
                <button style={{ marginTop: "5px" }}>Create post</button>
            </form>
        </div>
    )
}

export default Newpost