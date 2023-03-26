import React, { createContext, useState } from "react"
import { ShoppingList } from "shopping-list/interfaces"
import { MOCKED_SHOPPING_LIST } from "shopping-list/utils"

interface ShoppingListProviderState {
  currentShoppingList: ShoppingList
  shoppingLists: ShoppingList[]
}

interface ShoppingListProviderActions {
  addShoppingList: (shoppingListData: ShoppingList) => void
  removeShoppingList: (id: string) => void
  selectShoppingList: (shoppingListData: ShoppingList) => void
  incrementProduct: (productId: string) => void
  decrementProduct: (productId: string) => void
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
  const [currentShoppingList, setCurrentShoppingList] = useState<ShoppingList>()

  const addShoppingList = (shoppingListData: ShoppingList) => {
    setShoppingLists(prevState => [...prevState, shoppingListData])
  }

  const removeShoppingList = (id: string) => {
    setShoppingLists(prevState => {
      const filteredList = prevState.filter(item => item.id !== id)

      return filteredList
    })
  }

  const selectShoppingList = (shoppingList: ShoppingList) => {
    setCurrentShoppingList(shoppingList)
  }

  const incrementProduct = (productId: string) => {
    const { items } = currentShoppingList

    const mappedItem = items.map(item => {
      if (item.id === productId) {
        return {
          ...item,
          quantity: item.quantity + 1
        }
      }
      return item
    })

    setCurrentShoppingList(prevState => {

      return {
        ...prevState,
        items: mappedItem
      }
    })
  }

  const decrementProduct = (productId: string) => {
    const { items } = currentShoppingList

    const mappedItem = items.map(item => {
      if (item.id === productId) {
        return {
          ...item,
          quantity: item.quantity - 1
        }
      }
      return item
    })

    setCurrentShoppingList(prevState => {

      return {
        ...prevState,
        items: mappedItem
      }
    })
  }


  return <ShoppingListContext.Provider
    children={children}
    value={[
      {
        currentShoppingList,
        shoppingLists,
      },
      {
        addShoppingList,
        removeShoppingList,
        selectShoppingList,
        incrementProduct,
        decrementProduct
      }
    ]}
  />
}