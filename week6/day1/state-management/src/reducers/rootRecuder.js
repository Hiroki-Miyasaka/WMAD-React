const initialState = { count: 0 }

const counterReducer = (state = initialState, action) => {
    switch(action.type){
        case "INCREMENT":
            // logic
            return { count: state.count + 1 }
        case "DECREMENT":
            // logic
            return { count: state.count > 0 ? state.count - 1 : state.count }
        case "SUPERDUPER":
                // logic
            return { count: state.count + 55 }
        default:
            return state;
    }
}

export default counterReducer;