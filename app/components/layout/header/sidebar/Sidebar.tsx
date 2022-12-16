import React, { FC } from 'react'
import Logo from '@/app/components/ui/logo/Logo'
import Menu from '../menu/Menu'
import { menuData } from '../header.data'
import Sidebar from '@/app/components/ui/sidebar/Sidebar'
import styles from './Sidebar.module.scss'

const SidebarLayout: FC = () => {
	return (
		<Sidebar>
			<div>
				<div className={styles.logo} role='banner' aria-label='logo'>
					<Logo />
				</div>
				<div className={styles.body}>
					<Menu items={menuData} ariaLabel='sidebar-menu' />
				</div>
			</div>
		</Sidebar>
	)
}

export default SidebarLayout
