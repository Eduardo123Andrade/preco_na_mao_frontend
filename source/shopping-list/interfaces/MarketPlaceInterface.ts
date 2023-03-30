import { Product } from "core/interfaces"

export interface Marketplace {
  id: string
  name: string
  products: Product[]
}