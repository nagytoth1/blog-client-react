import React, { useEffect, useState } from 'react'
import axios from 'axios';
import {useNavigate} from 'react-router-dom';
export default function MainPage() {
  const [postList, setPostList] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    axios.get('https://mysql-react-deploy-heroku-86aa26c93ee9.herokuapp.com/api/get').then((data)=>{
      setPostList(data.data)
    });
  }, []);
  return (
    <div className='MainPage'>
      <div className="PostContainer">
        {postList.map((post, key) => (
          <div className="Post" key={key}>
          <h1>{post.title}</h1>
          <p>{post.post_text.length <= 400 ? post.post_text : post.post_text.substring(0,400) + ' ... '}</p>
          <h4>{post.username}</h4>
          <button  onClick={()=>navigate(`/post/${ post.id}`)}>Show Full Post</button>
          </div>
        ))}
      </div>
    </div>
  )
}
