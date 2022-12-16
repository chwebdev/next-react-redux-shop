import { rest } from 'msw'
import { API_CATEGORY, API_URL } from '@/app/utils/consts'
import { mockCategorysData } from '../data/category'

export const handlersCategory = [
	rest.get(`${API_URL}/${API_CATEGORY}`, (req, res, ctx) => {
		return res(ctx.status(200), ctx.json(mockCategorysData), ctx.delay(30))
	})
]
