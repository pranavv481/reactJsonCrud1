import React,{useEffect, useState} from 'react'
import {useDispatch, useSelector} from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import { getPost, updatePost } from '../Actions/postAction';
const UpdatePost = () => {
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");
    const {id} = useParams();
    const dispatch = useDispatch();
    const post = useSelector(state=>state.postReducers.posts)
    console.log(post)
    console.log(id)
    const loadPost = ()=>{
        dispatch(getPost(id))
    }
    useEffect(()=>{
        loadPost()   
    },[])
    console.log(post)
    useEffect(() => {
        if (post) {
          setTitle(post.title);
          setBody(post.body);
        }
      }, [post]);
    
    const history = useHistory();
    const onSubmitHandler = (e)=>{
        e.preventDefault();
        const newUpdate= {
            id:post.id,
            title,
            body
        }
        console.log(newUpdate)
        dispatch(updatePost(newUpdate))
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
            <button className="btn btn-primary">UPDATE NEW POST</button>

        </div>
        </form>
    )
}

export default UpdatePost
