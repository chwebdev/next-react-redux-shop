import { render, screen } from '@testing-library/react'
import Button from '../Button'

describe('Initializing Button', () => {
	test('Should render without crashing', () => {
		render(<Button>Child</Button>)
		const buttonElement = screen.getByRole('button')

		expect(buttonElement).toBeInTheDocument()
	})

	test('Should render with props', () => {
		render(<Button size='m'>Child</Button>)
		const buttonElement = screen.getByText('Child')

		expect(buttonElement).toBeInTheDocument()
		expect(buttonElement).toBeEnabled()
	})

	test('Should render with props loading or to be disabled', () => {
		render(<Button load={true}>Child</Button>)
		const buttonElement = screen.getByRole('button')

		expect(buttonElement).toBeDisabled()
		expect(buttonElement).toHaveTextContent('Processing...')
	})
})
