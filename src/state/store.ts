import {combineReducers, legacy_createStore} from "redux";
import {counterReducer} from "../reducers/counrer-reducer";

const rootReducer = combineReducers({
    counter: counterReducer
})

export const store = legacy_createStore(rootReducer)

export type rootStateType = ReturnType<typeof rootReducer>