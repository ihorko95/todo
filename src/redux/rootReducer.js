import { increment, decrement } from "./types";

export function rootReducer(state,action){
    switch (action.type) {
        case increment:
            {
                state++
               return state   
            }
        case decrement:
            {
                state-- 
                return state     
            }
    
        default:
            return state
    }
    
}