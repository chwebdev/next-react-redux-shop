import { render, screen } from '@testing-library/react'
import Sidebar from '../Sidebar'

describe('Initializing Sidebar', () => {
	test('Should render without crashing', () => {
		render(<Sidebar />)
		const menuElement = screen.getByRole('navigation', {
			name: 'sidebar-menu'
		})
		const logoElement = screen.getByRole('banner', {
			name: 'logo'
		})

		expect(logoElement).toBeInTheDocument()
		expect(menuElement).toBeInTheDocument()
	})
})
