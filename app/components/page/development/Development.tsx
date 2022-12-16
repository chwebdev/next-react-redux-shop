import React, { FC } from 'react'
import Layout from '@/app/components/layout/Layout'
import styles from './Development.module.scss'
import Button from '@/app/components/ui/button/Button'
import { ROUTE_HOME } from '@/app/utils/consts'
import { useRouter } from 'next/router'
import { Gi3DStairs } from 'react-icons/gi'

const Development: FC = () => {
	const router = useRouter()

	return (
		<Layout title='Development' description='Development' variant='secondary'>
			<div className={styles.wrapper}>
				<Gi3DStairs className={styles.icon} />
				<h1 aria-label='development-heading'>
					It is page in development or not planned for test project.
				</h1>
				<Button
					onClick={() => router.push(ROUTE_HOME)}
					aria-label='development-return-home'
				>
					Home
				</Button>
			</div>
		</Layout>
	)
}

export default Development
