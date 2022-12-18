import React from 'react'
import { renderWithProviders } from '@/app/test/helpers/renderWithProviders'

import Category from '../Category'

jest.mock('next/router', () => ({
	useRouter: () => ({
		push: jest.fn(),
		query: {
			id: 'test'
		}
	})
}))

describe('Initializing Category', () => {
	test('Should render without crashing', () => {
		renderWithProviders(<Category />)
	})
})
