export interface IMenuItem {
	id: number
	value: string
	href: string
	title: string
}

export interface IMenuProps {
	className?: string
	items?: IMenuItem[]
	ariaLabel: string
}

export interface IMenuListProps {
	items: IMenuItem[]
}

export interface IMenuItemProps {
	item: IMenuItem
}
