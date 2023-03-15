import { Screen } from 'core/components'
import { Text } from 'core/components/Text'
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-evenly',
  },
  titleContainer: {
    alignItems: 'center',
  },
})

