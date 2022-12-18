import React from 'react'
import { mockProductData } from '@/app/test/mocks/api/data/product'
import { renderWithProviders } from '@/app/test/helpers/renderWithProviders'

import Rating from '../Rating'

describe('Initializing Rading', () => {
	test('Should render without crashing', () => {
		renderWithProviders(<Rating rating={mockProductData.rating.rate} />)
	})
})
