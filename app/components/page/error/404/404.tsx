import React from 'react'
import Layout from '@/app/components/layout/Layout'
import Button from '@/app/components/ui/button/Button'
import { useRouter } from 'next/router'
import { ROUTE_HOME } from '@/app/utils/consts'

import styles from './404.module.scss'

const NotFound = () => {
	const router = useRouter()
	return (
		<Layout
			title='404 Not Found'
			description='404 Not Found'
			variant='secondary'
		>
			<div className={styles.wrapper}>
				<h1 aria-label='404-heading'>It is page not exist</h1>
				<Button
					onClick={() => router.push(ROUTE_HOME)}
					aria-label='404-return-home'
				>
					Home
				</Button>
			</div>
		</Layout>
	)
}

export default NotFound
