import { usePutRequest } from 'core/hooks';
import { UsePutRequestOptionsType } from 'core/hooks/usePutRequest';
import { ShoppingList } from 'core/interfaces';

interface Product {
  id: string
  quantity: number
}

interface Variables {
  listId: string,
  products: Product[]
}

interface TError {
  message: string
}

export const useRequestAddItemsOnShoppingList = (options: UsePutRequestOptionsType<ShoppingList, TError, Variables>) => {

  const mutation = usePutRequest("shopping-list", options)

  return mutation
}