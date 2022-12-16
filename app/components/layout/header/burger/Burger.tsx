import React, { FC } from 'react'
import { useOutside } from '@/app/hooks/use-outside/useOutside'
import { AiOutlineMenu } from 'react-icons/ai'
import Popup from '@/app/components/ui/popup/Popup'
import Sidebar from '../sidebar/Sidebar'

const Burger: FC = () => {
	const { isShow, setIsShow, ref } = useOutside<HTMLDivElement>(false)

	return (
		<div>
			<button
				type='button'
				className='-my-1 ml-6 -mr-1 flex h-8 w-8 items-center justify-center lg:hidden text-xl'
				onClick={() => setIsShow(prevState => !prevState)}
				aria-label='burger'
			>
				<AiOutlineMenu />
			</button>

			<Popup
				variant='right'
				innerRef={ref}
				isShow={isShow}
				setIsShow={setIsShow}
				ariaLabel='popup'
			>
				<Sidebar />
			</Popup>
		</div>
	)
}

export default Burger
