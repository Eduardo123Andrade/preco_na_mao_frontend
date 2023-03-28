import { Text } from 'core/components'
import React from 'react'
import { StyleSheet, View } from 'react-native'
import { Marketplace as MarketplaceInterface } from 'shopping-list/interfaces'

interface MarketplaceProps {
  marketplace: MarketplaceInterface
}

export const Marketplace: React.FC<MarketplaceProps> = ({ marketplace }) => {
  return (
    <View style={styles.container}>
      <Text>
        {marketplace.name}
      </Text>
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
  }
})