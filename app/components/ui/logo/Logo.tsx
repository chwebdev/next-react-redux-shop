import React, { FC } from 'react'
import { CiShop } from 'react-icons/ci'
import Link from 'next/link'

const Logo: FC = () => {
	return (
		<Link className='text-5xl' href='/' aria-label='logo'>
			<CiShop />
		</Link>
	)
}

export default Logo
