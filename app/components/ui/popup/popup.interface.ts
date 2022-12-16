import { Dispatch, ReactNode, RefObject, SetStateAction } from 'react'

export interface IPopupProps {
	children?: ReactNode
	variant?: 'right'
	isShow: boolean
	setIsShow: Dispatch<SetStateAction<boolean>>

	innerRef: RefObject<HTMLDivElement>

	ariaLabel: string
}

export interface IPopupLeftProps {
	setIsShow: Dispatch<SetStateAction<boolean>>
	children?: ReactNode
}
