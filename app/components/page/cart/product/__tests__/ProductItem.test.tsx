import { screen } from '@testing-library/react'
import React from 'react'
import ProductItem from '../ProductItem'
import { mockProductsData } from '@/app/test/mocks/api/data/product'
import { renderWithProviders } from '@/app/test/helpers/renderWithProviders'
import { ICartItemState } from '@/app/types/cart.interface'

jest.mock('next/router', () => ({
	useRouter: () => ({
		push: jest.fn()
	})
}))

describe('Initializing Product Item', () => {
	const mockData: ICartItemState = {
		count: 1,
		item: mockProductsData[0]
	}

	test('Should render without crashing', () => {
		renderWithProviders(<ProductItem cart={mockData} />)
		const titleElement = screen.getByText(mockData.item.title)
		const descriptionElement = screen.getByText(mockData.item.description)

		expect(titleElement).toBeInTheDocument()
		expect(descriptionElement).toBeInTheDocument()
	})

	test('Should render price with prefix', () => {
		renderWithProviders(<ProductItem cart={mockData} />)
		const priceElement = screen.getByText(`$${mockData.item.price}`)

		expect(priceElement).toBeInTheDocument()
	})
})
