import { GET_POST, CREATE_POST, UPDATE_POST, DELETE_POST } from "./Types";

export const getPost = (id) => ({
    type: GET_POST,
    payload: id
})
export const createPost = (post) => ({
    type: CREATE_POST,
    payload: post
})
export const updatePost = (post) => ({
    type: UPDATE_POST,
    payload: post
})
export const deletePost = (id) => ({
    type: DELETE_POST,
    payload: id
})






