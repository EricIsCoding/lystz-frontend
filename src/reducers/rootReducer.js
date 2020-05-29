import { vendorReducer } from './vendorReducer'
import { blockReducer } from './blockReducer'
import { itemReducer } from './itemReducer'
import { combineReducers } from 'redux'

export const rootReducer = combineReducers({
        block: blockReducer,
        item: itemReducer,
        vendor: vendorReducer
})