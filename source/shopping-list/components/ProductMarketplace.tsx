import { Text } from 'core/components'
import { formatPrice } from 'core/utils'
import React from 'react'
import { StyleSheet, View } from 'react-native'
import { Product } from 'shopping-list/interfaces'

interface ProductMarketplaceProps {
  product: Product
}

export const ProductMarketplace: React.FC<ProductMarketplaceProps> = ({ product }) => {
  const formattedPrice = formatPrice(product.price)

  return (
    <View style={styles.container}>
      <View style={styles.nameContainer}>
        <Text>
          {product.name}
        </Text>
      </View>

      <View style={styles.priceContainer}>
        <Text>
          R$
        </Text>
        <Text>
          {formattedPrice}
        </Text>
      </View>
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingVertical: 10,
    alignItems: 'center'
  },
  nameContainer: {
    width: '80%',
  },
  priceContainer: {
    width: '20%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  }
})