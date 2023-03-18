import { MutationFunction, useMutation, UseMutationOptions, MutationStatus } from 'react-query'
import { AxiosError, AxiosResponse } from 'axios'
import { useAPI } from './useApi';

export type UsePutRequestStatus = MutationStatus

export type UsePutRequestOptionsType<TData, TError, TVariables> = UseMutationOptions<
  AxiosResponse<TData>,
  AxiosError<TError>,
  TVariables,
  any
>

export const usePutRequest = <
  TData = any,
  TVariables = any,
  TError = any,
>(url: string, options?: UsePutRequestOptionsType<TData, TError, TVariables>) => {
  const { API } = useAPI()

  const mutationFunction:
    MutationFunction<AxiosResponse<TData>, TVariables> = (data) => API.put(url, data)

  return useMutation<AxiosResponse<TData>, AxiosError<TError>, TVariables, any>(
    mutationFunction,
    options,
  )

}