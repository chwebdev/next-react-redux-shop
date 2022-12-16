import React from 'react'
import { render, screen } from '@testing-library/react'
import Menu from '../Menu'
import { IMenuItem } from '@/app/components/layout/header/menu/menu.interface'
import { ROUTE_HOME } from '@/app/utils/consts'

describe('Initializing Menu', () => {
	const mockItems: IMenuItem[] = [
		{
			id: 1,
			value: 'Home',
			href: ROUTE_HOME,
			title: 'home'
		}
	]

	test('Should render without crashing', () => {
		render(<Menu ariaLabel='menu' />)
	})

	test('Should render with props', () => {
		render(<Menu ariaLabel='menu' items={mockItems} />)
		const menuElement = screen.getByRole('listitem', {
			name: 'home'
		})

		expect(menuElement).toBeInTheDocument()
	})
})
