import React from 'react'
import { renderWithProviders } from '@/app/test/helpers/renderWithProviders'
import { screen } from '@testing-library/react'

import Cart from '../Cart'

jest.mock('next/router', () => ({
	useRouter: () => ({
		push: jest.fn()
	})
}))

describe('Initializing Cart', () => {
	test('Should render without crashing', () => {
		renderWithProviders(<Cart />)
	})

	test('Should render plug with empty data', () => {
		renderWithProviders(<Cart />)
		const plugElement = screen.getByRole('contentinfo', {
			name: 'plug-empty-cart'
		})

		expect(plugElement).toBeInTheDocument()
	})
})
