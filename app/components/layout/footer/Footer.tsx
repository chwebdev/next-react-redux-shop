import React, { FC } from 'react'
import { GoMarkGithub } from 'react-icons/go'

const Footer: FC = () => {
	return (
		<footer className='flex items-center justify-center text-gray-600 py-6 px-4 border-t-2 border-gray-100'>
			<span className='mr-2'>© 2022 Chaklidi Kirill</span>

			<a
				href='https://github.com/chwebdev/next-react-redux-shop'
				target='_blank'
				rel='noreferrer'
			>
				<GoMarkGithub />
			</a>
		</footer>
	)
}

export default Footer
