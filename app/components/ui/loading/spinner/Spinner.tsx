import React, { FC } from 'react'

import styles from './Spinner.module.scss'
import { ISpinnerProps } from './spinner.interface'

const Spinner: FC<ISpinnerProps> = ({ className = '' }) => {
	return (
		<div className={className}>
			<div className={styles.spinner} role='status'></div>
		</div>
	)
}

export default Spinner
