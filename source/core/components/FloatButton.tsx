import React from 'react'
import { StyleSheet } from 'react-native'
import { Text } from './Text'
import { Touchable } from './Touchable'

interface FloatButtonProps {
  onPress: () => void
}

const SIZE = 50

export const FloatButton: React.FC<FloatButtonProps> = ({ onPress }) => {
  // const onPress = () => console.log('float button')
  return (
    <Touchable onPress={onPress} style={styles.container}>
      <Text fontSize={25} color='#FFF' >
        +
      </Text>
    </Touchable>
  )
}


const styles = StyleSheet.create({
  container: {
    backgroundColor: '#3c3',
    width: SIZE,
    justifyContent: 'center',
    alignItems: 'center',
    height: SIZE,
    borderRadius: SIZE,
    position: 'absolute',
    bottom: 10,
    right: 25,
  }
})