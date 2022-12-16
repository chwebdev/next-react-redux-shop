import { IMenuItem } from './menu/menu.interface'
import { ROUTE_CONTACT, ROUTE_HOME } from '@/app/utils/consts'

export const menuData: IMenuItem[] = [
	{
		id: 1,
		value: 'Home',
		href: ROUTE_HOME,
		title: 'home'
	},
	{
		id: 2,
		value: 'Contact',
		href: ROUTE_CONTACT,
		title: 'contact'
	}
]
