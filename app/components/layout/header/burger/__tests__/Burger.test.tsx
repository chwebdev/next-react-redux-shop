import React from 'react'
import { render, screen } from '@testing-library/react'
import Burger from '../Burger'

describe('Initializing Burger', () => {
	test('Should render without crashing', () => {
		render(<Burger />)
		const burgerButtonElement = screen.getByRole('button')

		expect(burgerButtonElement).toBeInTheDocument()
	})
})
