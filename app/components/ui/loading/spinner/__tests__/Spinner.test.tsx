import { render, screen } from '@testing-library/react'
import Spinner from '../Spinner'

describe('Initializing Spinner', () => {
	test('Should render without crashing', () => {
		render(<Spinner />)
		const spinnerElement = screen.getByRole('status')

		expect(spinnerElement).toBeInTheDocument()
	})
})
