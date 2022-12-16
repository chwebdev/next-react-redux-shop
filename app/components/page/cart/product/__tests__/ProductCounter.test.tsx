import React from 'react'
import { ICartItemState } from '@/app/types/cart.interface'
import { mockProductsData } from '@/app/test/mocks/api/data/product'
import { renderWithProviders } from '@/app/test/helpers/renderWithProviders'
import { screen } from '@testing-library/react'
import user from '@testing-library/user-event'

import ProductCounter from '../ProductCounter'

const mockIncrementItemCartFn = jest.fn()
const mockDecrementItemCartFn = jest.fn()
const mockDeleteItemCartFn = jest.fn()

jest.mock('@/app/hooks/useActions', () => ({
	useActions: () => ({
		incrementItemCart: mockIncrementItemCartFn,
		decrementItemCart: mockDecrementItemCartFn,
		deleteItemCart: mockDeleteItemCartFn
	})
}))

describe('Initializing Product Countrer', () => {
	const mockData: ICartItemState = {
		count: 1,
		item: mockProductsData[0]
	}

	test('Should render without crashing', () => {
		renderWithProviders(<ProductCounter cart={mockData} />)
		const buttonDecrementElement = screen.getByRole('button', {
			name: 'button-decrement-cart'
		})
		const buttonIncrementElement = screen.getByRole('button', {
			name: 'button-increment-cart'
		})
		const buttonDeleteElement = screen.getByRole('button', {
			name: 'button-delete-cart'
		})

		expect(buttonDecrementElement).toBeInTheDocument()
		expect(buttonIncrementElement).toBeInTheDocument()
		expect(buttonDeleteElement).toBeInTheDocument()
	})

	test('Should increment product in cart', async () => {
		user.setup()
		renderWithProviders(<ProductCounter cart={mockData} />)
		const buttonIncrementElement = screen.getByRole('button', {
			name: 'button-increment-cart'
		})

		await user.click(buttonIncrementElement)

		expect(mockIncrementItemCartFn).toBeCalledTimes(1)
	})

	test('Should decrement product in cart', async () => {
		user.setup()
		renderWithProviders(<ProductCounter cart={mockData} />)
		const buttonDecrementElement = screen.getByRole('button', {
			name: 'button-decrement-cart'
		})

		await user.click(buttonDecrementElement)

		expect(mockDecrementItemCartFn).toBeCalledTimes(1)
	})

	test('Should delete product in cart', async () => {
		user.setup()
		renderWithProviders(<ProductCounter cart={mockData} />)
		const buttonDeleteElement = screen.getByRole('button', {
			name: 'button-delete-cart'
		})

		await user.click(buttonDeleteElement)

		expect(mockDeleteItemCartFn).toBeCalledTimes(1)
	})
})
