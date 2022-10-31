import { GET_ALL_USERS } from "../types"; 
import axios from "axios";


export const getAllUser =() => async  (dispatch) =>{
    try{
        

        const {data} = await axios.get(
            `https://jsonplaceholder.typicode.com/users`
        );

        dispatch({
            type:GET_ALL_USERS,
            payload: data,
        })    
        

    }catch (error){
        throw error;
    }
}