import { UseGetRequestOptions, useGetRequest } from 'core/hooks/useGetRequest';
import { useShoppingList } from './useShoppingList';
import { Product } from 'core/interfaces';

interface TError {
  message: string
}

export const useRequestProducts = (options: UseGetRequestOptions<Product[], TError>) => {
  const [{ currentMarketplace }] = useShoppingList()
  const mutation = useGetRequest(`/product/${currentMarketplace.id}`, options)

  return mutation
}