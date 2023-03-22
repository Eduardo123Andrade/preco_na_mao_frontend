import { StackNavigationOptions } from '@react-navigation/stack'
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'


export const ProfileScreen = () => {
  return (
    <View style={styles.container}>
      <Text>
        Ola, aqui você podera editar seus dados
      </Text>
    </View>
  )
}


const navigationOptions: StackNavigationOptions = {
  headerShown: false,
}

ProfileScreen.NavigationOptions = navigationOptions

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})