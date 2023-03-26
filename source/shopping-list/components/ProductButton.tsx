import { Icon, Touchable } from 'core/components'
import React from 'react'
import { StyleSheet } from 'react-native'

type ButtonText = 'increment' | 'decrement'


interface ProductButtonProps {
  mode: ButtonText
  onPress: () => void
}

const BUTTON_MODE = {
  'decrement': 'minus',
  'increment': 'plus'
}

export const ProductButton: React.FC<ProductButtonProps> = ({ mode, onPress }) => {
  return (
    <Touchable onPress={onPress} style={styles.container}>
      <Icon
        mode='ant_design'
        name={BUTTON_MODE[mode]}
        color='#000'
        size={15}
      />
    </Touchable>
  )
}


const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 25
  },
})