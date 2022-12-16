import React, { FC } from 'react'
import { IPopupProps } from '@/app/components/ui/popup/popup.interface'
import PopupRight from './PopupRight'

const Popup: FC<IPopupProps> = ({
	children = '',
	isShow,
	setIsShow,
	variant = 'right',
	innerRef,
	ariaLabel
}) => {
	if (!isShow) return <></>

	return (
		<div
			className='fixed inset-0 z-50 overflow-hidden lg:hidden'
			aria-label={ariaLabel}
			role='dialog'
		>
			<div className='absolute inset-0 bg-slate-s900/25 backdrop-blur-sm'></div>
			{variant === 'right' && (
				<PopupRight setIsShow={setIsShow} ref={innerRef}>
					{children}
				</PopupRight>
			)}
		</div>
	)
}

export default Popup
