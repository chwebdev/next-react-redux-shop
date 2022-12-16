import { cartActions, cartReducer } from '@/app/store/cart/cartSlice'
import { mockProductData } from '@/app/test/mocks/api/data/product'
import { ICartState } from '@/app/types/cart.interface'

describe('Initializing cartSlice', () => {
	test('Should return the initial state', () => {
		expect(cartReducer(undefined, { type: undefined })).toEqual({ cart: [] })
	})

	test('Should add product to cart', () => {
		expect(
			cartReducer({ cart: [] }, cartActions.addItemCart(mockProductData))
		).toEqual({
			cart: [
				{
					count: 1,
					item: mockProductData
				}
			]
		})
	})

	test('Should increment product in cart', () => {
		const previousState: ICartState = {
			cart: [
				{
					count: 1,
					item: mockProductData
				}
			]
		}

		expect(
			cartReducer(
				previousState,
				cartActions.incrementItemCart(mockProductData.id)
			)
		).toEqual({
			cart: [
				{
					count: 2,
					item: mockProductData
				}
			]
		})
	})

	test('Should decrement product in cart', () => {
		const previousState: ICartState = {
			cart: [
				{
					count: 2,
					item: mockProductData
				}
			]
		}

		expect(
			cartReducer(
				previousState,
				cartActions.decrementItemCart(mockProductData.id)
			)
		).toEqual({
			cart: [
				{
					count: 1,
					item: mockProductData
				}
			]
		})
	})

	test('Should remove product if product have min count in cart', () => {
		const previousState: ICartState = {
			cart: [
				{
					count: 1,
					item: mockProductData
				}
			]
		}

		expect(
			cartReducer(
				previousState,
				cartActions.decrementItemCart(mockProductData.id)
			)
		).toEqual({
			cart: []
		})
	})

	test('Should remove product by id in cart', () => {
		const previousState: ICartState = {
			cart: [
				{
					count: 1,
					item: mockProductData
				}
			]
		}

		expect(
			cartReducer(previousState, cartActions.deleteItemCart(mockProductData.id))
		).toEqual({
			cart: []
		})
	})
})
