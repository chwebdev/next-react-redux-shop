import React, { FC } from 'react'
import Product from '@/app/components/page/product/Product'
import { IProductProps } from '@/app/components/page/product/product.interface'
import { GetServerSideProps } from 'next'
import { API_PRODUCT, API_URL } from '@/app/utils/consts'

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
	try {
		const res = await fetch(`${API_URL}/${API_PRODUCT}/${query.id}`)
		const data = await res.json()

		return { props: { product: data } }
	} catch (e) {
		return {
			notFound: true
		}
	}
}

const ProductPage: FC<IProductProps> = ({ product }) => {
	return <Product product={product} />
}

export default ProductPage
