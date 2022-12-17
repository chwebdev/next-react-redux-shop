import { rest } from 'msw'
import {
	API_CATEGORY,
	API_CATEGORY_PRODUCTS,
	API_URL
} from '@/app/utils/consts'
import { mockCategorysData } from '../data/category'
import { mockProductsData } from '../data/product'

export const handlersCategory = [
	rest.get(`${API_URL}/${API_CATEGORY}`, (req, res, ctx) => {
		return res(ctx.status(200), ctx.json(mockCategorysData), ctx.delay(30))
	}),
	rest.get(`${API_URL}/${API_CATEGORY_PRODUCTS}/test`, (req, res, ctx) => {
		return res(ctx.status(200), ctx.json(mockProductsData), ctx.delay(30))
	})
]
