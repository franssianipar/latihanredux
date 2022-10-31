import { GET_ALL_ALBUM } from "../types";
import axios from "axios";

export const getAllAlbum = () => async (dispatch) =>{
    try{
        const {data} = await axios.get(
            "https://jsonplaceholder.typicode.com/albums"
        );

        dispatch({
            type:GET_ALL_ALBUM,
            payload: data,
        })
        
    }catch (error){
        throw error;
    }
}