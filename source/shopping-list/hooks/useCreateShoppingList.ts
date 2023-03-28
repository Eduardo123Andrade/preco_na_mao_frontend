import { useShoppingList } from './useShoppingList';

interface UseCreateShoppingList {
  createShoppingList: (name: string) => void
}

export const useCreateShoppingList = (): UseCreateShoppingList => {
  const [, { selectShoppingList }] = useShoppingList()

  // TODO - integrar com endpoint
  const createShoppingList = (name: string) => {
    selectShoppingList({
      id: '1',
      products: [],
      date: new Date(),
      name,
    })
  }

  return { createShoppingList }
}