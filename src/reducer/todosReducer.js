import { GET_ALL_TODOS } from "../types";

const initialState={
    todos:[],
};

const todosReducer =(state=initialState , action)=>{
    switch(action.type){
        case GET_ALL_TODOS:
            return{
                ...state,
                todos: action.payload,
                
            };
        default:
            return state;
    }
}

export default todosReducer;