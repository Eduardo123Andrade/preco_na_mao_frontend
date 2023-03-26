import { StackNavigationOptions } from '@react-navigation/stack'
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

interface CreateShoppingListScreenProps { }

export const CreateShoppingListScreen = (props: CreateShoppingListScreenProps) => {
  return (
    <View style={styles.container}>
      <Text>
        Olá mundo!
      </Text>
    </View>
  )
}

const navigationOptions: StackNavigationOptions = {
  headerBackground: () => <View style={{ backgroundColor: '#f2f2f2' }} />,
  title: 'Criar lista de compras'
}

CreateShoppingListScreen.NavigationOptions = navigationOptions

const styles = StyleSheet.create({
  container: {

  }
})