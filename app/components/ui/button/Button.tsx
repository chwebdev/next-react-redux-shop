import React, { FC } from 'react'
import { IButtonProps } from './button.interface'
import cn from 'classnames'
import styles from './Button.module.scss'

const Button: FC<IButtonProps> = ({
	children,
	className = '',
	load = false,
	size = 's',
	..._props
}) => {
	return (
		<button
			className={cn(className, styles.button, {
				[styles.s]: size === 's',
				[styles.m]: size === 'm'
			})}
			disabled={load}
			{..._props}
		>
			{load ? 'Processing...' : children}
		</button>
	)
}

export default Button
