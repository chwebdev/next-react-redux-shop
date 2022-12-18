import React, { FC } from 'react'

import { IRatingProps } from './rating.interface'
import styles from './Rating.module.scss'

const Rating: FC<IRatingProps> = ({ rating }) => {
	return (
		<div className={styles.rating}>
			<div className={styles.wrapper}>
				<div className={styles.line} style={{ width: `${20 * rating}%` }}></div>
			</div>
		</div>
	)
}

export default Rating
