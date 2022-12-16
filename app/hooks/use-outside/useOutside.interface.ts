import { Dispatch, RefObject, SetStateAction } from 'react'

export interface TypeOut<T> {
	ref: RefObject<T>
	isShow: boolean
	setIsShow: Dispatch<SetStateAction<boolean>>
}
