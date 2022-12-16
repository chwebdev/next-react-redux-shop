import { handlersCategory } from './handlers/category'
import { handlersProduct } from './handlers/product'

export const handlers = [...handlersCategory, ...handlersProduct]
