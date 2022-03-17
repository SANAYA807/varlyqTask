import { FETCH_ALBUMID_FAILURE, FETCH_ALBUMID_REQUEST, FETCH_ALBUMID_SUCCESS } from "./albumtypes"

const iniatialState = {
    loading: false,
    data: [],
    error: ''
}

const albumIDReducer = (state = iniatialState, action) => {
    switch (action.type) {
        case FETCH_ALBUMID_REQUEST:
            return {
                ...state,
                loading: true
            }
        case FETCH_ALBUMID_SUCCESS:
            return {
                error: '',
                loading: false,
                data: action.payload
            }
        case FETCH_ALBUMID_FAILURE:
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

export default albumIDReducer;