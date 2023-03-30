import { useNavigation } from '@react-navigation/native'
import { StackNavigationOptions } from '@react-navigation/stack'
import { Screen, Text, TotalPrice } from 'core/components'
import { calculateTotalPrice } from 'core/utils'
import React, { useEffect } from 'react'
import { StyleSheet, View } from 'react-native'
import { ListDetails, ProductListItem } from 'home/components'
import { useCurrentShoppingList } from 'home/hooks'
import { Product } from 'core/interfaces'
import { FlatList } from 'react-native-gesture-handler'


interface RenderItemProps {
  item: Product
}

const renderItem = ({ item }: RenderItemProps) => {
  return (
    <View key={`${item.id}`} style={styles.itemContainer}>
      <ProductListItem product={item} />
    </View>
  )
}

const EmptyList = () => {
  return (
    <View style={styles.emptyListComponent}>
      <Text fontSize={16} bold>
        Você ainda não começou suas compras.
      </Text>
      <Text fontSize={16}>
        Clique no botao de play no detalhe da lista e comece imediatamente.
      </Text>
    </View>
  )
}

export const HomeScreen = () => {
  const [{ shoppingList }, { retrieveData }] = useCurrentShoppingList()

  const { name, date, products = [] } = shoppingList ?? {}
  const navigation = useNavigation()

  const filteredProducts = products.filter(product => product.checked)
  const totalPrice = filteredProducts.reduce(calculateTotalPrice, 0)


  useEffect(() => navigation.addListener('focus', () => {
    retrieveData()
  }), [navigation, retrieveData])


  return (
    <Screen contentContainerStyles={styles.container}>
      <View>
        {!!shoppingList && (
          <View style={styles.titleContainer}>
            <ListDetails
              name={name}
              date={date}
            />
          </View>
        )}
        <FlatList
          data={products}
          renderItem={renderItem}
          ListEmptyComponent={EmptyList}
        />
      </View>

      <View>
        {!!shoppingList && <TotalPrice totalPrice={totalPrice} />}
      </View>
    </Screen>
  )
}


const navigationOptions: StackNavigationOptions = {
  headerShown: false,
}

HomeScreen.NavigationOptions = navigationOptions

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    paddingHorizontal: 0,
  },
  titleContainer: {
    paddingVertical: 24,
    paddingHorizontal: 20
  },
  itemContainer: {
    borderBottomWidth: 0.5,
    paddingHorizontal: 20
  },
  emptyListComponent: {
    paddingTop: 24,
    paddingHorizontal: 40,
  },
})

