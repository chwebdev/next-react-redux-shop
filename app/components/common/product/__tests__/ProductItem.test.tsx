import { screen } from '@testing-library/react'
import React from 'react'
import ProductItem from '../ProductItem'
import { mockProductData } from '@/app/test/mocks/api/data/product'
import { renderWithProviders } from '@/app/test/helpers/renderWithProviders'

jest.mock('next/router', () => ({
	useRouter: () => ({
		push: jest.fn()
	})
}))

describe('Initializing Product Item', () => {
	test('Should render without crashing', () => {
		renderWithProviders(<ProductItem product={mockProductData} />)
		const titleElement = screen.getByText(mockProductData.title)
		const descriptionElement = screen.getByText(mockProductData.description)

		expect(titleElement).toBeInTheDocument()
		expect(descriptionElement).toBeInTheDocument()
	})

	test('Should render price with prefix', () => {
		renderWithProviders(<ProductItem product={mockProductData} />)
		const priceElement = screen.getByText(`$${mockProductData.price}`)

		expect(priceElement).toBeInTheDocument()
	})
})
