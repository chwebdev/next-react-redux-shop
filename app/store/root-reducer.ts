import { combineReducers } from 'redux'
import { reducer as toastrReducer } from 'react-redux-toastr'
import { productApi } from '@/app/store/product/product.api'
import { categoryApi } from '@/app/store/category/category.api'
import { cartReducer } from '@/app/store/cart/cartSlice'

export const rootReducer = combineReducers({
	[productApi.reducerPath]: productApi.reducer,
	[categoryApi.reducerPath]: categoryApi.reducer,
	cart: cartReducer,
	toastr: toastrReducer
})
