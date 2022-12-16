import { render, screen } from '@testing-library/react'
import Logo from '../Logo'

describe('Initializing Logo', () => {
	test('Should render without crashing', () => {
		render(<Logo />)
		const link = screen.getByRole('link')

		expect(link).toBeInTheDocument()
	})
})
