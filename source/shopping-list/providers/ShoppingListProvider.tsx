import React, { createContext, useState } from "react"
import { ShoppingList } from "shopping-list/interfaces"
import { MOCKED_SHOPPING_LIST } from "shopping-list/utils"

interface ShoppingListProviderState {
  shoppingLists: ShoppingList[]
}

interface ShoppingListProviderActions {
  addShoppingList: (shoppingListData: ShoppingList) => void
  removeShoppingList: (id: string) => void
}

type ShoppingListProviderData = [
  state: ShoppingListProviderState,
  actions: ShoppingListProviderActions
]

export const ShoppingListContext = createContext<ShoppingListProviderData>({} as ShoppingListProviderData)

interface ShoppingListProviderProps {
  children: React.ReactNode
}

export const ShoppingListProvider: React.FC<ShoppingListProviderProps> = ({ children }) => {
  const [shoppingLists, setShoppingLists] = useState<ShoppingList[]>(MOCKED_SHOPPING_LIST)

  const addShoppingList = (shoppingListData: ShoppingList) => {
    setShoppingLists(prevState => [...prevState, shoppingListData])
  }
  const removeShoppingList = (id: string) => {
    setShoppingLists(prevState => {
      const filteredList = prevState.filter(item => item.id !== id)

      return filteredList
    })
  }

  return <ShoppingListContext.Provider
    children={children}
    value={[
      { shoppingLists },
      {
        addShoppingList,
        removeShoppingList
      }
    ]}
  />
}