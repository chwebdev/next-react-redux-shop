import React, { FC } from 'react'
import Layout from '@/app/components/layout/Layout'
import { useTypedSelector } from '@/app/hooks/useTypedSelector'
import { BiTrash } from 'react-icons/bi'

import styles from './Cart.module.scss'
import ProductList from './product/ProductList'
import Checkout from './checkout/Checkout'

const Cart: FC = () => {
	const { cart } = useTypedSelector(state => state.cart)

	return (
		<Layout title='Cart' description='Cart' variant='secondary'>
			{cart.length ? (
				<div className={styles.wrapper}>
					<ProductList />
					<Checkout />
				</div>
			) : (
				<div
					className={styles.notFound}
					role='contentinfo'
					aria-label='plug-empty-cart'
				>
					<BiTrash />
				</div>
			)}
		</Layout>
	)
}

export default Cart
