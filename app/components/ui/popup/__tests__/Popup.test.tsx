import { render, screen } from '@testing-library/react'
import Popup from '../Popup'
import React from 'react'
import { IPopupProps } from '../popup.interface'

describe('Initializing Popup', () => {
	const mockData: IPopupProps = {
		isShow: true,
		setIsShow: jest.fn(),
		innerRef: {
			current: null
		},
		ariaLabel: 'mock'
	}

	test('Should render without crashing', () => {
		render(<Popup {...mockData} />)
		const elementRight = screen.getByTestId('popup-element-right')

		expect(elementRight).toBeInTheDocument()
	})
})
