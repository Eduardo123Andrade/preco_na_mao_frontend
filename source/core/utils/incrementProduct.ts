import { Product } from "core/interfaces"

export const incrementProduct = (products: Product[], productId: string, incrementor: number) => {
  const mappedItems = products.map(item => {
    if (item.id === productId) {
      return {
        ...item,
        edited: true,
        quantity: item.quantity + incrementor,
      }
    }
    return item
  })

  return mappedItems
}
