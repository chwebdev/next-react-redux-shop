import React, { FC, useMemo } from 'react'
import { useTypedSelector } from '@/app/hooks/useTypedSelector'
import Button from '@/app/components/ui/button/Button'
import { ROUTE_DEVELOPMENT } from '@/app/utils/consts'
import { useRouter } from 'next/router'
import styles from './Checkout.module.scss'
import { getTotal } from '@/app/service/cart/cart'

const Checkout: FC = () => {
	const { cart } = useTypedSelector(state => state.cart)
	const total = useMemo(() => getTotal(cart), [cart])
	const router = useRouter()

	return (
		<div className={styles.checkout}>
			<div className={styles.head}>
				<Button
					size='m'
					className={styles.button}
					onClick={() => router.push(ROUTE_DEVELOPMENT)}
				>
					Checkout
				</Button>
			</div>
			<nav>
				<h3>Order total</h3>
				<ul>
					<li>
						<div>Cart ({cart.length})</div>
						<div>${total}</div>
					</li>
				</ul>
			</nav>
		</div>
	)
}

export default Checkout
