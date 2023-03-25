import { Item } from "./ItemInterface"

export interface ShoppingList {
  id: string
  name: string
  items: Item[]
  date: Date
}