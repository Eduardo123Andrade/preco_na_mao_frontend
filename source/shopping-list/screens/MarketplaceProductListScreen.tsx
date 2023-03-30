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

  const onPress = () => {
    // TODO integrar com o backend
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
  headerBackground: () => <View style={{ backgroundColor: '#f2f2f2' }} />,
  title: 'Mercados'
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
  }
})