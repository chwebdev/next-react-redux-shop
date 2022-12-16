import { rootActions } from '@/app/store/root-action'
import { bindActionCreators } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux'

export const useActions = () => {
	const dispatch = useDispatch()

	return bindActionCreators(rootActions, dispatch)
}
