import { useNavigation } from '@react-navigation/native'
import { StackNavigationOptions } from '@react-navigation/stack'
import { Button, Loading, Screen, Text, Touchable } from 'core/components'
import { useErrorModal } from 'core/hooks'
import { Product } from 'core/interfaces'
import { SimpleModal } from 'core/modals'
import { incrementProduct } from 'core/utils'
import React, { useState } from 'react'
import { FlatList, StyleSheet, View } from 'react-native'
import { ProductMarketplace } from 'shopping-list/components'
import { useRequestAddItemsOnShoppingList, useRequestProducts, useShoppingList } from 'shopping-list/hooks'
import { IncrementProductModal } from 'shopping-list/modals'

interface RenderItemProps {
  item: Product
}

const renderLoading = () => {
  return (
    <Screen contentContainerStyles={styles.container}>
      <Loading />
    </Screen>
  )
}


export const MarketplaceProductListScreen = () => {
  const [{ currentMarketplace, currentShoppingList }, { selectMarketplace }] = useShoppingList()
  const [{ show, message }, { startModalError, resetState }] = useErrorModal()
  const [selectedProducts, setSelectedProducts] = useState<Product[]>([])
  const [selectedProduct, setSelectedProduct] = useState<Product>()
  const navigation = useNavigation()

  const { isLoading } = useRequestProducts({
    onSuccess: ({ data }) => {
      const products = data.map(item => ({ ...item, price: Number(item.price) }))
      selectMarketplace({ ...currentMarketplace, products })

    },
    onError: ({ response }) => {
      const { data: { message } } = response
      startModalError(message)
    }
  })

  const { isLoading: isUpdateListLoading, mutate } = useRequestAddItemsOnShoppingList({
    onSuccess: () => {
      navigation.navigate("ShoppingListDetailsScreen")
    },
    onError: ({ response }) => {
      const { data: { message } } = response
      startModalError(message)
    }
  })

  const { products = [] } = currentMarketplace ?? {}

  const renderItem = ({ item }: RenderItemProps) => {
    const onPress = () => {
      setSelectedProduct(item)
    }

    return (
      <Touchable onPress={onPress} style={styles.productContainer}>
        <ProductMarketplace product={item} />
      </Touchable>
    )
  }

  const onCloseRequest = () => {
    setSelectedProduct(undefined)
  }

  const onSave = (product: Product, quantity: number) => {
    const productsAux = [...selectedProducts]
    const foundedProduct = productsAux.find(item => item.id === product.id)
    const currentProduct = foundedProduct ?? product

    if (!foundedProduct)
      productsAux.push(product)

    const mappedProducts = incrementProduct(productsAux, currentProduct.id, quantity)
    setSelectedProducts(mappedProducts)
  }


  const onPress = () => {
    const products = selectedProducts.map(item => ({ id: item.id, quantity: item.quantity }))

    mutate({
      listId: currentShoppingList.id,
      products
    })
  }

  if (isLoading)
    return renderLoading()

  return (
    <Screen contentContainerStyles={styles.container}>
      <View style={styles.headerContainer}>
        <Text fontSize={16} bold>
          {currentMarketplace.name}
        </Text>
      </View>

      <FlatList
        data={products}
        renderItem={renderItem}
        contentContainerStyle={styles.listContentContainer}
      />

      {currentShoppingList &&
        <IncrementProductModal
          visible={!!selectedProduct}
          onCloseRequest={onCloseRequest}
          product={selectedProduct}
          onSave={onSave}
          selectedProducts={selectedProducts}
        />
      }
      <View>
        <Button
          isLoading={isUpdateListLoading}
          onPress={onPress}>
          Salvar
        </Button>
      </View>
      <SimpleModal
        visible={show}
        onRequestClose={resetState}
        message={message}
      />
    </Screen>
  )
}



const navigationOptions: StackNavigationOptions = {
  title: 'Produtos'
}

MarketplaceProductListScreen.NavigationOptions = navigationOptions

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 0,
  },
  headerContainer: {
    alignItems: 'center',
  },
  productContainer: {
    paddingHorizontal: 20,
    borderBottomWidth: 0.5
  },
  listContentContainer: {
    flexGrow: 1
  },
})