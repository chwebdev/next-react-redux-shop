import React, { FC } from 'react'
import Button from '@/app/components/ui/button/Button'
import { useActions } from '@/app/hooks/useActions'

import { IProductCounterProps } from './product.interface'
import styles from './Product.module.scss'
import { AiOutlineCloseCircle } from 'react-icons/ai'

const ProductCounter: FC<IProductCounterProps> = ({ cart }) => {
	const { incrementItemCart, decrementItemCart, deleteItemCart } = useActions()
	return (
		<div className={styles.counter}>
			<div className={styles.wrapper}>
				<Button
					className={styles.button}
					onClick={() => decrementItemCart(cart.item.id)}
					aria-label='button-decrement-cart'
				>
					-
				</Button>
				<span
					className={styles.value}
					role='contentinfo'
					aria-label='product-count'
				>
					{cart.count}
				</span>
				<Button
					className={styles.button}
					onClick={() => incrementItemCart(cart.item.id)}
					aria-label='button-increment-cart'
				>
					+
				</Button>
			</div>
			<button
				className={styles.delete}
				onClick={() => deleteItemCart(cart.item.id)}
				aria-label='button-delete-cart'
			>
				<AiOutlineCloseCircle />
			</button>
		</div>
	)
}

export default ProductCounter
