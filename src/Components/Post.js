import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getPost } from '../Actions/postAction';

const Post = () => {
    const dispatch = useDispatch();
    const { id } = useParams();
    const post = useSelector(state => state)
    const { posts } = post.postReducers
    const loadPost = () => {
        dispatch(getPost(id))
    }
    useEffect(() => {
        loadPost()
    }, [])
    console.log(posts)
  

    return (
        <div className="container mt-5">
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">{posts.title}</h5>
                    <p className="card-text">{posts.body}</p>
                   
                </div>
            </div>
        </div>

    )
}

export default Post
