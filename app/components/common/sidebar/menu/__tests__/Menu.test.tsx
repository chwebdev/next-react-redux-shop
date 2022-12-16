import React from 'react'
import { render, screen } from '@testing-library/react'
import Menu from '../Menu'

describe('Initializing Menu', () => {
	const mockItems: string[] = ['Test item']

	test('Should render without crashing', () => {
		render(<Menu title='Home' items={[]} />)
	})

	test('Should render with props', () => {
		render(<Menu title='Title' items={mockItems} />)
		const titleElement = screen.getByText('Title')
		const itemElement = screen.getByText('Test item')
		const statusElement = screen.queryByRole('status')

		expect(statusElement).not.toBeInTheDocument()
		expect(itemElement).toBeInTheDocument()
		expect(titleElement).toBeInTheDocument()
	})

	test('Should not render with loading', () => {
		render(<Menu title='Title' items={mockItems} load={true} />)
		const itemElement = screen.queryByText('Test item')
		const statusElement = screen.getByRole('status')

		expect(statusElement).toBeInTheDocument()
		expect(itemElement).not.toBeInTheDocument()
	})
})
