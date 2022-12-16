import React, { FC } from 'react'
import Link from 'next/link'
import { IMenuItemProps } from './menu.interface'

const MenuItem: FC<IMenuItemProps> = ({ item: { title, value, href } }) => {
	return (
		<li aria-label={title}>
			<Link href={href}>{value}</Link>
		</li>
	)
}

export default MenuItem
