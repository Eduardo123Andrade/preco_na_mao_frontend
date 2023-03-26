import { StackNavigationOptions } from '@react-navigation/stack'
import { Icon, Screen, Text } from 'core/components'
import { formatPrice } from 'core/utils'
import React from 'react'
import { StyleSheet, View } from 'react-native'
import { FlatList } from 'react-native-gesture-handler'
import { Product } from 'shopping-list/components'
import { Product as ProductInterface, ShoppingList } from 'shopping-list/interfaces'
import { MOCKED_SHOPPING_LIST } from 'shopping-list/utils'

interface ShoppingListDetailsScreenProps {
  shoppingList?: ShoppingList,
}


const [currentShoppingList] = MOCKED_SHOPPING_LIST

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

const sumValues = (previous: number, current: ProductInterface) =>
  previous + (current.quantity * current.price)

export const ShoppingListDetailsScreen = (props: ShoppingListDetailsScreenProps) => {
  const { items } = currentShoppingList
  const totalPrice = items.reduce(sumValues, 0)
  const formattedPrice = formatPrice(totalPrice)

  return (
    <Screen contentContainerStyles={styles.container}>
      <View>
        <View style={styles.headerContainer}>
          <Text>
            {currentShoppingList.name}
          </Text>
          <View style={styles.iconContainer}>
            <Icon
              name='play-arrow'
            />
            <Icon
              name='edit'
            />
          </View>
        </View>

        <View style={styles.listContainer}>
          <FlatList
            data={items}
            renderItem={renderItem}
          />
        </View>
      </View>

      <View style={styles.footerContainer}>
        <Text fontSize={15}>
          Total
        </Text>
        <Text>
          {`R$ ${formattedPrice}`}
        </Text>
      </View>
    </Screen>
  )
}


const navigationOptions: StackNavigationOptions = {
  headerTransparent: true,
  title: ''
}

ShoppingListDetailsScreen.NavigationOptions = navigationOptions


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between'
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 20,
  },
  iconContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flex: 0.2
  },
  listContainer: {
    marginHorizontal: -15,
  },
  productContainer: {
    paddingTop: 5
  },
  footerContainer: {
    backgroundColor: '#AAA',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 30,
    paddingHorizontal: 20,
    marginHorizontal: -20,
  }
})