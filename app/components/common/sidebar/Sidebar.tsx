import React, { FC } from 'react'
import { useGetCategoriesQuery } from '@/app/store/category/category.api'
import Menu from '@/app/components/ui/menu/Menu'
import Sidebar from '@/app/components/ui/sidebar/Sidebar'

const SidebarHome: FC = () => {
	const { data, isLoading, error } = useGetCategoriesQuery(null)
	return (
		<Sidebar>
			<Menu title='Categorys' items={data || []} load={isLoading || !!error} />
		</Sidebar>
	)
}

export default SidebarHome
