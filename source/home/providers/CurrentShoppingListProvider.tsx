import { SHOPPING_LIST_KEY } from "core/constants"
import { useLocalStorage } from "core/hooks"
import { Product, ShoppingList } from "core/interfaces"
import { incrementProduct } from "core/utils"
import React, { createContext, useEffect, useState } from "react"

interface CurrentShoppingListState {
  shoppingList: ShoppingList
}

interface CurrentShoppingListActions {
  clearStorage: () => void
  onDecrement: (productId: string) => void
  onIncrement: (productId: string) => void
  onToggleCheckItem: (productId: string, value: boolean) => void
  retrieveData: () => void
}

type CurrentShoppingListData = [
  state: CurrentShoppingListState,
  actions: CurrentShoppingListActions
]

export const CurrentShoppingListContext = createContext<CurrentShoppingListData>({} as CurrentShoppingListData)

interface CurrentShoppingListProviderProps {
  children: React.ReactNode
}

const updateShoppingList = (shoppingList: ShoppingList, productId: string, incrementor: number) => {
  const { products } = shoppingList

  const updatedProduct = incrementProduct(products, productId, incrementor)
  const updatedShoppingList: ShoppingList = { ...shoppingList, products: updatedProduct }

  return updatedShoppingList
}

const toggleProductItem = (products: Product[], productId: string, value: boolean) => {
  const mappedItems = products.map(item => {
    if (item.id === productId) {
      return {
        ...item,
        edited: true,
        checked: value
      }
    }
    return item
  })

  return mappedItems

}

export const CurrentShoppingListProvider: React.FC<CurrentShoppingListProviderProps> = ({ children }) => {
  const [{ data }, { getData, storeData }] = useLocalStorage<ShoppingList>()
  const [shoppingList, setShoppingList] = useState<ShoppingList>()

  const clearStorage = () => {
    setShoppingList(undefined)
    storeData(SHOPPING_LIST_KEY, null)
  }

  const onDecrement = (productId: string) => {
    if (!shoppingList)
      return

    const updatedShoppingList = updateShoppingList(shoppingList, productId, -1)

    setShoppingList(updatedShoppingList)
    storeData(SHOPPING_LIST_KEY, updatedShoppingList)
  }

  const onIncrement = (productId: string) => {
    if (!shoppingList)
      return

    const updatedShoppingList = updateShoppingList(shoppingList, productId, 1)

    setShoppingList(updatedShoppingList)
    storeData(SHOPPING_LIST_KEY, updatedShoppingList)
  }

  const onToggleCheckItem = (productId: string, value: boolean) => {
    if (!shoppingList)
      return

    const { products } = shoppingList
    const updatedProducts = toggleProductItem(products, productId, value)

    const updatedShoppingList: ShoppingList = { ...shoppingList, products: updatedProducts }
    setShoppingList(updatedShoppingList)
    storeData(SHOPPING_LIST_KEY, updatedShoppingList)
  }

  const retrieveData = () => {
    if (!shoppingList)
      getData(SHOPPING_LIST_KEY)
  }

  useEffect(() => {
    if (!!data) {
      setShoppingList(data)
    }
  }, [data])

  return <CurrentShoppingListContext.Provider
    children={children}
    value={[
      { shoppingList },
      {
        clearStorage,
        onDecrement,
        onIncrement,
        onToggleCheckItem,
        retrieveData,
      }
    ]}
  />
}