import React from 'react'
import { render, screen } from '@testing-library/react'
import Footer from '../Footer'

describe('Initializing Footer', () => {
	test('Should render without crashing', () => {
		render(<Footer />)
		const copy = screen.getByText('© 2022 Chaklidi Kirill')
		const link = screen.getByRole('link')

		expect(copy).toBeInTheDocument()
		expect(link).toBeInTheDocument()
	})
})
