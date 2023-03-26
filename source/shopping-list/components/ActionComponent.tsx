import { zeroToLeft } from 'core/utils'
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { ProductButton } from './ProductButton'

interface ActionComponentProps {
  number: number
  onPressDecrement: () => void
  onPressIncrement: () => void
}

export const ActionComponent: React.FC<ActionComponentProps> = ({ number, onPressDecrement, onPressIncrement }) => {

  const formattedNumber = zeroToLeft(number)
  return (
    <View style={styles.container}>
      <ProductButton onPress={onPressDecrement} mode='decrement' />

      <View style={styles.quantityContainer}>
        <Text>
          {formattedNumber}
        </Text>
      </View>

      <ProductButton onPress={onPressIncrement} mode='increment' />
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  quantityContainer: {
    paddingHorizontal: 10,
    backgroundColor: '#FFF',
    justifyContent: 'center'
  }

})