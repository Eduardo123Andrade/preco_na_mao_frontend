import { StackNavigationOptions } from '@react-navigation/stack'
import { Screen } from 'core/components'
import { Text } from 'core/components/Text'
import { BaseModal } from 'core/modals'
import React, { useState } from 'react'
import { StyleSheet, View } from 'react-native'


export const HomeScreen = () => {
  const [showModal, setShowModal] = useState(true)

  const onRequestClose = () => setShowModal(false)

  return (
    <Screen contentContainerStyles={styles.container}>
      <View style={styles.titleContainer}>
        <Text>
          Olar, eu sou a Home
        </Text>
      </View>
      <BaseModal
        visible={showModal}
        onRequestClose={onRequestClose}
      />
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

