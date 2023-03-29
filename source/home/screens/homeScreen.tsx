import { useNavigation } from '@react-navigation/native'
import { StackNavigationOptions } from '@react-navigation/stack'
import { Screen, Text } from 'core/components'
import { SHOPPING_LIST_KEY } from 'core/constants'
import { useLocalStorage } from 'core/hooks'
import { formatDate } from 'core/utils'
import React, { useEffect } from 'react'
import { StyleSheet, View } from 'react-native'
import { ProductListItem } from 'home/components'
import { ShoppingList } from 'shopping-list/interfaces'
import { MOCKED_CURRENT_SHOPPING_LIST } from 'shopping-list/utils'


const { name, date, products } = MOCKED_CURRENT_SHOPPING_LIST

const [firstElement] = products

console.log(JSON.stringify(products, null, 2))
console.log(JSON.stringify(firstElement, null, 2))

export const HomeScreen = () => {
  const [{ data }, { getData }] = useLocalStorage<ShoppingList>()
  const navigation = useNavigation()
  const formattedDate = formatDate(date)

  useEffect(() => navigation.addListener('focus', () => {
    // getData(SHOPPING_LIST_KEY)
  }), [navigation, getData])


  return (
    <Screen contentContainerStyles={styles.container}>
      <View style={styles.titleContainer}>
        <Text>
          {`Lista: ${name}`}
        </Text>
        <Text>
          {formattedDate}
        </Text>
      </View>

      <ProductListItem product={firstElement} />

    </Screen>
  )
}


const navigationOptions: StackNavigationOptions = {
  // title: ''
  // headerShown: false,
}

HomeScreen.NavigationOptions = navigationOptions

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'space-evenly',
  },
  titleContainer: {
    // backgroundColor: '#Ff1',
    paddingVertical: 24
    // alignItems: 'center',
  },
})

