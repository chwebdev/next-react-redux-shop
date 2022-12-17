import React, { FC } from 'react'
import { AiOutlineSearch } from 'react-icons/ai'
import { FiUser } from 'react-icons/fi'
import styles from './Navigation.module.scss'
import Link from 'next/link'
import { ROUTE_DEVELOPMENT } from '@/app/utils/consts'
import dynamic from 'next/dynamic'

const DynamicCart = dynamic(() => import('./cart/Cart'), {
	ssr: false
})

const Navigation: FC = () => {
	return (
		<nav className={styles.navigation} aria-label='navigation'>
			<ul>
				<li>
					<Link href={ROUTE_DEVELOPMENT} aria-label='search'>
						<AiOutlineSearch />
					</Link>
				</li>
				<li>
					<Link href={ROUTE_DEVELOPMENT} aria-label='profile'>
						<FiUser />
					</Link>
				</li>
				<li>
					<DynamicCart />
				</li>
			</ul>
		</nav>
	)
}

export default Navigation
