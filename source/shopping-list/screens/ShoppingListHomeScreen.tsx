import { StackNavigationOptions } from '@react-navigation/stack'
import { FloatButton, Screen, Text } from 'core/components'
import React from 'react'
import { StyleSheet, View } from 'react-native'
import { FlatList } from 'react-native-gesture-handler'
import { Card } from 'shopping-list/components'
import { useShoppingList } from 'shopping-list/hooks/useShoppingList'
import { ShoppingList } from 'shopping-list/interfaces'


interface RenderShoppingListsItem {
  item: ShoppingList
}
const renderItem = ({ item }: RenderShoppingListsItem) => {
  return (
    <View style={styles.cardContainer}>
      <Card shoppingList={item} />
    </View>
  )
}

const EmptyList = () => {
  return (
    <View style={styles.emptyListComponent}>
      <Text>
        Você ainda nao tem lista de compras.
      </Text>
      <Text>
        Clique no botao a baixo e crie suas listas.
      </Text>

    </View>
  )
}


export const ShoppingListHomeScreen = () => {
  const [{ shoppingLists }] = useShoppingList()

  return (
    <Screen contentContainerStyles={styles.container}>
      <FlatList
        data={shoppingLists}
        renderItem={renderItem}
        contentContainerStyle={styles.listContentContainer}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={EmptyList}
      />
      <FloatButton />
    </Screen>
  )
}

const navigationOptions: StackNavigationOptions = {
  headerShown: false,
}

ShoppingListHomeScreen.NavigationOptions = navigationOptions

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 0,
  },
  cardContainer: {
    paddingVertical: 10,
    marginHorizontal: 20,
  },
  listContentContainer: {
    marginTop: 20,
    paddingBottom: 40
  },
  emptyListComponent: {
    justifyContent: 'center',
    alignItems: 'center'
  }
})