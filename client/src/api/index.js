// use this to make API calls
import axios from 'axios';

// url points to our backend route
// this simply returns all the posts we have in the DB
const url = 'http://localhost:5000/posts';

// get call to our posts url.
export const fetchPosts = () => axios.get(url);