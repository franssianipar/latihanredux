import { GET_ALL_TODOS } from "../types";
import axios from "axios";

export const getAllTodos = () => async (dispatch) =>{
    try{
        const {data} = await axios.get(
            "https://jsonplaceholder.typicode.com/todos"
        );

        dispatch({
            type:GET_ALL_TODOS,
            payload: data,
        })
        
    }catch (error){
        throw error;
    }
}