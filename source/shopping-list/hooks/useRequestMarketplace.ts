import { UseGetRequestOptions, useGetRequest } from 'core/hooks/useGetRequest';
import { Marketplace } from 'shopping-list/interfaces';

interface TError {
  message: string
}

export const useRequestMarketplace = (options: UseGetRequestOptions<Marketplace[], TError>) => {

  const mutation = useGetRequest(`/marketplace`, options)

  return mutation
}