import { ReactNode } from 'react'

export interface ILayoutProps {
	children: ReactNode
	title: string
	description: string

	variant?: 'primary' | 'secondary'
}
