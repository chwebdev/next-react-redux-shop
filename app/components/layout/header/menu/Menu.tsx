import React, { FC } from 'react'
import cn from 'classnames'

import MenuList from './MenuList'
import { IMenuProps } from './menu.interface'
import styles from './Menu.module.scss'

const Menu: FC<IMenuProps> = ({ items = [], ariaLabel, className = '' }) => {
	return (
		<nav className={cn(styles.menu, className)} aria-label={ariaLabel}>
			<MenuList items={items} />
		</nav>
	)
}

export default Menu
