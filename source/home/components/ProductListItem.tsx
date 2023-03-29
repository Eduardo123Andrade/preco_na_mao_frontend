import { CheckBox, Text } from 'core/components'
import React, { useState } from 'react'
import { StyleSheet, View } from 'react-native'
import { ActionComponent } from 'shopping-list/components'
import { Product } from 'shopping-list/interfaces'

interface ProductListItemProps {
  product: Product
}

export const ProductListItem: React.FC<ProductListItemProps> = ({ product }) => {
  const [checked, setChecked] = useState(false)
  const { name, quantity } = product

  const toggleCheckBox = (value: boolean) => {
    setChecked(value)
  }

  const onPressDecrement = () => {
    if (quantity > 0)
      return
  }
  const onPressIncrement = () => { }

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
    borderWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
    // backgroundColor: '#F11',
    paddingVertical: 16
  },
  nameContainer: {
    flex: 0.65,
    // backgroundColor: '#FF1',
  },
  actionContainer: {
    flex: 0.35,
    flexDirection: 'row',
    // backgroundColor: '#3c3',
    justifyContent: 'flex-end'
  }
})