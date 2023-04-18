import { formatPrice } from 'core/utils'
import React from 'react'
import { StyleSheet, View } from 'react-native'
import { Text } from './Text'

interface TotalPriceProps {
  totalPrice: number
}

export const TotalPrice: React.FC<TotalPriceProps> = ({ totalPrice }) => {
  const formattedPrice = formatPrice(totalPrice)

  return (
    <View style={styles.container}>
      <Text fontSize={15}>
        Total
      </Text>
      <Text>
        {`R$ ${formattedPrice}`}
      </Text>
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    backgroundColor: '#d6e9e680',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 30,
    paddingHorizontal: 20,
  }
})