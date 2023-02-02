import { createSlice, Slice, SliceCaseReducers } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";
import Order from "../../../src/types/Order";
import Product from "../../../src/types/Product";

export const OrderSlice: Slice<Order, SliceCaseReducers<Order>,"Order"> = createSlice({
	name:"Order",
	initialState: {
		products: new Array<{product: Product;amount: number;status?: string;}>()
	},
	reducers: {
		setOrderData: (state, action) => {
			state.products = action.payload;
		},
		addOrder: (state, action) => {
			state.products.push(action.payload)
		},
		removeOrder: (state, action) => {
			console.log(action.payload)
			let index = state.products.indexOf(action.payload,0);
			console.log(index);
			if (index > -1)
				state.products.splice(index,1);
		}
	},
	extraReducers: {
		[HYDRATE]: (state, action) => {return {
				...state,
				...action.payload.order
			}
		}
	}
})

export const { setOrderData, addOrder, removeOrder } = OrderSlice.actions;



export default OrderSlice.reducer;