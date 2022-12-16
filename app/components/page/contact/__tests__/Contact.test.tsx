import React from 'react'
import { renderWithProviders } from '@/app/test/helpers/renderWithProviders'
import { screen } from '@testing-library/react'

import Contact from '../Contact'

describe('Initializing Contact', () => {
	test('Should render without crashing', () => {
		renderWithProviders(<Contact />)
		const titleElement = screen.getByRole('heading', {
			name: 'contact-title'
		})
		const linkEmailElement = screen.getByRole('link', {
			name: 'link-email'
		})
		const linkGitElement = screen.getByRole('link', {
			name: 'link-github'
		})

		expect(titleElement).toBeInTheDocument()
		expect(linkEmailElement).toBeInTheDocument()
		expect(linkGitElement).toBeInTheDocument()
	})
})
