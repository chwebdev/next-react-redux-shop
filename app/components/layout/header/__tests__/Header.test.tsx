import { screen } from '@testing-library/react'
import Header from '../Header'
import user from '@testing-library/user-event'
import { renderWithProviders } from '@/app/test/helpers/renderWithProviders'

describe('Initializing Header', () => {
	test('Should render without crashing', () => {
		renderWithProviders(<Header />)
		const logoElement = screen.getByRole('link', {
			name: 'logo'
		})
		const menuElement = screen.getByRole('navigation', {
			name: 'menu'
		})
		const navigationElement = screen.getByRole('navigation', {
			name: 'navigation'
		})
		const burgerElement = screen.getByRole('button', {
			name: 'burger'
		})

		expect(burgerElement).toBeInTheDocument()
		expect(logoElement).toBeInTheDocument()
		expect(menuElement).toBeInTheDocument()
		expect(navigationElement).toBeInTheDocument()
	})

	test('Should open popup', async () => {
		user.setup()
		renderWithProviders(<Header />)
		const buttonElement = screen.getByRole('button')

		await user.click(buttonElement)

		expect(
			screen.getByRole('dialog', {
				name: 'popup'
			})
		).toBeInTheDocument()
	})
})
