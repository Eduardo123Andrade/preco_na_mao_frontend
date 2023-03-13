import {
  useQuery,
  focusManager,
  useQueryClient,
  UseQueryResult,
  UseQueryOptions,
  MutationStatus,
  QueryObserverOptions
} from 'react-query'
import { useEffect, useRef } from 'react'
import { AxiosRequestConfig, AxiosResponse, AxiosError } from 'axios'
import { useAPI } from './useApi'


export type UseGetRequestStatus = MutationStatus

export type UseGetRequest<TData = any, TError = any> = UseQueryResult<
  AxiosResponse<TData>,
  AxiosError<TError>
>

export type UseGetRequestConfigs = AxiosRequestConfig
export type UseGetRequestOptions<TData = any, TError = any> = UseQueryOptions<
  AxiosResponse<TData>,
  TError
>

export const useGetRequest = <TData = any, TError = any>(
  url: string,
  options?: QueryObserverOptions<AxiosResponse<TData, TError>, TError, AxiosResponse<TData, TError>>,
  configs?: UseGetRequestConfigs,
): UseGetRequest<TData, TError> => {
  const { API } = useAPI()

  const queryArgs = useQuery<AxiosResponse<TData, TError>, any>({
    ...options,
    queryKey: [url, configs],
    queryFn: () => API.get(url, configs),
  })

  return queryArgs
}
