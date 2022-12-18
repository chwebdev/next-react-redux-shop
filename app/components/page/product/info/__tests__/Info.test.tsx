import React from 'react'
import { renderWithProviders } from '@/app/test/helpers/renderWithProviders'
import { mockProductData } from '@/app/test/mocks/api/data/product'
import user from '@testing-library/user-event'
import { screen } from '@testing-library/react'

import Info from '../Info'
import { ICartState } from '@/app/types/cart.interface'

jest.mock('next/router', () => ({
	useRouter: () => ({
		push: jest.fn()
	})
}))

describe('Initializing Info', () => {
	const dataMock: ICartState = {
		cart: [
			{
				count: 1,
				item: mockProductData
			}
		]
	}

	test('Should render without crashing', () => {
		renderWithProviders(<Info product={mockProductData} />)
	})

	test('Should render count product in cart if add product', async () => {
		user.setup()
		renderWithProviders(<Info product={mockProductData} />)
		const buttonElements = await screen.findAllByRole('button', {
			name: 'button-add-cart'
		})

		await user.click(buttonElements[0])

		expect(
			screen.getByRole('contentinfo', {
				name: 'product-count'
			})
		).toHaveTextContent('1')
	})

	test('Should render count product in cart if increment product', async () => {
		user.setup()
		renderWithProviders(<Info product={mockProductData} />, {
			preloadedState: {
				cart: dataMock
			}
		})
		const buttonIncrementElement = await screen.findByRole('button', {
			name: 'button-increment-cart'
		})

		await user.click(buttonIncrementElement)

		expect(
			screen.getByRole('contentinfo', {
				name: 'product-count'
			})
		).toHaveTextContent('2')
	})

	test('Should render count product in cart if decrement product', async () => {
		user.setup()
		renderWithProviders(<Info product={mockProductData} />, {
			preloadedState: {
				cart: {
					cart: [
						{
							count: 2,
							item: mockProductData
						}
					]
				}
			}
		})
		const buttonIncrementElement = await screen.findByRole('button', {
			name: 'button-decrement-cart'
		})

		await user.click(buttonIncrementElement)

		expect(
			screen.getByRole('contentinfo', {
				name: 'product-count'
			})
		).toHaveTextContent('1')
	})

	test('Should remove count product if product have min count', async () => {
		user.setup()
		renderWithProviders(<Info product={mockProductData} />, {
			preloadedState: {
				cart: dataMock
			}
		})
		const buttonIncrementElement = await screen.findByRole('button', {
			name: 'button-decrement-cart'
		})

		await user.click(buttonIncrementElement)

		expect(
			screen.queryByRole('contentinfo', {
				name: 'product-count'
			})
		).not.toBeInTheDocument()
	})
})
