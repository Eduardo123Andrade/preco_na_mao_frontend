import { StackNavigationOptions } from '@react-navigation/stack'
import { Screen, Text, Touchable } from 'core/components'
import React from 'react'
import { FlatList, StyleSheet, View, } from 'react-native'
import { Marketplace } from 'shopping-list/components'
import { Marketplace as MarketplaceInterface } from 'shopping-list/interfaces'
import { useShoppingList } from 'shopping-list/hooks'
import { useNavigation } from '@react-navigation/native'


interface RenderItemProps {
  item: MarketplaceInterface
}

export const MarketplaceListScreen = () => {
  const [{ marketplaceList }, { selectMarketplace }] = useShoppingList()
  const navigation = useNavigation()

  const renderItem = ({ item }: RenderItemProps) => {
    const onPress = () => {
      selectMarketplace(item)
      navigation.navigate('MarketplaceProductListScreen')
    }

    return (
      <Touchable onPress={onPress} style={styles.itemContainer}>
        <Marketplace marketplace={item} />
      </Touchable>
    )
  }

  return (
    <Screen contentContainerStyles={styles.container}>
      <FlatList
        data={marketplaceList}
        renderItem={renderItem}
      />
    </Screen>
  )
}

const navigationOptions: StackNavigationOptions = {
  headerBackground: () => <View style={{ backgroundColor: '#f2f2f2' }} />,
  title: 'Mercados'
}

MarketplaceListScreen.NavigationOptions = navigationOptions

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 0,
  },
  itemContainer: {
    borderBottomWidth: 0.5,
    // marginHorizontal: -20,
    paddingHorizontal: 20,
  }
})