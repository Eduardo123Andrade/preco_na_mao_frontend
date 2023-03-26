import { Product } from "./ ProductInterface"

export interface ShoppingList {
  id: string
  name: string
  items: Product[]
  date: Date
}