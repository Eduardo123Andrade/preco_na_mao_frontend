import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { ShoppingList } from 'shopping-list/interfaces'
import { MOCKED_SHOPPING_LIST } from 'shopping-list/utils'

interface CardProps {
  shoppingList?: ShoppingList
}


const [firstItem] = MOCKED_SHOPPING_LIST

export const Card: React.FC<CardProps> = (props) => {

  return (
    <View style={styles.container}>
      <Text>
        Olá mundo!
      </Text>
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    borderRadius: 10,
    backgroundColor: '#fff',
    width: 200,
    // shadowOffset: {
    //   width: 0,
    //   height: -0
    // },
    // shadowOpacity: 0.1,
    // shadowRadius: 72,
    elevation: 10
  },

})