import React, { useState } from 'react'
import {useDispatch} from 'react-redux';
import { useHistory } from 'react-router-dom';
import shortid from "shortid";
import { createPost } from '../Actions/postAction';
const AddPost = () => {
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");
    const dispatch = useDispatch();
    const history = useHistory();
    const onSubmitHandler = (e)=>{
        e.preventDefault();
        const newPost= {
            id:shortid.generate(),
            title,
            body
        }
        console.log(newPost)
        dispatch(createPost(newPost))
        history.push("/");
    } 
    return (
        <form onSubmit={onSubmitHandler}>
        <div className="container mt-5">
            <div className="form-group">
                <label htmlFor="">Title</label>
                <input type="text" className="form-control" value={title} onChange={(e) => setTitle(e.target.value)} />
            </div>
            <div className="form-group">
                <label htmlFor="">Body</label>
                <textarea name="" id="" cols="30" rows="10" className="form-control" value={body} onChange={(e) => setBody(e.target.value)}></textarea>
            </div>
            <button className="btn btn-primary">ADD NEW POST</button>

        </div>
        </form>
    )
}

export default AddPost
