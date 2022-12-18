import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import {
	API_CATEGORY,
	API_CATEGORY_PRODUCTS,
	API_URL
} from '@/app/utils/consts'
import { IProductItem } from '@/app/types/product.interface'

export const categoryApi = createApi({
	reducerPath: 'category/api',
	baseQuery: fetchBaseQuery({ baseUrl: API_URL }),
	endpoints: build => ({
		getCategories: build.query<string[], null>({
			query: () => API_CATEGORY
		}),
		getCategoryProducts: build.query<IProductItem[], string>({
			query: id => `${API_CATEGORY_PRODUCTS}/${id}`
		})
	})
})

export const { useGetCategoriesQuery, useGetCategoryProductsQuery } =
	categoryApi
