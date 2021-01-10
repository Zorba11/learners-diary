import * as api from '../api';

//Action creators using redux-thunk

const getPosts = () => async(dispatch) => {
    const action = { type: 'FETCH_ALL', payload: [] }

    dispatch(action);
}