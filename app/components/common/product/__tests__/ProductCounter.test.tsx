import React from 'react'
import {
	mockProductData,
	mockProductsData
} from '@/app/test/mocks/api/data/product'
import { renderWithProviders } from '@/app/test/helpers/renderWithProviders'
import ProductCounter from '../ProductCounter'
import { screen } from '@testing-library/react'
import user from '@testing-library/user-event'

jest.mock('next/router', () => ({
	useRouter: () => ({
		push: jest.fn()
	})
}))

const mockAddItemCartFn = jest.fn()
const mockIncrementItemCartFn = jest.fn()
const mockDecrementItemCartFn = jest.fn()

jest.mock('@/app/hooks/useActions', () => ({
	useActions: () => ({
		addItemCart: mockAddItemCartFn,
		incrementItemCart: mockIncrementItemCartFn,
		decrementItemCart: mockDecrementItemCartFn
	})
}))

describe('Initializing Product Countrer', () => {
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
		renderWithProviders(<ProductCounter product={mockProductData} />)
	})

	test('Should add product in cart', async () => {
		user.setup()
		renderWithProviders(<ProductCounter product={mockProductData} />)
		const buttonAddElement = screen.getByRole('button', {
			name: 'button-add-cart'
		})

		await user.click(buttonAddElement)

		expect(mockAddItemCartFn).toBeCalledTimes(1)
	})

	test('Should increment product in cart', async () => {
		user.setup()
		renderWithProviders(<ProductCounter product={mockProductsData[0]} />, {
			preloadedState
		})
		const buttonIncrementElement = screen.getByRole('button', {
			name: 'button-increment-cart'
		})

		await user.click(buttonIncrementElement)

		expect(mockIncrementItemCartFn).toBeCalledTimes(1)
	})

	test('Should decrement product in cart', async () => {
		user.setup()
		renderWithProviders(<ProductCounter product={mockProductsData[0]} />, {
			preloadedState
		})
		const buttonDecrementElement = screen.getByRole('button', {
			name: 'button-decrement-cart'
		})

		await user.click(buttonDecrementElement)

		expect(mockDecrementItemCartFn).toBeCalledTimes(1)
	})
})
