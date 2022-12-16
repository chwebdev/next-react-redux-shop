import React, { FC } from 'react'
import MenuItem from './MenuItem'
import { IMenuListProps } from './menu.interface'

const MenuList: FC<IMenuListProps> = ({ items }) => {
	return (
		<ul>
			{items.map(item => (
				<MenuItem key={item.id} item={item} />
			))}
		</ul>
	)
}

export default MenuList
