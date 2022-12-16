import { getTotal, getProductInCart } from '../cart'
import { ICartItemState } from '@/app/types/cart.interface'
import { mockProductsData } from '@/app/test/mocks/api/data/product'

describe('Initializing util cart', () => {
	describe('Initializing getTotal', () => {
		test('Should return total amount considering quantity of product', () => {
			const mockData: ICartItemState[] = [
				{
					count: 1,
					item: mockProductsData[0]
				},
				{
					count: 2,
					item: mockProductsData[1]
				}
			]

			expect(getTotal(mockData)).toBe(154.55)
		})
	})

	describe('Initializing getProductInCart', () => {
		test('Should return product in cart', () => {
			const mockData: ICartItemState[] = [
				{
					count: 1,
					item: mockProductsData[0]
				}
			]

			expect(getProductInCart(mockData, mockProductsData[0].id)).toEqual({
				count: 1,
				item: mockProductsData[0]
			})
		})

		test('Should return undefined if product not in cart', () => {
			const mockData: ICartItemState[] = [
				{
					count: 1,
					item: mockProductsData[0]
				}
			]

			expect(getProductInCart(mockData, mockProductsData[1].id)).toBe(undefined)
		})
	})
})
