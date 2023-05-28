import { usePostRequest } from 'core/hooks';
import { useShoppingList } from './useShoppingList';
import { UsePostRequestOptionsType } from 'core/hooks/usePostRequest';
import { ShoppingList } from 'core/interfaces';

interface Variables {
  name: string
}

interface TError {
  message: string
}
export const useRequestCreateShoppingList = (options: UsePostRequestOptionsType<ShoppingList, TError, Variables>) => {

  const mutation = usePostRequest("shopping-list", options)

  return mutation
}