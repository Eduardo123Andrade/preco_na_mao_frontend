import { Product } from "core/interfaces";

export const sumValues = (previous: number, current: Product) =>
  previous + (current.quantity * current.price)