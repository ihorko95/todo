export function createStore(rootReducer,initialState){
    let state =  rootReducer(initialState,{type:'___INIT___'})
    let subscribers = []
    return{
        dispatch(action){
            state = rootReducer(state,action)
            subscribers.forEach(cb =>cb())
            //subscribers = []
        },
        subscribe(callback){
            subscribers.push(callback)
        },
        getState(){
            return state
        },
        getSub(){
            return subscribers
        }
       
    }
}