import { createStore} from "redux";

let initialState = {
    counter1:0,
    counter2:0
}

function reducer(state=initialState,action){
    switch(action.type){
        case "Inc":
            return {...state , counter1:state.counter1 + 1 , counter2:state.counter2 + 1} 
        case "Dec":
            return {...state , counter1:state.counter1 - 1 , counter2:state.counter2 - 1}
        case "Reset":
            return initialState
        default:
            return state
    }
}


let store = createStore(reducer)
export default store