import React, { FC } from 'react'
import MenuList from './MenuList'
import { IMenuProps } from './menu.interface'
import styles from './Menu.module.scss'
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai'
import { useOutside } from '@/app/hooks/use-outside/useOutside'
import cn from 'classnames'

const Menu: FC<IMenuProps> = ({ title, items, load = false }) => {
	const { isShow, setIsShow, ref } = useOutside(false)
	return (
		<nav className={styles.menu} ref={ref}>
			<div className={styles.header}>
				<div>{title}</div>
				<button
					className={styles.button}
					onClick={() => setIsShow(prevState => !prevState)}
				>
					{isShow ? <AiOutlineMinus /> : <AiOutlinePlus />}
				</button>
			</div>
			<div className={cn(styles.body, { [styles.active]: isShow })}>
				{load ? (
					<div className={styles.loading} role='status'></div>
				) : (
					<MenuList items={items} />
				)}
			</div>
		</nav>
	)
}

export default Menu
