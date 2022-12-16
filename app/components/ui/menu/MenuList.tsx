import React, { FC } from 'react'
import MenuItem from './MenuItem'
import { IMenuListProps } from './menu.interface'
import styles from './Menu.module.scss'

const MenuList: FC<IMenuListProps> = ({ items }) => {
	return (
		<ul className={styles.list}>
			{items.map(item => (
				<MenuItem key={item} item={item} />
			))}
		</ul>
	)
}

export default MenuList
