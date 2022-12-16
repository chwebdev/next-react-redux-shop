import React from 'react'
import { renderWithProviders } from '@/app/test/helpers/renderWithProviders'

import Home from '../Home'

jest.mock('next/router', () => ({
	useRouter: () => ({
		push: jest.fn()
	})
}))

describe('Initializing Home', () => {
	test('Should render without crashing', () => {
		renderWithProviders(<Home />)
	})
})
