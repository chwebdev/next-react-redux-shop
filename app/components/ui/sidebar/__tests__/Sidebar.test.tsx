import React from 'react'
import { render, screen } from '@testing-library/react'
import Sidebar from '../Sidebar'

describe('Initializing Sidebar', () => {
	test('Should render without crashing', () => {
		render(<Sidebar>Child</Sidebar>)
	})

	test('Should render with props', () => {
		render(<Sidebar>Child</Sidebar>)
		const child = screen.getByText('Child')

		expect(child).toBeInTheDocument()
	})
})
