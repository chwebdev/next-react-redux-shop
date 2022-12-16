import { renderWithProviders } from '@/app/test/helpers/renderWithProviders'
import { screen } from '@testing-library/react'
import { mockProductsData } from '@/app/test/mocks/api/data/product'

import Cart from '../Cart'

describe('Initializing Cart', () => {
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

	test('Should render without crashing', () => {
		renderWithProviders(<Cart />)
		const linkElement = screen.getByRole('link')

		expect(linkElement).toBeInTheDocument()
	})

	test('Should render with empty cart and without count', () => {
		renderWithProviders(<Cart />)
		const cartCount = screen.queryByRole('contentinfo')

		expect(cartCount).not.toBeInTheDocument()
	})

	test('Should render with cart product count', () => {
		renderWithProviders(<Cart />, { preloadedState })
		const cartCount = screen.getByText('1')

		expect(cartCount).toBeInTheDocument()
	})
})
