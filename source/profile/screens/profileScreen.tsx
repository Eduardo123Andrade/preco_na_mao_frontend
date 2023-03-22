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


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})