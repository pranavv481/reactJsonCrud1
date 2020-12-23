import React from 'react'
import { useSelector } from 'react-redux';
import {useDispatch} from "react-redux";
import { deletePost } from '../Actions/postAction';
import {Link} from 'react-router-dom';
const Home = () => {
   
    const post = useSelector((state) => state)
    const { posts } = post.postReducers
    const dispatch = useDispatch();
    console.log(posts)
    return (
        <div>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Title</th>
                        <th scope="col">Body</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {posts ? posts.map(post => (
                        <tr key={post.id}>
                            <th scope="row">{post.id}</th>
                            <td>{post.title}</td>
                            <td>{post.body}</td>
                            <td>
                                <Link to={`post/${post.id}`}  className="btn btn-success">View</Link>
                                <Link to={`updatepost/${post.id}`} className="btn btn-warning">Update</Link>
                                <button onClick={()=>dispatch(deletePost(post.id))} className="btn btn-danger">Delete</button>
                            </td>
                        </tr>
                    )):<h1>Loading..</h1>}

                </tbody>
            </table>
        </div >
    )
}

export default Home
