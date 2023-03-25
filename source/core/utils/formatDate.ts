import { zeroToLeft } from "./zeroToLeft"

export const formatDate = (date: Date) => {
  const day = zeroToLeft(date.getDate())
  const month = zeroToLeft(date.getMonth() + 1)
  const year = date.getFullYear()

  return `${day}/${month}/${year}`
}