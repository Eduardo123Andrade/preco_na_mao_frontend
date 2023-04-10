import React, { useState } from 'react'
import { StyleSheet, View } from 'react-native'
import { Icon } from './Icon'
import { DrawerNavigation } from './drawer-navigator'

interface HeaderProps { }

export const Header: React.FC<HeaderProps> = () => {
  const [visible, setVisible] = useState(false)

  const onPress = () => {
    setVisible(true)

  }

  const onRequestClose = () => {
    setVisible(false)
  }

  return (
    <View style={styles.container}>
      <Icon onPress={onPress} name='menu' size={24} />
      <DrawerNavigation visible={visible} onRequestClose={onRequestClose} />
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    padding: 5,
    backgroundColor: "#E2FBED"
  }
})