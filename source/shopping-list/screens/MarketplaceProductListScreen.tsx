import { StackNavigationOptions } from '@react-navigation/stack'
import { Screen, Text } from 'core/components'
import React from 'react'
import { FlatList, StyleSheet, View } from 'react-native'
import { ProductMarketplace } from 'shopping-list/components'
import { useShoppingList } from 'shopping-list/hooks'
import { Product } from 'shopping-list/interfaces'

interface RenderItemProps {
  item: Product
}

export const MarketplaceProductListScreen = () => {
  const [{ currentMarketplace }] = useShoppingList()

  const { products } = currentMarketplace

  const renderItem = ({ item }: RenderItemProps) => {
    return (
      <View style={styles.productContainer}>
        <ProductMarketplace product={item} />
      </View>
    )
  }

  return (
    <Screen contentContainerStyles={styles.container}>
      <View style={styles.headerContainer}>
        <Text fontSize={16} bold>
          Olá mundo!
        </Text>
      </View>

      <FlatList
        data={products}
        renderItem={renderItem}
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