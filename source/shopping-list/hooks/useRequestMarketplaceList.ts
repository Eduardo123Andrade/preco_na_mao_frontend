import { Marketplace } from 'shopping-list/interfaces';
import { MOCKED_MARKETPLACE_LIST } from 'shopping-list/utils';

interface UseRequestMarketplaceData {
  marketplaceList: Marketplace[]
}

type UseRequestMarketplaceList = [
  state: UseRequestMarketplaceData,
]

export const useRequestMarketplaceList = (): UseRequestMarketplaceList => {
  return [{ marketplaceList: MOCKED_MARKETPLACE_LIST }]
}