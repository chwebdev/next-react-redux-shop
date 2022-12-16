import React, { FC } from 'react'
import { useTypedSelector } from '@/app/hooks/useTypedSelector'

import styles from './Product.module.scss'
import ProductItem from './ProductItem'

const ProductList: FC = () => {
	const { cart } = useTypedSelector(state => state.cart)

	return (
		<div className={styles.list}>
			{cart.map(item => {
				return <ProductItem key={item.item.id} cart={item} />
			})}
		</div>
	)
}

export default ProductList
