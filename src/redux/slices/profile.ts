import { createSlice, Slice, SliceCaseReducers } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";
import { PersistConfig, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import config from "../../../src/functions/config";
import Account from "../../../src/types/Account";

export const ProfileSlice: Slice<Account, SliceCaseReducers<Account>,"Profile"> = createSlice({
	name: "Profile",
	initialState: {
		name:"",
		authToken: ""
	},
	reducers: {
		setProfileData: (state, action) => {
			state.name = action.payload;
			state.authToken = action.payload.authToken;
		}
	},
	extraReducers: {
		[HYDRATE]: (state, action) => {return {
				...state,
				...action.payload.profile
			}
		}
	}
});

export const { setProfileData } = ProfileSlice.actions;

const persistConfig: PersistConfig<Account> = {
	key: `${config.APP_NAME_NORMALIZED}/profile`,
	storage
}
const persistedProfileReducer = persistReducer(persistConfig, ProfileSlice.reducer)


export { persistedProfileReducer };
