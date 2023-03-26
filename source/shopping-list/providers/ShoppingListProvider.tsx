import React, { createContext, useState } from "react"
import { Product, ShoppingList } from "shopping-list/interfaces"
import { MOCKED_SHOPPING_LIST } from "shopping-list/utils"

interface ShoppingListProviderState {
  currentShoppingList: ShoppingList
  shoppingLists: ShoppingList[]
}

interface ShoppingListProviderActions {
  addShoppingList: (shoppingListData: ShoppingList) => void
  decrementProduct: (productId: string) => void
  incrementProduct: (productId: string) => void
  removeProduct: (productId: string) => void
  removeShoppingList: (id: string) => void
  selectShoppingList: (shoppingListData: ShoppingList) => void
}

type ShoppingListProviderData = [
  state: ShoppingListProviderState,
  actions: ShoppingListProviderActions
]

export const ShoppingListContext = createContext<ShoppingListProviderData>({} as ShoppingListProviderData)

interface ShoppingListProviderProps {
  children: React.ReactNode
}

const incrementItem = (currentShoppingList: ShoppingList, productId: string, incrementor: number) => {
  const { items } = currentShoppingList

  const mappedItems = items.map(item => {
    if (item.id === productId) {
      return {
        ...item,
        quantity: item.quantity + incrementor
      }
    }
    return item
  })

  return mappedItems
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

  const updateProductList = (newProductList: Product[]) => {
    setCurrentShoppingList(prevState => {
      return {
        ...prevState,
        items: newProductList
      }
    })
  }

  const incrementProduct = (productId: string) => {
    const mappedItems = incrementItem(currentShoppingList, productId, 1)

    updateProductList(mappedItems)
  }

  const decrementProduct = (productId: string) => {
    const mappedItems = incrementItem(currentShoppingList, productId, -1)

    updateProductList(mappedItems)
  }

  const removeProduct = (productId: string) => {
    const { items } = currentShoppingList

    const filteredItems = items.filter(item => item.id !== productId)

    updateProductList(filteredItems)
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
        decrementProduct,
        incrementProduct,
        removeShoppingList,
        removeProduct,
        selectShoppingList,
      }
    ]}
  />
}