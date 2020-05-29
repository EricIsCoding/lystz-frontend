export function itemReducer(state = {

}, action) {
    switch (action.type) {
        case "API_FETCH_SUCCESS":
          return {
              ...state,
              ...action.data.item
          }
        case "ADD_ITEM_SUCCESS":
            const addItemState = {...state, 
                [action.item.data.id]: {...action.item.data}}
                
            return addItemState
        case "REMOVE_ITEM":
            const newState = {...state}          
            delete newState[action.deleteData.id]
            return newState
        case "UPDATE_ITEM":
            state = action.data
            return state
        default:
            return state
    }
}