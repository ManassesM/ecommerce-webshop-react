import { configureStore } from '@reduxjs/toolkit'

import productModalReducer from './product-modal/productModalSlice'
import cartItemsSlice from './shopping-card/cartItemsSlide'

export const store = configureStore({
	reducer: {
		productModal: productModalReducer,
		cartItems: cartItemsSlice,
	},
})
