import { useDeleteRequest } from 'core/hooks';
import { UseGetRequestOptions } from 'core/hooks/useGetRequest';
import { ShoppingList } from 'core/interfaces';
import { useShoppingList } from './useShoppingList';

interface TError {
  message: string
}

export const useRequestDeleteShoppingList = (options: UseGetRequestOptions<ShoppingList[], TError>) => {
  const [{ currentShoppingList }] = useShoppingList()
  const mutation = useDeleteRequest(`/shopping-list/${currentShoppingList.id}`, options)

  return mutation
}