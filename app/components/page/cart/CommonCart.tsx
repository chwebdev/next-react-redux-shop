import React, { FC } from 'react'
import { useTypedSelector } from '@/app/hooks/useTypedSelector'
import { BiTrash } from 'react-icons/bi'

import styles from './Cart.module.scss'
import ProductList from './product/ProductList'
import Checkout from './checkout/Checkout'

const CommonCart: FC = () => {
	const { cart } = useTypedSelector(state => state.cart)

	if (cart.length) {
		return (
			<div className={styles.wrapper}>
				<ProductList />
				<Checkout />
			</div>
		)
	}

	return (
		<div
			className={styles.notFound}
			role='contentinfo'
			aria-label='plug-empty-cart'
		>
			<BiTrash />
		</div>
	)
}

export default CommonCart
