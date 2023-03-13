import React, { createContext, useMemo } from "react";
import Axios, { AxiosInstance } from 'axios'


interface ApiContextType {
  API: AxiosInstance,
}

export const ApiContext = createContext<ApiContextType>({} as ApiContextType)

interface ApiProvider {
  children: React.ReactNode
}

export const ApiProvider: React.FC<ApiProvider> = ({ children }) => {
  const API = useMemo(() =>
    Axios.create({
      baseURL: "",
    }), [])

  return <ApiContext.Provider children={children} value={{ API }} />
}
