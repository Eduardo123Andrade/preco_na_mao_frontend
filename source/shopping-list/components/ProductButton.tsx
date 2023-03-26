import { Text, Touchable } from 'core/components'
import React from 'react'
import { StyleSheet } from 'react-native'


type ButtonText = 'increment' | 'decrement'


interface ProductButtonProps {
  mode: ButtonText
  onPress: () => void
}

const BUTTON_MODE = {
  'decrement': '-',
  'increment': '+'
}

export const ProductButton: React.FC<ProductButtonProps> = ({ mode, onPress }) => {
  return (
    <Touchable onPress={onPress} style={styles.container}>
      <Text fontSize={20} color='#666'>
        {BUTTON_MODE[mode]}
      </Text>
    </Touchable>
  )
}


const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ADD8E6',
    justifyContent: 'center',
    alignItems: 'center',
    width: 25
  },
})