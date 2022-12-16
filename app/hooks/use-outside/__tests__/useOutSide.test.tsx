import { act, renderHook } from '@testing-library/react'
import { useOutside } from '@/app/hooks/use-outside/useOutside'

describe('Initializing hook is useOutSide', () => {
	test('Should render initial state', () => {
		const { result } = renderHook(() => useOutside<HTMLDivElement>(false))

		expect(result.current.isShow).toBe(false)
	})

	test('Should edit state show on true', () => {
		const { result } = renderHook(() => useOutside<HTMLDivElement>(false))

		act(() => {
			result.current.setIsShow(true)
		})

		expect(result.current.isShow).toBe(true)
	})
})
