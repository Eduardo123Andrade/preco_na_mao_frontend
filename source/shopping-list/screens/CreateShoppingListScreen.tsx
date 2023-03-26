import { StackNavigationOptions } from '@react-navigation/stack'
import { Button, InputText, Screen, Text } from 'core/components'
import React from 'react'
import { StyleSheet, View } from 'react-native'

interface CreateShoppingListScreenProps { }

export const CreateShoppingListScreen = (props: CreateShoppingListScreenProps) => {
  return (
    <Screen contentContainerStyles={styles.container}>
      <View style={styles.subContainer}>
        <InputText
          placeholder='Nova lista'
        />
        <Button>
          <Text>
            Avançar
          </Text>
        </Button>
      </View>
    </Screen>
  )
}

const navigationOptions: StackNavigationOptions = {
  headerBackground: () => <View style={{ backgroundColor: '#f2f2f2' }} />,
  title: 'Criar lista de compras'
}

CreateShoppingListScreen.NavigationOptions = navigationOptions

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  subContainer: {
    flex: 1,
    paddingTop: 20,
    paddingBottom: 30,
    justifyContent: 'space-between'
  }
})