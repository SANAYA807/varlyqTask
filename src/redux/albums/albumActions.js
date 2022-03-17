import axios from 'axios'
import { FETCH_ALBUM_REQUEST, FETCH_ALBUM_SUCCESS, FETCH_ALBUM_FAILURE } from './albumtypes'


export const fetchAlbumRequest = () => {
    return {
        type: FETCH_ALBUM_REQUEST
    }
}
export const fetchAlbumSuccess = (albums) => {
    return {
        type: FETCH_ALBUM_SUCCESS,
        payload: albums
    }
}
export const fetchAlbumFailure = (err) => {
    return {
        type: FETCH_ALBUM_FAILURE,
        payload: err
    }
}

export const fetchAlbums = () => {
    return (dispatch) => {
        dispatch(fetchAlbumRequest)
        axios.get(`https://jsonplaceholder.typicode.com/photos`)
            .then(res => {
                const albums = res.data
                dispatch(fetchAlbumSuccess(albums))
            }).catch(err => {
                const errMsg = err.message
                dispatch(fetchAlbumFailure(errMsg))
            })
    }
}