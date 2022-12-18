import React, { FC } from 'react'
import { IInfoProps } from './info.interface'
import Rating from '@/app/components/common/product/rating/Rating'
import styles from './Info.module.scss'
import dynamic from 'next/dynamic'

const DynamicProductCounter = dynamic(
	() => import('@/app/components/common/product/ProductCounter'),
	{
		ssr: false
	}
)

const Info: FC<IInfoProps> = ({ product }) => {
	return (
		<div role='contentinfo' aria-label='info'>
			<div className={styles.head}>
				<div className={styles.titleWrapp}>
					<h1 className={styles.title}>{product.title}</h1>
					<div className={styles.price}>${product.price}</div>
				</div>
				<Rating rating={product.rating.rate} />
			</div>
			<div className={styles.description}>{product.description}</div>
			<DynamicProductCounter product={product} />
		</div>
	)
}

export default Info
