import { Product, ShoppingList } from "core/interfaces"
import React, { createContext, useState } from "react"
import { Marketplace } from "shopping-list/interfaces"
// import { MOCKED_CURRENT_MARKETPLACE, MOCKED_SHOPPING_LIST, MOCKED_CURRENT_SHOPPING_LIST } from "shopping-list/utils"
import { incrementProduct as coreIncrementProduct } from 'core/utils'

interface ShoppingListProviderState {
  currentMarketplace: Marketplace
  currentShoppingList: ShoppingList
  marketplaceList: Marketplace[]
  shoppingLists: ShoppingList[]
  selectedProducts: Product[]
}

interface ShoppingListProviderActions {
  addShoppingList: (shoppingListData: ShoppingList[]) => void
  decrementProduct: (productId: string) => void
  deleteList: () => void
  incrementProduct: (productId: string) => void
  removeProduct: (productId: string) => void
  removeShoppingList: (id: string) => void
  saveProduct: (product: Product, quantity: number) => void
  saveShoppingList: () => void
  selectMarketplace: (marketplace: Marketplace) => void
  selectShoppingList: (shoppingListData: ShoppingList) => void
  setMarketplaceList: (list: Marketplace[]) => void
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
  const [shoppingLists, setShoppingLists] = useState<ShoppingList[]>([])
  const [currentShoppingList, setCurrentShoppingList] = useState<ShoppingList>()
  const [currentMarketplace, setCurrentMarketplace] = useState<Marketplace>()
  const [marketplaceList, updateMarketplaceList] = useState<Marketplace[]>([])
  const [selectedProducts, setSelectedProducts] = useState<Product[]>([])

  const addShoppingList = (shoppingListData: ShoppingList[]) => {
    setShoppingLists(shoppingListData)
  }

  const setMarketplaceList = (list: Marketplace[]) => {
    updateMarketplaceList(list)
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
    const foundedProduct = products.find(item => item.id === productId)

    const mappedItems = coreIncrementProduct(products, productId, foundedProduct.quantity + 1)

    updateProductList(mappedItems)
  }

  const decrementProduct = (productId: string) => {
    const { products } = currentShoppingList
    const foundedProduct = products.find(item => item.id === productId)

    const mappedItems = coreIncrementProduct(products, productId, foundedProduct.quantity - 1)

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
    const foundedProduct = selectedProducts.find(item => item.id, product.id)
    const currentProduct = foundedProduct ?? product

    if (!foundedProduct)
      selectedProducts.push(product)


    const mappedProducts = coreIncrementProduct(selectedProducts, currentProduct.id, quantity)
    updateProductList(mappedProducts)

    // const { products } = currentShoppingList

    // const foundedProduct = products.find((item) => item.id === product.id)
    // const currentProduct = foundedProduct ?? product

    // if (!foundedProduct) {
    //   products.push(product)
    // }

    // const mappedProducts = coreIncrementProduct(products, currentProduct.id, quantity)

    // updateProductList(mappedProducts)
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

  const deleteList = () => {
    const filteredList = shoppingLists.filter(shoppingList => shoppingList.id !== currentShoppingList.id)
    setShoppingLists(filteredList)
  }

  return <ShoppingListContext.Provider
    children={children}
    value={[
      {
        currentMarketplace,
        currentShoppingList,
        marketplaceList,
        shoppingLists,
        selectedProducts
      },
      {
        addShoppingList,
        deleteList,
        decrementProduct,
        incrementProduct,
        removeShoppingList,
        removeProduct,
        saveProduct,
        saveShoppingList,
        selectMarketplace,
        selectShoppingList,
        setMarketplaceList
      }
    ]}
  />
}