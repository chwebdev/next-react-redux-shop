import React, { FC } from 'react'
import { ISidebarProps } from './sidebar.interface'
import styles from './Sidebar.module.scss'

const Sidebar: FC<ISidebarProps> = ({ children }) => {
	return <aside className={styles.sidebar}>{children}</aside>
}

export default Sidebar
