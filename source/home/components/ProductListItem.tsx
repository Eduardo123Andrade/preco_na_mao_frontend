import { CheckBox, Text } from 'core/components'
import { Product } from 'core/interfaces'
import { useCurrentShoppingList } from 'home/hooks'
import React from 'react'
import { StyleSheet, View } from 'react-native'
import { ActionComponent } from 'shopping-list/components'

interface ProductListItemProps {
  product: Product
}

export const ProductListItem: React.FC<ProductListItemProps> = ({ product }) => {
  const [, { onDecrement, onIncrement, onToggleCheckItem }] = useCurrentShoppingList()
  const { name, quantity, checked } = product

  const toggleCheckBox = (value: boolean) => {
    onToggleCheckItem(product.id, value)
  }

  const onPressDecrement = () => {
    if (quantity > 0)
      return onDecrement(product.id)
  }
  const onPressIncrement = () => {
    onIncrement(product.id)
  }

  return (
    <View style={styles.container}>
      <View style={styles.nameContainer}>
        <Text>
          {name}
        </Text>
      </View>

      <View style={styles.actionContainer}>
        <ActionComponent
          number={quantity}
          onPressDecrement={onPressDecrement}
          onPressIncrement={onPressIncrement}
        />
        <CheckBox
          value={checked}
          onValueChange={toggleCheckBox}
        />
      </View>

    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 16
  },
  nameContainer: {
    flex: 0.65,
  },
  actionContainer: {
    flex: 0.35,
    flexDirection: 'row',
    justifyContent: 'flex-end'
  }
})