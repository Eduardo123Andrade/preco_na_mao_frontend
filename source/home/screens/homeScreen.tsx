import { StackNavigationOptions } from '@react-navigation/stack'
import { Screen, Text } from 'core/components'
import React from 'react'
import { StyleSheet, View } from 'react-native'


export const HomeScreen = () => {

  return (
    <Screen contentContainerStyles={styles.container}>
      <View style={styles.titleContainer}>
        <Text>
          Olar, eu sou a Home
        </Text>
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
    justifyContent: 'space-evenly',
  },
  titleContainer: {
    alignItems: 'center',
  },
})

