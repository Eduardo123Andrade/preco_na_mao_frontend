import { useNavigation } from '@react-navigation/native'
import { StackNavigationOptions } from '@react-navigation/stack'
import { Button, Screen, Text, Touchable } from 'core/components'
import React, { useState } from 'react'
import { FlatList, StyleSheet, View } from 'react-native'
import { ProductMarketplace } from 'shopping-list/components'
import { useShoppingList } from 'shopping-list/hooks'
import { Product } from 'core/interfaces'
import { IncrementProductModal } from 'shopping-list/modals'

interface RenderItemProps {
  item: Product
}

export const MarketplaceProductListScreen = () => {
  const [{ currentMarketplace }, { saveShoppingList }] = useShoppingList()
  const [selectedProduct, setSelectedProduct] = useState<Product>()
  const navigation = useNavigation()


  const { products } = currentMarketplace

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


  /**
   * router: market-places/:id/products
   * 
   * success: 
   *  status: ok
   *  response:
   *    products[]
   * 
   * error:
   *  status: _
   */


  const onPress = () => {
    saveShoppingList()
    navigation.navigate('ShoppingListHomeScreen')
  }

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

      <IncrementProductModal
        visible={!!selectedProduct}
        onCloseRequest={onCloseRequest}
        product={selectedProduct}
      />
      <View>
        <Button onPress={onPress}>
          Salvar
        </Button>
      </View>
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