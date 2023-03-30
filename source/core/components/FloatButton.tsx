import React from 'react'
import { StyleSheet } from 'react-native'
import { Icon } from './Icon'
import { Text } from './Text'
import { Touchable } from './Touchable'

interface FloatButtonProps {
  onPress: () => void
}

const SIZE = 50

export const FloatButton: React.FC<FloatButtonProps> = ({ onPress }) => {
  return (
    <Touchable onPress={onPress} style={styles.container}>
      <Icon
        mode='ant_design'
        name='plus'
        onPress={onPress}
        color='#FFF'
      />
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