import { StackNavigationOptions } from '@react-navigation/stack'
import { Screen, Text } from 'core/components'
import React from 'react'
import { StyleSheet, View } from 'react-native'


export const MarketplaceProductListScreen = () => {
  return (
    <Screen contentContainerStyles={styles.container}>
      <Text>
        Olá mundo!
      </Text>
    </Screen>
  )
}



const navigationOptions: StackNavigationOptions = {
  headerBackground: () => <View style={{ backgroundColor: '#f2f2f2' }} />,
  title: 'Mercados'
}

MarketplaceProductListScreen.NavigationOptions = navigationOptions

const styles = StyleSheet.create({
  container: {

  }
})