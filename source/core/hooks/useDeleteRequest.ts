import {
  useQuery,
  UseQueryResult,
  UseQueryOptions,
  MutationStatus,
  QueryObserverOptions
} from 'react-query'
import { AxiosRequestConfig, AxiosResponse, AxiosError } from 'axios'
import { useAPI } from './useApi'


export type UseDeleteRequestStatus = MutationStatus

export type UseDeleteRequest<TData = any, TError = any> = UseQueryResult<
  AxiosResponse<TData>,
  AxiosError<TError>
>

export type UseDeleteRequestConfigs = AxiosRequestConfig
export type UseDeleteRequestOptions<TData = any, TError = any> = UseQueryOptions<
  AxiosResponse<TData>,
  AxiosError<TError>
>

export const useDeleteRequest = <TData = any, TError = any>(
  url: string,
  options?: QueryObserverOptions<AxiosResponse<TData, TError>, TError, AxiosResponse<TData, TError>>,
  configs?: UseDeleteRequestConfigs,
): UseDeleteRequest<TData, TError> => {
  const { API } = useAPI()

  const queryArgs = useQuery<AxiosResponse<TData, TError>, any>({
    ...options,
    queryKey: [url, configs],
    queryFn: () => API.delete(url, configs),
  })

  return queryArgs
}
