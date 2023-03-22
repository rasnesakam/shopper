import { Action, combineReducers, configureStore, ThunkAction } from "@reduxjs/toolkit";
import {persistedOrderReducer} from "./slices/order";
import { persistedProfileReducer } from "./slices/profile"
import { persistStore, FLUSH } from 'redux-persist';
import thunk from 'redux-thunk';

const combinedReducer = combineReducers({
	profile: persistedProfileReducer,
	order: persistedOrderReducer
});

const makeStore = () => configureStore({
	reducer: combinedReducer,
	devTools: process.env.NODE_ENV !== 'production',
	middleware: [thunk]
})

export type AppStore = ReturnType<typeof makeStore>;
export type AppState = ReturnType<AppStore['getState']>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, AppState, unknown, Action>

export const store = makeStore()
export const persistor = persistStore(makeStore());