import React, { FC } from 'react'
import type { AppProps } from 'next/app'
import NextNProgress from 'nextjs-progressbar'
import { persistor, store } from '@/app/store/store'
import { Provider } from 'react-redux'
import ReduxToastr from 'react-redux-toastr'
import { PersistGate } from 'redux-persist/integration/react'

import '@/app/assets/styles/globals.scss'
import 'react-redux-toastr/lib/css/react-redux-toastr.min.css'

const App: FC<AppProps> = ({ Component, pageProps }) => {
	return (
		<Provider store={store}>
			<NextNProgress color='gray' />
			<PersistGate loading={null} persistor={persistor}>
				<Component {...pageProps} />
			</PersistGate>
			<ReduxToastr
				preventDuplicates
				transitionIn='fadeIn'
				transitionOut='fadeOut'
				progressBar
				closeOnToastrClick
			/>
		</Provider>
	)
}

export default App
