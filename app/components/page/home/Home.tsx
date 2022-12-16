import React, { FC } from 'react'
import Layout from '@/app/components/layout/Layout'
import Sidebar from '@/app/components/common/sidebar/Sidebar'
import ProductList from './product/ProductList'

const Home: FC = () => {
	return (
		<Layout title='Home' description='Home'>
			<Sidebar />
			<ProductList />
		</Layout>
	)
}

export default Home
