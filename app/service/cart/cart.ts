import { ICartItemState } from '@/app/types/cart.interface'

export const getTotal = (cart: ICartItemState[]): number => {
	let total = 0

	for (const { item, count } of cart) {
		total += item.price * count
	}

	return Math.floor(total * 100) / 100
}

export const getProductInCart = (
	cart: ICartItemState[],
	productId: number
): ICartItemState | undefined => {
	return cart.find(({ item }) => item.id === productId)
}
