import React, { FC } from 'react'
import Logo from '@/app/components/ui/logo/Logo'

import Menu from './menu/Menu'
import { menuData } from './header.data'
import Burger from './burger/Burger'
import Navigation from './navigation/Navigation'
import styles from './Header.module.scss'

const Header: FC = () => {
	return (
		<header className={styles.header}>
			<div className={styles.wrapper}>
				<div className={styles.column}>
					<Logo />
					<Menu className={styles.menu} items={menuData} ariaLabel='menu' />
				</div>
				<div className={styles.column}>
					<Navigation />
					<Burger />
				</div>
			</div>
		</header>
	)
}

export default Header
