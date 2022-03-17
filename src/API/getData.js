// import { API_KEY } from "./config";
import axios from "axios";

export const getAlbumIds = async () => {

    let res = await axios.get(`https://jsonplaceholder.typicode.com/albums`)
    return (res.data)
}
export const getAlbums = async () => {

    let res = await axios.get(`https://jsonplaceholder.typicode.com/photos`)
    return (res.data)
}

