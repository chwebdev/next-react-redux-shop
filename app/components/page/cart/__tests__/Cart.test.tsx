import React from 'react'
import { renderWithProviders } from '@/app/test/helpers/renderWithProviders'
import { screen } from '@testing-library/react'

import Cart from '../Cart'

describe('Initializing Cart', () => {
	test('Should render without crashing', () => {
		renderWithProviders(<Cart />)
	})

	test('Should render plug with empty data', async () => {
		renderWithProviders(<Cart />)
		const plugElement = await screen.findByRole('contentinfo', {
			name: 'plug-empty-cart'
		})

		expect(plugElement).toBeInTheDocument()
	})
})
