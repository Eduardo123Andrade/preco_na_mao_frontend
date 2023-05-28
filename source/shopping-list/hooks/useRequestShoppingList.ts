import { UseGetRequestOptions, useGetRequest } from 'core/hooks/useGetRequest';
import { ShoppingList } from 'core/interfaces';

interface TError {
  message: string
}

export const useRequestShoppingList = (options: UseGetRequestOptions<ShoppingList[], TError>) => {

  const mutation = useGetRequest('/shopping-list', options)

  return mutation
}