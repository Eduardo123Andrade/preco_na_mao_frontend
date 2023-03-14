import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'


export const HomeScreen = () => {
  const navigation = useNavigation()

  const goToNextScreen = () => {
    navigation.navigate("Screen2")
  }

  return (
    <View style={styles.container}>
      <Text>
        Olá mundo!
      </Text>

      <Button
        title='Press me'
        onPress={goToNextScreen} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
})

