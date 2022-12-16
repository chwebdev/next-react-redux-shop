import React, { PropsWithChildren, ReactNode } from 'react'
import type { RenderOptions } from '@testing-library/react'
import { render } from '@testing-library/react'
import type { PreloadedState } from '@reduxjs/toolkit'
import { Provider } from 'react-redux'
import type { AppStore, TypeRootState } from '@/app/store/store'
import { createStore } from '@/app/store/store'

interface ExtendedRenderOptions extends Omit<RenderOptions, 'queries'> {
	preloadedState?: PreloadedState<TypeRootState>
	store?: AppStore
}

export function renderWithProviders(
	ui: React.ReactElement,
	{
		preloadedState = {},
		// Automatically create a store instance if no store was passed in
		store = createStore(preloadedState),
		...renderOptions
	}: ExtendedRenderOptions = {}
) {
	function Wrapper({
		children
	}: PropsWithChildren<{ children: ReactNode }>): JSX.Element {
		return <Provider store={store}>{children}</Provider>
	}

	// Return an object with the store and all of RTL's query functions
	return { store, ...render(ui, { wrapper: Wrapper, ...renderOptions }) }
}
