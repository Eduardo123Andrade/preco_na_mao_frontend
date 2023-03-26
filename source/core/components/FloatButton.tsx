import React from 'react'
import { StyleSheet, Text } from 'react-native'
import { Touchable } from './Touchable'

interface FloatButtonProps { }

const SIZE = 50

export const FloatButton: React.FC<FloatButtonProps> = (props) => {
  const onPress = () => console.log('float button')
  return (
    <Touchable onPress={onPress} style={styles.container}>
      <Text>
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