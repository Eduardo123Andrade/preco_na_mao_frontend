import { StackNavigationOptions } from '@react-navigation/stack'
import { Text } from 'core/components'
import React from 'react'
import { StyleSheet, View } from 'react-native'


export const UpdatePhoneNumber = () => {
  return (
    <View style={styles.container}>
      <Text>
        Olá mundo!
      </Text>
    </View>
  )
}


const navigationOptions: StackNavigationOptions = {
  title: 'Atulizar telefone'
}

UpdatePhoneNumber.NavigationOptions = navigationOptions

const styles = StyleSheet.create({
  container: {

  }
})