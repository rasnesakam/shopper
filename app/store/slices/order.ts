import { createSlice, Slice, SliceCaseReducers } from "@reduxjs/toolkit";
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
		}
	}
})