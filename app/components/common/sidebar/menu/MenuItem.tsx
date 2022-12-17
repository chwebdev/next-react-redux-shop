import React, { FC } from 'react'
import Link from 'next/link'
import { IMenuItemProps } from './menu.interface'
import { ROUTE_CATEGORY } from '@/app/utils/consts'

const MenuItem: FC<IMenuItemProps> = ({ item }) => {
	return (
		<li className='text-sm text-gray-600 mb-3' aria-label={item}>
			<Link href={ROUTE_CATEGORY + '/' + item}>{item}</Link>
		</li>
	)
}

export default MenuItem
