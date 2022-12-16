import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { API_CATEGORY, API_URL } from '@/app/utils/consts'

export const categoryApi = createApi({
	reducerPath: 'category/api',
	baseQuery: fetchBaseQuery({ baseUrl: API_URL }),
	endpoints: build => ({
		getCategories: build.query<string[], null>({
			query: () => API_CATEGORY
		})
	})
})

export const { useGetCategoriesQuery } = categoryApi
