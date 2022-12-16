import { IProductItem } from './product.interface'

export interface ICartItemState {
	item: IProductItem
	count: number
}

export interface ICartState {
	cart: ICartItemState[]
}
