import { GET_ALL_DETAIL } from "../types";
import axios from "axios";

import { API_KEY } from "../types";



export const getAllDetail = () => async (dispatch) =>{
    try{
        const {data} = await axios.get(
            "https://api.themoviedb.org/3/movie/popular", {
                headers: {
                    "Authorization": "Bearer " + API_KEY
                }
            });

        dispatch({
            type:GET_ALL_DETAIL,
            payload: data,
        })
        
    }catch (error){
        throw error;
    }
}