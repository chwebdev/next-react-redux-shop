import React from 'react'
import Sidebar from '../Sidebar'
import { renderWithProviders } from '@/app/test/helpers/renderWithProviders'
import { server } from '@/app/test/mocks/api/server'
import { rest } from 'msw'
import { screen } from '@testing-library/react'
import { API_CATEGORY, API_URL } from '@/app/utils/consts'
import { mockCategorysData } from '@/app/test/mocks/api/data/category'

describe('Initializing Sidebar', () => {
	test('Should render without crashing', () => {
		renderWithProviders(<Sidebar />)
		const asideElement = screen.getByRole('complementary')

		expect(asideElement).toBeInTheDocument()
	})

	test('Should render with category', async () => {
		server.use(
			rest.get(`${API_URL}/${API_CATEGORY}`, (req, res, ctx) => {
				return res(ctx.json(mockCategorysData))
			})
		)
		renderWithProviders(<Sidebar />)
		const statusElement = screen.queryByRole('status')
		expect(statusElement).toBeInTheDocument()

		const item = await screen.findByText(mockCategorysData[0])
		expect(statusElement).not.toBeInTheDocument()
		expect(item).toBeInTheDocument()
	})
})
