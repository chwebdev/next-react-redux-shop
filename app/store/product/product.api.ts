import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { IProductItem } from '@/app/types/product.interface'
import { API_PRODUCT, API_URL } from '@/app/utils/consts'

export const productApi = createApi({
	reducerPath: 'product/api',
	baseQuery: fetchBaseQuery({ baseUrl: API_URL }),
	endpoints: build => ({
		getProducts: build.query<IProductItem[], number>({
			query: limit => `${API_PRODUCT}?limit=${limit}`
		})
	})
})

export const { useGetProductsQuery } = productApi
