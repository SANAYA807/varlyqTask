import axios from 'axios'
import { FETCH_ALBUMID_REQUEST, FETCH_ALBUMID_SUCCESS, FETCH_ALBUMID_FAILURE } from './albumtypes'


export const fetchAlbumIdRequest = () => {
    return {
        type: FETCH_ALBUMID_REQUEST
    }
}
export const fetchAlbumIdSuccess = (albums) => {
    return {
        type: FETCH_ALBUMID_SUCCESS,
        payload: albums
    }
}
export const fetchAlbumIdFailure = (err) => {
    return {
        type: FETCH_ALBUMID_FAILURE,
        payload: err
    }
}

export const fetchAlbumsID = () => {
    return (dispatch) => {
        dispatch(fetchAlbumIdRequest)
        axios.get(`https://jsonplaceholder.typicode.com/albums`)
            .then(res => {
                const albums = res.data
                dispatch(fetchAlbumIdSuccess(albums))
            }).catch(err => {
                const errMsg = err.message
                dispatch(fetchAlbumIdFailure(errMsg))
            })
    }
}