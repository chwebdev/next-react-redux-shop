import React from 'react'
import { AiOutlineClose } from 'react-icons/ai'
import { IPopupLeftProps } from './popup.interface'

const PopupRight = React.forwardRef<HTMLDivElement, IPopupLeftProps>(
	({ setIsShow, children }, ref) => (
		<div
			className='fixed inset-0 flex items-start justify-end overflow-y-auto translate-x-0'
			data-testid='popup-element-right'
		>
			<div
				ref={ref}
				className='divide-slate-900/10 text-base leading-7 text-slate-900 min-h-full w-[min(20rem,calc(100vw-theme(spacing.10)))] bg-white shadow-2xl'
			>
				<button
					type='button'
					className='text-xl absolute top-5 right-6 flex h-8 w-8 items-center justify-center'
					onClick={() => setIsShow(false)}
				>
					<AiOutlineClose />
				</button>
				{children}
			</div>
		</div>
	)
)

PopupRight.displayName = 'PopupRight'

export default PopupRight
