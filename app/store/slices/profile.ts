import { createSlice, Slice, SliceCaseReducers } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";
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

export default ProfileSlice.reducer;
