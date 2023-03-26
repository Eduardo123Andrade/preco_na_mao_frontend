export const formatPrice = (price: number) => {
  if (price === 0) return '0'
  return price.toFixed(2).replace(".", ',')
}