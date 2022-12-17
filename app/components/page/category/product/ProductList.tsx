import React, { FC, useState } from 'react'
import Spinner from '@/app/components/ui/loading/spinner/Spinner'
import { FaGripVertical } from 'react-icons/fa'
import ProductItem from '@/app/components/common/product/ProductItem'
import { useGetCategoryProductsQuery } from '@/app/store/category/category.api'
import Button from '@/app/components/ui/button/Button'

import styles from './Product.module.scss'
import { useRouter } from 'next/router'

const ProductList: FC = () => {
	const { query } = useRouter()
	const [limit, setLimit] = useState<number>(10)
	const { data, isFetching, error } = useGetCategoryProductsQuery(
		query.id as string,
		{
			refetchOnMountOrArgChange: true
		}
	)

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
