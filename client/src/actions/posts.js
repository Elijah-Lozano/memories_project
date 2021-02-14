import * as api from '../api';

// action creators: functions that return an action
// since this deals with async logic, we  need  redux thunk syntax
export const getPosts = () => async (dispatch) => {

    try {
        const { data } = await api.fetchPosts();
        // for redux thunk, instead of returning, we dispatch it.
        dispatch( { type: 'FETCH_ALL', payload: data});
    } catch (error) {
        console.log(error.message());

    }




}