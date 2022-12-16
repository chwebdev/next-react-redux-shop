import React from 'react'
import { renderWithProviders } from '@/app/test/helpers/renderWithProviders'
import { screen } from '@testing-library/react'
import { mockProductsData } from '@/app/test/mocks/api/data/product'

import ProductList from '../ProductList'
import user from '@testing-library/user-event'
import Cart from '@/app/components/page/cart/Cart'

jest.mock('next/router', () => ({
	useRouter: () => ({
		push: jest.fn()
	})
}))

describe('Initializing ProductList', () => {
	const preloadedState = {
		cart: {
			cart: [
				{
					count: 1,
					item: mockProductsData[0]
				},
				{
					count: 2,
					item: mockProductsData[1]
				}
			]
		}
	}

	test('Should render without crashing', () => {
		renderWithProviders(<ProductList />)
	})

	test('Should render with props', () => {
		renderWithProviders(<ProductList />, { preloadedState })
		const titleElement = screen.getByText(mockProductsData[0].title)

		expect(titleElement).toBeInTheDocument()
	})

	test('Should render count product in cart if increment product', async () => {
		user.setup()
		renderWithProviders(<ProductList />, { preloadedState })
		const buttonIncrementElement = screen.getAllByRole('button', {
			name: 'button-increment-cart'
		})

		await user.click(buttonIncrementElement[0])

		expect(
			screen.getAllByRole('contentinfo', {
				name: 'product-count'
			})[0]
		).toHaveTextContent('2')
	})

	test('Should render count product in cart if decrement product', async () => {
		user.setup()
		renderWithProviders(<ProductList />, { preloadedState })
		const buttonDecrementElement = screen.getAllByRole('button', {
			name: 'button-decrement-cart'
		})

		await user.click(buttonDecrementElement[1])

		expect(
			screen.getAllByRole('contentinfo', {
				name: 'product-count'
			})[1]
		).toHaveTextContent('1')
	})

	test('Should remove count product if product have min count', async () => {
		const preloadedState = {
			cart: {
				cart: [
					{
						count: 1,
						item: mockProductsData[0]
					}
				]
			}
		}

		user.setup()
		renderWithProviders(<ProductList />, { preloadedState })
		const buttonDecrementElement = screen.getByRole('button', {
			name: 'button-decrement-cart'
		})

		await user.click(buttonDecrementElement)

		expect(
			screen.queryByRole('contentinfo', {
				name: 'product-count'
			})
		).not.toBeInTheDocument()
	})

	test('Should remove element in cart if click button delete', async () => {
		user.setup()
		renderWithProviders(<Cart />, {
			preloadedState
		})
		const buttonDeleteElement = screen.getAllByRole('button', {
			name: 'button-delete-cart'
		})

		await user.click(buttonDeleteElement[0])

		expect(
			screen.queryByText(mockProductsData[0].title)
		).not.toBeInTheDocument()
	})
})
