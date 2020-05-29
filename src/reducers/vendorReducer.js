export function vendorReducer(state = {
}, action) {
    switch (action.type) {
        case "API_FETCH_SUCCESS":
            return {
                ...state,
                ...action.data.vendor
            }
        case "ADD_ITEM_SUCCESS":
            const addItemState = {...state}
            const itemData = {id: `${action.item.data.id}`, type: 'item'}
            addItemState[action.item.data.relationships.vendor.data.id].relationships.items.data = [...addItemState[action.item.data.relationships.vendor.data.id].relationships.items.data, itemData]
            return addItemState  
        case "ADD_VENDOR_SUCCESS":
            return {...state, 
                [action.vendor.data.id]: {...action.vendor.data}}
        case "ADD_BLOCK_SUCCESS":
            const addBlockState = {...state}
            const addBlockData = {id: `${action.block.data.id}`, type: 'block'}
            addBlockState[action.block.data.relationships.vendor.data.id].relationships.blocks.data = [...addBlockState[action.block.data.relationships.vendor.data.id].relationships.blocks.data, addBlockData]
            return addBlockState
        case "REMOVE_VENDOR":
            const newState = {...state}
            delete newState[action.deleteData.id]
            return newState
        case "REMOVE_ITEM":
            const removeItemState = {...state}
            removeItemState[action.deleteData.vendorId].relationships.items.data = removeItemState[action.deleteData.vendorId].relationships.items.data.filter(item  => item.id !== action.deleteData.id)
            return removeItemState
        case "REMOVE_BLOCK":
            const removeBlockState = {...state}
            removeBlockState[action.deleteData.vendorId].relationships.blocks.data = removeBlockState[action.deleteData.vendorId].relationships.blocks.data.filter(block  => block.id !== action.deleteData.id)
            return removeBlockState
        case "UPDATE_VENDOR":
            state = action.data
            return state
        default:
            return state
    }
}