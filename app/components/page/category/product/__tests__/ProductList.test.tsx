import React from 'react'
import { renderWithProviders } from '@/app/test/helpers/renderWithProviders'
import { server } from '@/app/test/mocks/api/server'
import { rest } from 'msw'
import { screen } from '@testing-library/react'
import { API_CATEGORY_PRODUCTS, API_URL } from '@/app/utils/consts'
import {
	mockProductData,
	mockProductsData
} from '@/app/test/mocks/api/data/product'
import user from '@testing-library/user-event'

import ProductList from '../ProductList'

jest.mock('next/router', () => ({
	useRouter: () => ({
		push: jest.fn(),
		query: {
			id: 'test'
		}
	})
}))

describe('Initializing ProductList', () => {
	test('Should render empty data', async () => {
		server.use(
			rest.get(`${API_URL}/${API_CATEGORY_PRODUCTS}/test`, (req, res, ctx) => {
				return res(ctx.json([]))
			})
		)
		renderWithProviders(<ProductList />)
		const plugElement = await screen.findByRole('contentinfo')
		const statusElement = screen.queryByRole('status')

		expect(plugElement).toBeInTheDocument()
		expect(statusElement).not.toBeInTheDocument()
	})

	test('Should render data and without button more if result less limit', async () => {
		server.use(
			rest.get(`${API_URL}/${API_CATEGORY_PRODUCTS}/test`, (req, res, ctx) => {
				return res(ctx.json([mockProductData]))
			})
		)
		renderWithProviders(<ProductList />)
		const statusElement = screen.queryByRole('status')
		expect(statusElement).toBeInTheDocument()

		const itemElement = await screen.findByText(mockProductData.title)
		const buttonMoreElement = screen.queryByRole('button', {
			name: 'button-more'
		})

		expect(itemElement).toBeInTheDocument()
		expect(statusElement).not.toBeInTheDocument()
		expect(buttonMoreElement).not.toBeInTheDocument()
	})

	test('Should render with data and button more if result equal limit', async () => {
		server.use(
			rest.get(`${API_URL}/${API_CATEGORY_PRODUCTS}/test`, (req, res, ctx) => {
				return res(ctx.json(mockProductsData))
			})
		)
		renderWithProviders(<ProductList />)
		const buttonMoreElement = await screen.findByRole('button', {
			name: 'button-more'
		})

		expect(buttonMoreElement).toBeInTheDocument()
	})

	test('Should render count product in cart if add product', async () => {
		user.setup()
		server.use(
			rest.get(`${API_URL}/${API_CATEGORY_PRODUCTS}/test`, (req, res, ctx) => {
				return res(ctx.json(mockProductsData))
			})
		)
		renderWithProviders(<ProductList />)
		const buttonElements = await screen.findAllByRole('button', {
			name: 'button-add-cart'
		})

		await user.click(buttonElements[0])

		expect(
			screen.getByRole('contentinfo', {
				name: 'product-count'
			})
		).toHaveTextContent('1')
	})

	test('Should render count product in cart if increment product', async () => {
		user.setup()
		server.use(
			rest.get(`${API_URL}/${API_CATEGORY_PRODUCTS}/test`, (req, res, ctx) => {
				return res(ctx.json(mockProductsData))
			})
		)
		renderWithProviders(<ProductList />)
		const buttonAddElements = await screen.findAllByRole('button', {
			name: 'button-add-cart'
		})

		await user.click(buttonAddElements[0])
		await user.click(
			screen.getByRole('button', {
				name: 'button-increment-cart'
			})
		)

		expect(
			screen.getByRole('contentinfo', {
				name: 'product-count'
			})
		).toHaveTextContent('2')
	})

	test('Should render count product in cart if decrement product', async () => {
		user.setup()
		server.use(
			rest.get(`${API_URL}/${API_CATEGORY_PRODUCTS}/test`, (req, res, ctx) => {
				return res(ctx.json(mockProductsData))
			})
		)
		renderWithProviders(<ProductList />)
		const buttonAddElements = await screen.findAllByRole('button', {
			name: 'button-add-cart'
		})

		await user.click(buttonAddElements[0])
		await user.click(
			screen.getByRole('button', {
				name: 'button-increment-cart'
			})
		)
		await user.click(
			screen.getByRole('button', {
				name: 'button-decrement-cart'
			})
		)

		expect(
			screen.getByRole('contentinfo', {
				name: 'product-count'
			})
		).toHaveTextContent('1')
	})

	test('Should remove count product if product have min count', async () => {
		user.setup()
		server.use(
			rest.get(`${API_URL}/${API_CATEGORY_PRODUCTS}/test`, (req, res, ctx) => {
				return res(ctx.json(mockProductsData))
			})
		)
		renderWithProviders(<ProductList />)
		const buttonAddElements = await screen.findAllByRole('button', {
			name: 'button-add-cart'
		})

		await user.click(buttonAddElements[0])
		await user.click(
			screen.getByRole('button', {
				name: 'button-decrement-cart'
			})
		)

		expect(
			screen.queryByRole('contentinfo', {
				name: 'product-count'
			})
		).not.toBeInTheDocument()
	})
})
