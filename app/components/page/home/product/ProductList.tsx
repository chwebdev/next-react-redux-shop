import React, { FC, useState } from 'react'
import Spinner from '@/app/components/ui/loading/spinner/Spinner'
import { FaGripVertical } from 'react-icons/fa'
import ProductItem from '@/app/components/common/product/ProductItem'
import { useGetProductsQuery } from '@/app/store/product/product.api'
import Button from '@/app/components/ui/button/Button'

import styles from './Product.module.scss'

const ProductList: FC = () => {
	const [limit, setLimit] = useState<number>(10)
	const { data, isFetching, error } = useGetProductsQuery(limit, {
		refetchOnMountOrArgChange: true
	})

	if (isFetching || error || !data) {
		return <Spinner className={styles.center} />
	}

	if (!data.length) {
		return (
			<div className={styles.center} role='contentinfo'>
				<FaGripVertical className={styles.notFound} />
			</div>
		)
	}

	return (
		<div>
			<div className={styles.list}>
				{data.map(product => {
					return <ProductItem key={product.id} product={product} />
				})}
			</div>

			{limit === data.length && (
				<Button
					className={styles.moreButton}
					onClick={() => setLimit(prevState => prevState + 10)}
					aria-label='button-more'
				>
					More
				</Button>
			)}
		</div>
	)
}

export default ProductList
