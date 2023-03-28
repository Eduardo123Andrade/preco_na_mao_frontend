import { useNavigation } from '@react-navigation/native'
import { StackNavigationOptions } from '@react-navigation/stack'
import { Icon, Screen, Text } from 'core/components'
import { formatPrice } from 'core/utils'
import React from 'react'
import { StyleSheet, View } from 'react-native'
import { FlatList } from 'react-native-gesture-handler'
import { Product } from 'shopping-list/components'
import { useShoppingList } from 'shopping-list/hooks/useShoppingList'
import { Product as ProductInterface, ShoppingList } from 'shopping-list/interfaces'

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

export const ShoppingListDetailsScreen = () => {
  const [{ currentShoppingList }] = useShoppingList()

  const { products } = currentShoppingList
  const navigation = useNavigation()

  const totalPrice = products.reduce(sumValues, 0)
  const formattedPrice = formatPrice(totalPrice)

  const onPressAddNewProducts = () => navigation.navigate('MarketplaceListScreen')


  const onPressAddStartShopping = () => console.log('start')

  const onPressAddSave = () => console.log('save')

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
    backgroundColor: '#AAA',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 30,
    paddingHorizontal: 20,
    marginHorizontal: -20,
  }
})