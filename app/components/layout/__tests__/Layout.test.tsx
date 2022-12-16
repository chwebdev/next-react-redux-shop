import React from 'react'
import { screen } from '@testing-library/react'

import Layout from '../Layout'
import { APP_CONFIG_NAME } from '@/app/utils/consts'
import { renderWithProviders } from '@/app/test/helpers/renderWithProviders'

jest.mock('next/head', () => {
	return {
		__esModule: true,
		default: ({ children }: { children: Array<React.ReactElement> }) => {
			return <>{children}</>
		}
	}
})

describe('Initializing Layout', () => {
	test('Should render without crashing', () => {
		renderWithProviders(
			<Layout title='Test App' description='App description'>
				Child
			</Layout>
		)
		const headerElement = screen.getByRole('banner')
		const mainElement = screen.getByRole('main')
		const footerElement = screen.getByRole('contentinfo')

		expect(headerElement).toBeInTheDocument()
		expect(mainElement).toBeInTheDocument()
		expect(footerElement).toBeInTheDocument()
	})

	test('Should render with props', () => {
		renderWithProviders(
			<Layout title='Test App' description='App description'>
				Child
			</Layout>
		)
		const childElement = screen.getByText('Child')
		const title = document.title
		const description = document
			.querySelector('meta[name=description]')
			?.attributes.getNamedItem('content')?.value

		expect(childElement).toBeInTheDocument()
		expect(title).toBe(`Test App | ${APP_CONFIG_NAME}`)
		expect(description).toBe('App description')
	})
})
