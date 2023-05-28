import { StackNavigationOptions } from '@react-navigation/stack'
import { Loading, Screen, Touchable } from 'core/components'
import React from 'react'
import { FlatList, StyleSheet, } from 'react-native'
import { Marketplace } from 'shopping-list/components'
import { Marketplace as MarketplaceInterface } from 'shopping-list/interfaces'
import { useRequestMarketplace, useShoppingList } from 'shopping-list/hooks'
import { useNavigation } from '@react-navigation/native'
import { useErrorModal } from 'core/hooks'
import { SimpleModal } from 'core/modals'


interface RenderItemProps {
  item: MarketplaceInterface
}

export const MarketplaceListScreen = () => {
  const [{ marketplaceList }, { selectMarketplace, setMarketplaceList }] = useShoppingList()
  const [{ show, message }, { startModalError, resetState }] = useErrorModal()
  const navigation = useNavigation()

  const { isLoading } = useRequestMarketplace({
    onSuccess: ({ data }) => {
      setMarketplaceList(data)
    },
    onError: ({ response }) => {
      const { data: { message } } = response
      startModalError(message)
    }
  })

  const renderItem = ({ item }: RenderItemProps) => {
    const onPress = () => {
      selectMarketplace({ ...item, products: [] })
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

      {isLoading ?
        <Loading /> :
        <FlatList
          data={marketplaceList}
          renderItem={renderItem}
        />
      }

      <SimpleModal
        visible={show}
        onRequestClose={resetState}
        message={message}
      />
    </Screen>
  )
}

const navigationOptions: StackNavigationOptions = {
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
    paddingHorizontal: 20,
  }
})