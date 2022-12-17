import { renderWithProviders } from '@/app/test/helpers/renderWithProviders'
import { screen } from '@testing-library/react'
import Navigation from '../Navigation'

describe('Initializing Cart', () => {
	test('Should render without crashing', async () => {
		renderWithProviders(<Navigation />)
		const linkSearchElement = screen.getByRole('link', {
			name: 'search'
		})
		const linkProfileElement = screen.getByRole('link', {
			name: 'profile'
		})
		const linkCartElement = await screen.findByRole('link', {
			name: 'cart'
		})

		expect(linkSearchElement).toBeInTheDocument()
		expect(linkProfileElement).toBeInTheDocument()
		expect(linkCartElement).toBeInTheDocument()
	})
})
