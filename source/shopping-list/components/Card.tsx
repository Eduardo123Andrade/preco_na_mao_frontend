import { Text, Touchable } from 'core/components'
import { formatDate } from 'core/utils'
import React from 'react'
import { StyleSheet, TouchableHighlight, View } from 'react-native'
import { ShoppingList } from 'shopping-list/interfaces'
import { MOCKED_SHOPPING_LIST } from 'shopping-list/utils'
import { RenderTextWithSeparator } from './RenderTextWithSeparator'

interface CardProps {
  shoppingList?: ShoppingList
}


const [shoppingList] = MOCKED_SHOPPING_LIST

export const Card: React.FC<CardProps> = (props) => {
  const { name, items, date } = shoppingList

  const quantityItems = items.length

  const formattedDate = formatDate(date)

  return (
    <Touchable onPress={() => console.log('oi')} style={styles.container}>
      <>
        <RenderTextWithSeparator text={name} />

        <RenderTextWithSeparator text={`itens: ${quantityItems}`} />

        <Text>
          {formattedDate}
        </Text>
      </>
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