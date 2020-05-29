export function blockReducer(state = {

}, action) {
    switch (action.type) {
        case "API_FETCH_SUCCESS":
          return {
              ...state,
              ...action.data.block
          }
        case "ADD_ITEM_SUCCESS":
            const addItemState = {...state}
            const itemData = {id: `${action.item.data.id}`, type: 'item'}
            debugger
            addItemState[action.item.data.relationships.block.data.id].relationships.items.data = [...addItemState[action.item.data.relationships.block.data.id].relationships.items.data, itemData]
            
            return addItemState
        case "ADD_BLOCK_SUCCESS":
            return {...state, 
                [action.block.data.id]: {...action.block.data}}
        case "REMOVE_BLOCK":
            const newState = {...state}
            delete newState[action.deleteData.id]
            return newState
        case "REMOVE_ITEM":
            const removeItemState = {...state}
            removeItemState[action.deleteData.blockId].relationships.items.data = removeItemState[action.deleteData.blockId].relationships.items.data.filter(item  => item.id !== action.deleteData.id)
            return removeItemState
        case "REMOVE_VENDOR":
            const removeVendorState = {...state}
            action.deleteData.blockIds.forEach(id => delete removeVendorState[id])
            return removeVendorState
        case "UPDATE_BLOCK":
            state = action.data
            return state
        default:
            return state
    }
}