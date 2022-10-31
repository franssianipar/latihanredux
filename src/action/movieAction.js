import { GET_ALL_MOVIE } from "../types";
import axios from "axios";
import { API_KEY } from "../types";

const getQuery = () => {
    const search = window.location.search;
    const params = new URLSearchParams(search);
    return params.get('query');
}

export const getAllMovie = () => async (dispatch) =>{
    try{
        const {data} = await axios.get(
            "https://api.themoviedb.org/3/movie/popular",{
                headers: {
                    "Authorization": "Bearer " + API_KEY
                },
                params: {
                    query: getQuery()
                }
            }
                
            
           
        );

        dispatch({
            type:GET_ALL_MOVIE,
            payload: data,
        })
        
    }catch (error){
        throw error;
    }
}