import React, { useState } from 'react';
import '../App.css';
import axios from 'axios';

export default function CreatePost() {
  const [username, setUsername] = useState('');
  const [title, setTitle] = useState('');
  const [text, setText] = useState('');
  const submitPost = () =>{
    axios.post('https://mysql-react-deploy-heroku-86aa26c93ee9.herokuapp.com/api/create', {
      username: username,
      title: title,
      post_text: text
    });
  }
  return (
    <div className="CreatePost">
      <div className="uploadPost" >
        <label htmlFor="username">Username:</label>
        <input type="text" name="username" id="username" onChange={(e)=>setUsername(e.target.value)}/>
        <label htmlFor="title">Title:</label>
        <input type="text" name="title" id="title"  onChange={(e)=>setTitle(e.target.value)}/>
        <label htmlFor="post_text">Post text:</label>
        <input type='textarea' name="post_text" id="post_text"  onChange={(e)=>setText(e.target.value)}/>
        <button onClick={submitPost}>Submit Post</button>
      </div>
    </div>
  )
}
