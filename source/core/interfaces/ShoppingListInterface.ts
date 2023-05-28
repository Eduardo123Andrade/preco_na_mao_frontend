import { Product } from "./ProductInterface"

export interface ShoppingList {
  id: string
  name: string
  length: number,
  products: Product[]
  date: Date
}