import React, { FC } from 'react'
import Image from 'next/image'
import cn from 'classnames'
import Link from 'next/link'
import { ROUTE_PRODUCT } from '@/app/utils/consts'

import ProductCounter from './ProductCounter'
import { IProductItemProps } from './product.interface'
import styles from './Product.module.scss'

const ProductItem: FC<IProductItemProps> = ({ cart }) => {
	return (
		<div className={styles.product}>
			<Link
				className={styles.imageWrapper}
				href={`${ROUTE_PRODUCT}/${cart.item.id}`}
			>
				<Image
					className={styles.image}
					src={cart.item.image}
					alt={cart.item.title}
					fill
				/>
			</Link>

			<div className={styles.navigation}>
				<h3 className={cn(styles.title, styles.text)}>{cart.item.title}</h3>
				<p className={cn(styles.description, styles.text)} role='paragraph'>
					{cart.item.description}
				</p>
				<p className={styles.price}>${cart.item.price}</p>
				<ProductCounter cart={cart} />
			</div>
		</div>
	)
}

export default ProductItem
