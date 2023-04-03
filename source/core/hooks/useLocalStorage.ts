import AsyncStorage from '@react-native-async-storage/async-storage';
import { useState } from 'react';


interface UseLocalStorageState<T> {
  data: T
}

interface UseLocalStorageActions<T> {
  storeData: (key: string, data: T) => void,
  getData: (key: string) => Promise<T>
}

type UseLocalStorageData<T> = [
  state: UseLocalStorageState<T>,
  actions: UseLocalStorageActions<T>
]

export const useLocalStorage = <TData = unknown>(): UseLocalStorageData<TData> => {
  const [data, setData] = useState<TData>()

  const storeData = (key: string, data: TData) => {
    try {
      AsyncStorage.setItem(key, JSON.stringify(data))
    } catch (e) {
    }
  }

  const getData = async (key: string) => {
    try {
      const value = await AsyncStorage.getItem(key)
      if (value) {
        const data: TData = JSON.parse(value)
        setData(data)
        return data
      }
    } catch (e) {
    }
  }

  return [
    {
      data
    },
    {
      storeData,
      getData
    }
  ]
}