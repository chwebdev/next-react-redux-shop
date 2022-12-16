import { rest } from 'msw'
import { API_PRODUCT, API_URL } from '@/app/utils/consts'
import { mockProductsData } from '../data/product'

export const handlersProduct = [
	rest.get(`${API_URL}/${API_PRODUCT}`, (req, res, ctx) => {
		return res(ctx.status(200), ctx.json(mockProductsData), ctx.delay(30))
	})
]
