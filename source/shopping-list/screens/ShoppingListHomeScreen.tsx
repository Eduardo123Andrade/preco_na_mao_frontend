import { useNavigation } from '@react-navigation/native'
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

const HeaderList = () => {
  return (
    <View style={styles.headerListComponent}>
      <Text bold fontSize={20} color='#228B22'>
        Suas listas de compras
      </Text>
    </View>
  )
}

export const ShoppingListHomeScreen = () => {
  const [{ shoppingLists }] = useShoppingList()
  const navigation = useNavigation()

  const onPress = () => navigation.navigate('CreateShoppingListScreen')

  return (
    <Screen contentContainerStyles={styles.container}>
      <FlatList
        data={shoppingLists}
        renderItem={renderItem}
        contentContainerStyle={styles.listContentContainer}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={EmptyList}
        ListHeaderComponent={HeaderList}
      />
      <FloatButton onPress={onPress} />
    </Screen>
  )
}

const navigationOptions: StackNavigationOptions = {
  headerTransparent: true,
  title: ''
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
    marginTop: 15,
    paddingBottom: 40
  },
  emptyListComponent: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  headerListComponent: {
    justifyContent: 'center',
    alignItems: 'center'
  }
})