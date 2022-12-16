import React, { FC, useMemo } from 'react'
import Button from '@/app/components/ui/button/Button'
import { useTypedSelector } from '@/app/hooks/useTypedSelector'
import { useActions } from '@/app/hooks/useActions'
import { useRouter } from 'next/router'
import { ROUTE_CART } from '@/app/utils/consts'
import { getProductInCart } from '@/app/service/cart/cart'

import { IProductCounterProps } from './product.interface'
import styles from './Product.module.scss'

const ProductCounter: FC<IProductCounterProps> = ({ product }) => {
	const router = useRouter()
	const { cart } = useTypedSelector(state => state.cart)
	const { addItemCart, incrementItemCart, decrementItemCart } = useActions()
	const currentCart = useMemo(
		() => getProductInCart(cart, product.id),
		[cart, product.id]
	)

	return (
		<div className={styles.counter}>
			{currentCart ? (
				<div className={styles.wrapper}>
					<div className={styles.section}>
						<Button
							className={styles.button}
							onClick={() => decrementItemCart(product.id)}
							aria-label='button-decrement-cart'
						>
							-
						</Button>
						<span
							className={styles.value}
							role='contentinfo'
							aria-label='product-count'
						>
							{currentCart.count}
						</span>
						<Button
							className={styles.button}
							onClick={() => incrementItemCart(product.id)}
							aria-label='button-increment-cart'
						>
							+
						</Button>
					</div>
					<Button onClick={() => router.push(ROUTE_CART)}>To cart</Button>
				</div>
			) : (
				<Button
					onClick={() => addItemCart(product)}
					aria-label='button-add-cart'
				>
					Add cart
				</Button>
			)}
		</div>
	)
}

export default ProductCounter
