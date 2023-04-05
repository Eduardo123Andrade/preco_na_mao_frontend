import { Product } from "core/interfaces"

export const incrementProduct = (products: Product[], productId: string, incrementor: number) => {
  const temporaryProducts = [...products]
  const foundProduct = temporaryProducts.find(product => product.id === productId)
  const index = temporaryProducts.indexOf(foundProduct)

  const updatedProduct: Product = { ...foundProduct, edited: true, quantity: foundProduct.quantity + incrementor }

  temporaryProducts[index] = updatedProduct

  return temporaryProducts
}
