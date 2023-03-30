import { useNavigation } from '@react-navigation/native'
import { Text, Touchable } from 'core/components'
import { formatDate } from 'core/utils'
import React from 'react'
import { StyleSheet } from 'react-native'
import { useShoppingList } from 'shopping-list/hooks/useShoppingList'
import { ShoppingList } from 'core/interfaces'
import { RenderTextWithSeparator } from './RenderTextWithSeparator'

interface CardProps {
  shoppingList: ShoppingList
}

export const Card: React.FC<CardProps> = ({ shoppingList }) => {
  const [, { selectShoppingList }] = useShoppingList()
  const navigation = useNavigation()

  const { name, products, date } = shoppingList

  const quantityItems = products.length

  const formattedDate = formatDate(date)

  const onPress = () => {
    selectShoppingList(shoppingList)
    navigation.navigate('ShoppingListDetailsScreen')
  }

  return (
    <Touchable onPress={onPress} style={styles.container}>
      <RenderTextWithSeparator text={name} />

      <RenderTextWithSeparator text={`Produtos: ${quantityItems}`} />

      <Text>
        {formattedDate}
      </Text>
    </Touchable>
  )
}


const styles = StyleSheet.create({
  container: {
    borderRadius: 10,
    backgroundColor: '#fff',
    elevation: 10,
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
})