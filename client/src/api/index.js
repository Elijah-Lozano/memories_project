// use this to make API calls
import axios from 'axios';

// url points to our backend route
// this simply returns all the posts we have in the DB
const url = 'http://localhost:5000/posts';

const config = {
    headers: {
        'Content-Type': 'application/json'
    }
}

// get call to our posts url.
export const fetchPosts = () => axios.get(url);

export const createPost = (newPost) => {

    return axios.post(url, newPost, config)
        .then(res => {return res})
};

export const updatePost = (id, updatedPost) => axios.patch(`${url}/${id}`, updatedPost);