import { Product } from "./ProductInterface"

export interface Marketplace {
  id: string
  name: string
  products: Product[]
}