import React, { FC } from 'react'
import { FiShoppingCart } from 'react-icons/fi'
import { useTypedSelector } from '@/app/hooks/useTypedSelector'
import styles from './Cart.module.scss'
import Link from 'next/link'
import { ROUTE_CART } from '@/app/utils/consts'

const Cart: FC = () => {
	const { cart } = useTypedSelector(state => state.cart)

	return (
		<div className={styles.cart}>
			<Link href={ROUTE_CART} aria-label='cart'>
				{cart.length > 0 && (
					<span className={styles.icon} role='contentinfo'>
						{cart.length}
					</span>
				)}
				<FiShoppingCart />
			</Link>
		</div>
	)
}

export default Cart
