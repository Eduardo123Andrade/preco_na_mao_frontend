import { useNavigation } from '@react-navigation/native'
import { StackNavigationOptions } from '@react-navigation/stack'
import { Icon, Screen, Text, TotalPrice } from 'core/components'
import { SHOPPING_LIST_KEY } from 'core/constants'
import { useLocalStorage } from 'core/hooks'
import { calculateTotalPrice } from 'core/utils'
import React from 'react'
import { StyleSheet, View } from 'react-native'
import { FlatList } from 'react-native-gesture-handler'
import { Product } from 'shopping-list/components'
import { useShoppingList } from 'shopping-list/hooks/useShoppingList'
import { Product as ProductInterface, ShoppingList } from 'core/interfaces'

interface RenderItemProps {
  item: ProductInterface
}

const renderItem = ({ item }: RenderItemProps) => {
  return (
    <View style={styles.productContainer} key={`${item.id}`}>
      <Product product={item} />
    </View>
  )
}

export const ShoppingListDetailsScreen = () => {
  const [{ currentShoppingList }, { saveShoppingList }] = useShoppingList()
  const [, { storeData }] = useLocalStorage<ShoppingList>()

  const { products } = currentShoppingList
  const navigation = useNavigation()

  const totalPrice = products.reduce(calculateTotalPrice, 0)

  const onPressAddNewProducts = () => navigation.navigate('MarketplaceListScreen')

  const onPressAddStartShopping = () => {
    storeData(SHOPPING_LIST_KEY, currentShoppingList)
    navigation.navigate('Home')
  }


  /**
   * router: shopping-list/save-products
   * body
   *  listId,
   *  [
   *    productId,
   *    quantity
   * ]
   * 
   * success:
   *  status: ok
   * 
   * error:
   *  status: _
   * 
   */

  const onPressAddSave = () => {
    saveShoppingList()
  }

  const hasEditedItem = products.find(item => item.edited)

  return (
    <Screen contentContainerStyles={styles.container}>
      <View style={styles.subContainer}>
        <View style={styles.headerContainer}>
          <Text>
            {currentShoppingList.name}
          </Text>
          <View style={styles.iconContainer}>
            <Icon
              name='play-arrow'
              onPress={onPressAddStartShopping}
            />

            {hasEditedItem && (
              <Icon
                name='save'
                onPress={onPressAddSave}
              />
            )}

            {!hasEditedItem && (
              <Icon
                mode='ant_design'
                name='plus'
                onPress={onPressAddNewProducts}
              />
            )}
          </View>
        </View>

        <View style={styles.listContainer}>
          <FlatList
            data={products}
            renderItem={renderItem}
            contentContainerStyle={styles.listContentContainer}
          />
        </View>
      </View>

      <View style={styles.footerContainer}>
        <TotalPrice totalPrice={totalPrice} />
      </View>
    </Screen>
  )
}


const navigationOptions: StackNavigationOptions = {
  headerBackground: () => <View style={{ backgroundColor: '#f2f2f2' }} />,
  title: 'Detalhe da lista'
}

ShoppingListDetailsScreen.NavigationOptions = navigationOptions


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
  },
  subContainer: {
    flexGrow: 1,
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom: 20,
  },
  iconContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flex: 0.2
  },
  listContainer: {
    marginHorizontal: -15,
    flexGrow: 1,
  },
  listContentContainer: {
    flexGrow: 1
  },
  productContainer: {
    paddingTop: 5
  },
  footerContainer: {
    marginHorizontal: -20,
  }
})