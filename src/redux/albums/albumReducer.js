import { FETCH_ALBUM_FAILURE, FETCH_ALBUM_REQUEST, FETCH_ALBUM_SUCCESS } from "./albumtypes"

const iniatialState = {
    loading: false,
    data: [],
    error: ''
}

const reducer = (state = iniatialState, action) => {
    switch (action.type) {
        case FETCH_ALBUM_REQUEST:
            return {
                ...state,
                loading: true
            }
        case FETCH_ALBUM_SUCCESS:
            return {
                error: '',
                loading: false,
                data: action.payload
            }
        case FETCH_ALBUM_FAILURE:
            return {
                loading: false,
                data: [],
                error: action.payload
            }
        default:
            return {
                ...state
            }
    }
}

export default reducer;