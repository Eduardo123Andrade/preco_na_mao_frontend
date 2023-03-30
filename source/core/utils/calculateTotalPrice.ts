import { Product } from "core/interfaces";

export const calculateTotalPrice = (previous: number, current: Product) =>
  previous + (current.quantity * current.price)