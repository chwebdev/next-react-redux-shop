import { useEffect, useRef, useState } from 'react'
import { TypeOut } from './useOutside.interface'

export function useOutside<T extends HTMLElement>(
	initialIsVisible: boolean
): TypeOut<T> {
	const [isShow, setIsShow] = useState<boolean>(initialIsVisible)
	const ref = useRef<T>(null)

	const handleClickOutside = (event: MouseEvent): void => {
		const target = event.target as T

		if (ref.current && !ref.current.contains(target)) {
			setIsShow(false)
		}
	}

	useEffect(() => {
		document.addEventListener('click', handleClickOutside, true)

		return () => document.removeEventListener('click', handleClickOutside, true)
	})

	return { ref, isShow, setIsShow }
}
