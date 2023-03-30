import { zeroToLeft } from "./zeroToLeft"

export const formatDate = (date: Date) => {
  const currentDate = new Date(date)
  const day = zeroToLeft(currentDate.getDate())
  const month = zeroToLeft(currentDate.getMonth() + 1)
  const year = currentDate.getFullYear()

  return `${day}/${month}/${year}`
}