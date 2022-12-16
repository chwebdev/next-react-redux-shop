import { configureStore } from '@reduxjs/toolkit'
import { rtkQueryErrorLogger } from './middleware/rtkQueryErrorLogger'
import {
	FLUSH,
	PAUSE,
	PERSIST,
	persistReducer,
	persistStore,
	PURGE,
	REGISTER,
	REHYDRATE
} from 'redux-persist'
import { categoryApi } from '../store/category/category.api'
import { productApi } from '../store/product/product.api'
import { rootReducer } from '@/app/store/root-reducer'
import storage from 'redux-persist/lib/storage'

const persistConfig = {
	key: 'root',
	storage,
	blacklist: [categoryApi.reducerPath, productApi.reducerPath]
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const createStore = (initialState = {}) => {
	return configureStore({
		reducer: persistedReducer,
		preloadedState: initialState,
		middleware: getDefaultMiddleware =>
			getDefaultMiddleware({
				serializableCheck: {
					ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
				}
			})
				.concat(productApi.middleware)
				.concat(categoryApi.middleware)
				.concat(rtkQueryErrorLogger)
	})
}

export const store = createStore()
export const persistor = persistStore(store)
export type TypeRootState = ReturnType<typeof store.getState>
export type AppStore = ReturnType<typeof createStore>
