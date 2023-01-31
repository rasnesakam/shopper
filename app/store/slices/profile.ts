import { createSlice, Slice } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";

export const ProfileSlice = createSlice({
	name: "Profile",
	initialState: {
		name:null,
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

export const {setProfileData} = ProfileSlice.actions;

export default ProfileSlice.reducer;