import React from 'react'
import { renderWithProviders } from '@/app/test/helpers/renderWithProviders'
import { screen } from '@testing-library/react'

import Development from '../Development'

jest.mock('next/router', () => ({
	useRouter: () => ({
		push: jest.fn()
	})
}))

describe('Initializing Development', () => {
	test('Should render without crashing', () => {
		renderWithProviders(<Development />)
		const buttonElement = screen.getByRole('button', {
			name: 'development-return-home'
		})
		const titleElement = screen.getByRole('heading', {
			name: 'development-heading'
		})

		expect(buttonElement).toBeInTheDocument()
		expect(titleElement).toBeInTheDocument()
	})
})
