import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { View, Text, Button, StyleSheet } from 'react-native'

type HomeScreenProps = {}

export const HomeScreen: React.FC<HomeScreenProps> = (props) => {
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

