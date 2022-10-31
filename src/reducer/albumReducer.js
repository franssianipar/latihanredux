import { GET_ALL_ALBUM} from "../types";

const initialState={
    album:[],
};

const albumReducer =(state=initialState , action)=>{
    switch(action.type){
        case GET_ALL_ALBUM:
            return{
                ...state,
                album: action.payload,
                
            };
        default:
            return state;
    }
}

export default albumReducer;