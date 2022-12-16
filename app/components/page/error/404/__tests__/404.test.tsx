import React from 'react'
import { renderWithProviders } from '@/app/test/helpers/renderWithProviders'
import { screen } from '@testing-library/react'

import NotFound from '../404'

jest.mock('next/router', () => ({
	useRouter: () => ({
		push: jest.fn()
	})
}))

describe('Initializing 404', () => {
	test('Should render without crashing', () => {
		renderWithProviders(<NotFound />)
		const buttonElement = screen.getByRole('button', {
			name: '404-return-home'
		})
		const titleElement = screen.getByRole('heading', {
			name: '404-heading'
		})

		expect(buttonElement).toBeInTheDocument()
		expect(titleElement).toBeInTheDocument()
	})
})
