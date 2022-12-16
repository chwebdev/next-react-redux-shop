import React, { FC } from 'react'
import { ILayoutProps } from './layout.interface'
import Head from 'next/head'
import Header from './header/Header'
import Footer from './footer/Footer'
import { APP_CONFIG_NAME } from '@/app/utils/consts'
import cn from 'classnames'
import styles from './Layout.module.scss'

const Layout: FC<ILayoutProps> = ({
	children,
	title,
	description,
	variant = 'primary'
}) => {
	return (
		<>
			<Head>
				<title>{`${title} | ${APP_CONFIG_NAME}`}</title>
				<meta name='description' content={description} />
			</Head>
			<Header />
			<main
				className={cn(styles.main, {
					[styles.primary]: variant === 'primary'
				})}
			>
				{children}
			</main>
			<Footer />
		</>
	)
}

export default Layout
