import React, { FC } from 'react'
import Layout from '@/app/components/layout/Layout'
import Image from 'next/image'

import { IProductProps } from './product.interface'
import Info from './info/Info'
import styles from './Product.module.scss'

const Product: FC<IProductProps> = ({ product }) => {
	return (
		<Layout
			title={`${product.title} | ${product.category}`}
			description={`${product.description}`}
			variant='secondary'
		>
			<div>
				<div className={styles.wrapper}>
					<div className={styles.image}>
						<Image src={product.image} alt={product.title} fill />
					</div>
					<Info product={product} />
				</div>
			</div>
		</Layout>
	)
}

export default Product
