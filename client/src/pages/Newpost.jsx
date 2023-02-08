import React from 'react'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css';
import { useState } from 'react';

const Newpost = () => {

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
    const change3 = (newValue) => {
        setcontent(newValue.target.value)
    }

    const submit = (e) => {
        const data = new FormData();
        data.set('title',title);
        data.set('summary',summary);
        data.set('content',content);
        e.preventDefault();

        // fetch('http://localhost:5000/api/post/newpost',
        //     {
        //         method: ""
        //     }
        // )
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
                <input type="file" value={file} onChange={ev => setfile(ev.target.files)} />
                <ReactQuill value={content} modules={modules} onChange={change3} formats={formats} />
                <button style={{ marginTop: "5px" }}>Create post</button>
            </form>
        </div>
    )
}

export default Newpost