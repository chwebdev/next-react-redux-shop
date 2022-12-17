import React, { FC } from 'react'
import Layout from '@/app/components/layout/Layout'
import dynamic from 'next/dynamic'

const DynamicCommonCart = dynamic(() => import('./CommonCart'), {
	ssr: false
})

const Cart: FC = () => {
	return (
		<Layout title='Cart' description='Cart' variant='secondary'>
			<DynamicCommonCart />
		</Layout>
	)
}

export default Cart
