import React from 'react'
import { mockProductsData } from '@/app/test/mocks/api/data/product'
import { renderWithProviders } from '@/app/test/helpers/renderWithProviders'
import { screen } from '@testing-library/react'

import Checkout from '../Checkout'

jest.mock('next/router', () => ({
	useRouter: () => ({
		push: jest.fn()
	})
}))

describe('Initializing Countrer', () => {
	test('Should render without crashing', () => {
		renderWithProviders(<Checkout />)
		const buttonCheckoutElement = screen.getByRole('button')
		const titleElement = screen.getByRole('heading')

		expect(buttonCheckoutElement).toBeInTheDocument()
		expect(titleElement).toBeInTheDocument()
	})

	test('Should render with props', () => {
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
		renderWithProviders(<Checkout />, { preloadedState })
		const countElement = screen.getByText('Cart (2)')
		const totalElement = screen.getByText('$154.55')

		expect(countElement).toBeInTheDocument()
		expect(totalElement).toBeInTheDocument()
	})
})
