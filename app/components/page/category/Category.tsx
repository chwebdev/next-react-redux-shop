import React from 'react'
import Layout from '@/app/components/layout/Layout'
import Sidebar from '@/app/components/common/sidebar/Sidebar'
import ProductList from './product/ProductList'
import { useRouter } from 'next/router'

const Category = () => {
	const router = useRouter()

	return (
		<Layout title={`Category - ${router.query.id}`} description='Category'>
			<Sidebar />
			<ProductList />
		</Layout>
	)
}

export default Category
