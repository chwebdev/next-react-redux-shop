import React, { FC } from 'react'
import Image from 'next/image'
import cn from 'classnames'
import Link from 'next/link'
import { ROUTE_DEVELOPMENT } from '@/app/utils/consts'

import { IProductItemProps } from './product.interface'
import styles from './Product.module.scss'
import ProductCounter from './ProductCounter'

const ProductItem: FC<IProductItemProps> = ({ product }) => {
	return (
		<div className={styles.product}>
			<Link className={styles.imageWrapper} href={ROUTE_DEVELOPMENT}>
				<Image
					className={styles.image}
					src={product.image}
					alt={product.title}
					fill
				/>
			</Link>

			<div className={styles.navigation}>
				<div>
					<h3 className={cn(styles.title, styles.text)}>{product.title}</h3>
					<p className={cn(styles.description, styles.text)} role='paragraph'>
						{product.description}
					</p>
				</div>
				<p className={styles.price}>${product.price}</p>
			</div>

			<ProductCounter product={product} />
		</div>
	)
}

export default ProductItem
