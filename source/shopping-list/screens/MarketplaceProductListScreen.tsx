import { StackNavigationOptions } from '@react-navigation/stack'
import { Screen, Text, Touchable } from 'core/components'
import React, { useState } from 'react'
import { FlatList, StyleSheet, View } from 'react-native'
import { ProductMarketplace } from 'shopping-list/components'
import { useShoppingList } from 'shopping-list/hooks'
import { Product } from 'shopping-list/interfaces'
import { IncrementProductModal } from 'shopping-list/modals'

interface RenderItemProps {
  item: Product
}

export const MarketplaceProductListScreen = () => {
  const [{ currentMarketplace }] = useShoppingList()
  const [selectedProduct, setSelectedProduct] = useState<Product>()

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