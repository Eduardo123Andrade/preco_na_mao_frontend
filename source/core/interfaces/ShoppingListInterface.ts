import { Product } from "./ProductInterface"

export interface ShoppingList {
  id: string
  name: string
  products: Product[]
  date: Date
}