import {applyMiddleware, combineReducers, createStore} from "redux";
import thunk from 'redux-thunk'
import reducers from "./reducers";

const rootReducer = combineReducers(reducers)

export const store = createStore(rootReducer, applyMiddleware(thunk))
export const rootState = (state: RootState) => state.data

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch