import { UseGetRequestOptions, useGetRequest } from 'core/hooks/useGetRequest';
import { ShoppingList } from 'core/interfaces';
import { useShoppingList } from './useShoppingList';

interface TError {
  message: string
}

export const useRequestShoppingListDetail = (options: UseGetRequestOptions<ShoppingList, TError>) => {
  const [{ currentShoppingList }] = useShoppingList()

  const mutation = useGetRequest(`/shopping-list/${currentShoppingList?.id}`, {
    ...options,
    enabled: !!currentShoppingList?.id
  })

  return mutation
}