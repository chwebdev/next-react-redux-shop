import React from 'react'
import { renderWithProviders } from '@/app/test/helpers/renderWithProviders'
import { mockProductData } from '@/app/test/mocks/api/data/product'
import { screen } from '@testing-library/react'

import Product from '../Product'

jest.mock('next/router', () => ({
	useRouter: () => ({
		push: jest.fn()
	})
}))

describe('Initializing Product', () => {
	test('Should render without crashing', () => {
		renderWithProviders(<Product product={mockProductData} />)
		const imageElement = screen.getByRole('img')
		const infoElement = screen.getByRole('contentinfo', {
			name: 'info'
		})

		expect(imageElement).toBeInTheDocument()
		expect(infoElement).toBeInTheDocument()
	})
})
