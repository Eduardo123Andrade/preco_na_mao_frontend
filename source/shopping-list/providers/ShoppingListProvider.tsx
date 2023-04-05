import { Product, ShoppingList } from "core/interfaces"
import React, { createContext, useState } from "react"
import { useRequestMarketplaceList } from "shopping-list/hooks"
import { Marketplace } from "shopping-list/interfaces"
import { MOCKED_CURRENT_MARKETPLACE, MOCKED_SHOPPING_LIST, MOCKED_CURRENT_SHOPPING_LIST } from "shopping-list/utils"
import { incrementProduct as coreIncrementProduct } from 'core/utils'

interface ShoppingListProviderState {
  currentMarketplace: Marketplace
  currentShoppingList: ShoppingList
  marketplaceList: Marketplace[]
  shoppingLists: ShoppingList[]
}

interface ShoppingListProviderActions {
  addShoppingList: (shoppingListData: ShoppingList) => void
  decrementProduct: (productId: string) => void
  incrementProduct: (productId: string) => void
  removeProduct: (productId: string) => void
  removeShoppingList: (id: string) => void
  saveProduct: (product: Product, quantity: number) => void
  saveShoppingList: () => void
  selectMarketplace: (marketplace: Marketplace) => void
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


const setAllProductsEditedFalse = (shoppingList: ShoppingList) => {
  const { products } = shoppingList

  const mappedProducts = products.map(product => ({ ...product, edited: false }))
  return { ...shoppingList, products: mappedProducts }
}

export const ShoppingListProvider: React.FC<ShoppingListProviderProps> = ({ children }) => {
  const [shoppingLists, setShoppingLists] = useState<ShoppingList[]>(MOCKED_SHOPPING_LIST)
  const [currentShoppingList, setCurrentShoppingList] = useState<ShoppingList>(MOCKED_CURRENT_SHOPPING_LIST)
  const [currentMarketplace, setCurrentMarketplace] = useState<Marketplace>(MOCKED_CURRENT_MARKETPLACE)
  const [{ marketplaceList }] = useRequestMarketplaceList()

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
        products: newProductList
      }
    })
  }

  const incrementProduct = (productId: string) => {
    const { products } = currentShoppingList
    const mappedItems = coreIncrementProduct(products, productId, 1)

    updateProductList(mappedItems)
  }

  const decrementProduct = (productId: string) => {
    const { products } = currentShoppingList
    const mappedItems = coreIncrementProduct(products, productId, -1)

    updateProductList(mappedItems)
  }

  const removeProduct = (productId: string) => {
    const { products } = currentShoppingList

    const filteredItems = products.filter(item => item.id !== productId)

    updateProductList(filteredItems)
  }

  const selectMarketplace = (marketplace: Marketplace) => {
    setCurrentMarketplace(marketplace)
  }

  const saveProduct = (product: Product, quantity: number) => {
    const { products } = currentShoppingList

    const foundedProduct = products.find((item) => item.id === product.id)
    const currentProduct = foundedProduct ?? product

    if (!foundedProduct) {
      products.push(product)
    }

    const mappedProducts = coreIncrementProduct(products, currentProduct.id, quantity)

    updateProductList(mappedProducts)
  }

  const saveShoppingList = () => {
    const foundedShoppingList = shoppingLists.find(item => item.id === currentShoppingList.id)

    if (!foundedShoppingList) {
      setShoppingLists(prevState => [...prevState, currentShoppingList])
    }

    const mappedProducts = shoppingLists.map(item => {
      if (item.id === currentShoppingList.id) {
        return setAllProductsEditedFalse(currentShoppingList)
      }
      return setAllProductsEditedFalse(item)
    })

    const updatedCurrentShoppingList = setAllProductsEditedFalse(currentShoppingList)

    setShoppingLists(mappedProducts)
    setCurrentShoppingList(updatedCurrentShoppingList)
  }

  return <ShoppingListContext.Provider
    children={children}
    value={[
      {
        currentMarketplace,
        currentShoppingList,
        marketplaceList,
        shoppingLists,
      },
      {
        addShoppingList,
        decrementProduct,
        incrementProduct,
        removeShoppingList,
        removeProduct,
        saveProduct,
        saveShoppingList,
        selectMarketplace,
        selectShoppingList,
      }
    ]}
  />
}