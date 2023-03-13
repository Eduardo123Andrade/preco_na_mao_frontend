import { MutationFunction, useMutation, UseMutationOptions, MutationStatus } from 'react-query'
import { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios'
import { useAPI } from './useApi';

type Config = {
  config: AxiosRequestConfig
}

export type UsePostRequestStatus = MutationStatus

export type UsePostRequestOptionsType<TData, TError, TVariables> = UseMutationOptions<
  AxiosResponse<TData>,
  AxiosError<TError>,
  TVariables,
  any
>

export const usePostRequest = <
  TData = any,
  TVariables = any,
  TError = any,
>(url: string, options?: UsePostRequestOptionsType<TData, TError, TVariables>) => {
  const { API } = useAPI()

  const mutationFunction:
    MutationFunction<AxiosResponse<TData>, TVariables> = (data) => API.post(url, data)

  return useMutation<AxiosResponse<TData>, AxiosError<TError>, TVariables, any>(
    mutationFunction,
    options,
  )

}