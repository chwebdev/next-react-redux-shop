import React, { FC } from 'react'
import Layout from '@/app/components/layout/Layout'

import styles from './Contact.module.scss'

const Contact: FC = () => {
	return (
		<Layout title='Contact' description='Contact' variant='secondary'>
			<div className={styles.wrapper}>
				<h1 aria-label='contact-title'>Contact</h1>
				<div>
					<div className={styles.case}>
						Email:
						<a href='mailto:kirya.chaklidi.01@mail.ru' aria-label='link-email'>
							kirya.chaklidi.01@mail.ru
						</a>
					</div>
					<div className={styles.case}>
						GitHub:
						<a
							href='https://github.com/chwebdev'
							target='_blank'
							rel='noreferrer'
							aria-label='link-github'
						>
							https://github.com/chwebdev
						</a>
					</div>
				</div>
			</div>
		</Layout>
	)
}

export default Contact
