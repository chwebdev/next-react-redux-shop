import React from 'react'
import Category from '@/app/components/page/category/Category'

const CategoryPage = () => {
	return <Category />
}

export async function getServerSideProps() {
	return {
		props: {}
	}
}

export default CategoryPage
