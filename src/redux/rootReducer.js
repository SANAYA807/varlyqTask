import { combineReducers } from "redux";
import reducer from "./albums/albumReducer";
import albumIDReducer from './albumsId/albumReducer'

export const rootReducer = combineReducers({ reducer, albumIDReducer })