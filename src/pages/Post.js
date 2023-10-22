import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export default function Post() {
    let {postId} = useParams();
    const [post, setPost] = useState({});
    useEffect(()=>{
        axios.get(`https://mysql-react-deploy-heroku-86aa26c93ee9.herokuapp.com/api/get/${postId}`)
        .then((data)=>{
            setPost({
                title: data.data[0].title,
                post_text: data.data[0].post_text,
                username: data.data[0].username,
                date_posted: data.data[0].date_posted,
            })
        });
    }, [postId]);
    return (
        <div className="Post">
            <h1>{post.title}</h1>
            <p>{post.post_text}</p>
            <h4>{post.username}</h4>
        </div>
    )
}
