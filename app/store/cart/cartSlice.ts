import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { ICartState } from '@/app/types/cart.interface'
import { IProductItem } from '@/app/types/product.interface'

const initialState: ICartState = {
	cart: []
}

export const cartSlice = createSlice({
	name: 'cart',
	initialState,
	reducers: {
		addItemCart(state, action: PayloadAction<IProductItem>) {
			state.cart.push({
				count: 1,
				item: action.payload
			})
		},
		incrementItemCart(state, action: PayloadAction<number>) {
			state.cart = state.cart.map(cart =>
				cart.item.id == action.payload
					? { ...cart, count: cart.count + 1 }
					: cart
			)
		},
		decrementItemCart(state, action: PayloadAction<number>) {
			state.cart = state.cart.flatMap(cart => {
				if (cart.item.id === action.payload) {
					if (cart.count - 1 !== 0) {
						return { ...cart, count: cart.count - 1 }
					}
					return []
				}

				return cart
			})
		},
		deleteItemCart(state, action: PayloadAction<number>) {
			state.cart = state.cart.filter(({ item }) => item.id !== action.payload)
		}
	}
})

export const cartReducer = cartSlice.reducer
export const cartActions = cartSlice.actions
