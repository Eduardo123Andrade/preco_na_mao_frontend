import { useNavigation } from '@react-navigation/native'
import React, { useEffect } from 'react'
import { View, Text, Button, StyleSheet } from 'react-native'
import { useLocalStorage } from 'core/hooks'



interface User {
  name: string
}

export const HomeScreen = () => {
  const navigation = useNavigation()
  const [{ data }, { storeData, getData }] = useLocalStorage<User>()


  useEffect(() => {
    storeData("user", { name: "Eduardo" })
  }, [])

  useEffect(() => {
    console.log({ data })
  }, [data])


  const goToNextScreen = () => {
    getData('user')
    // navigation.navigate("Screen2")
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

