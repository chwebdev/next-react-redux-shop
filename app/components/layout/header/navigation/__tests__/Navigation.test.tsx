import { renderWithProviders } from '@/app/test/helpers/renderWithProviders'
import { screen } from '@testing-library/react'
import Navigation from '../Navigation'

describe('Initializing Cart', () => {
	test('Should render without crashing', () => {
		renderWithProviders(<Navigation />)
		const linkSearchElement = screen.getByRole('link', {
			name: 'search'
		})
		const linkProfileElement = screen.getByRole('link', {
			name: 'profile'
		})
		const linkCartElement = screen.getByRole('link', {
			name: 'cart'
		})

		expect(linkSearchElement).toBeInTheDocument()
		expect(linkProfileElement).toBeInTheDocument()
		expect(linkCartElement).toBeInTheDocument()
	})
})
